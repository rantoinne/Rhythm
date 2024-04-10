import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import TrackPlayer, {
  useTrackPlayerEvents,
  Event,
  Capability,
} from 'react-native-track-player';
import Slider from '@react-native-community/slider';

const events = [
  Event.PlaybackState,
  Event.PlaybackActiveTrackChanged,
  Event.PlaybackProgressUpdated,
];

const MusicPlayer = () => {
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentState, setCurrentState] = useState('playing');

  useEffect(() => {
    const setupPlayer = async () => {
      await TrackPlayer.setupPlayer({
        waitForBuffer: true,
      });
      await TrackPlayer.updateOptions({
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.Stop,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
        ],
        progressUpdateEventInterval: 0.9,
      });
      await TrackPlayer.add({
        id: 'trackId',
        url: 'https://aac.saavncdn.com/273/162c51cc9d8e7baca25ec6a8aec2dedd_12.mp4',
        title: 'Track Title',
        artist: 'Track Artist',
      });
      await TrackPlayer.play();
      const trackDuration = (await TrackPlayer.getProgress()).duration;
      setDuration(trackDuration);
    };

    setupPlayer();

    // Cleanup function
    // return () => {
    //   TrackPlayer.remove();
    // };
  }, []);

  useTrackPlayerEvents(events, async event => {
    console.log('called')
    if (event.type === Event.PlaybackProgressUpdated) {
      const currentPosition = await TrackPlayer.getProgress();
      console.log({ currentPosition });
      setPosition(currentPosition.position);
    } else if (event.type === Event.PlaybackActiveTrackChanged) {
      const trackDuration = await TrackPlayer.getProgress();
      setDuration(trackDuration.duration);
    }
  });

  const togglePlayback = async () => {
    const currentState = await TrackPlayer.getPlaybackState();
    if (currentState.state === 'paused' || currentState.state === 'stopped') {
      await TrackPlayer.play();
      setCurrentState('playing');
    } else {
      await TrackPlayer.pause();
      setCurrentState('paused');
    }
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={duration}
        value={position}
        onSlidingComplete={async value => {
          console.log({value});
          await TrackPlayer.seekTo(value);
        }}
        minimumTrackTintColor="#111000"
        maximumTrackTintColor="#000000"
      />
      <Text style={styles.position}>
        {new Date(position * 1000).toISOString().substr(14, 5)}
      </Text>
      <Text style={styles.duration}>
        {new Date(duration * 1000).toISOString().substr(14, 5)}
      </Text>
      <TouchableOpacity onPress={togglePlayback}>
        <Text style={styles.playButton}>
          {currentState === 'playing' ? 'Pause' : 'Play'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: 300,
    height: 40,
  },
  position: {
    fontSize: 18,
  },
  duration: {
    fontSize: 18,
  },
  playButton: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default MusicPlayer;
