import React from 'react';
import {Text, View} from 'react-native';
import TrackPlayer, {Capability} from 'react-native-track-player';
import SkiaPlayGround from './src/components/SkiaPlayGround';
import MusicPlayer from './src/components/AudioPlayer';

function App() {
  React.useEffect(() => {
    const init = async () => {
      // await TrackPlayer.setupPlayer({
      //   waitForBuffer: true,
      // });
      // await TrackPlayer.updateOptions({
      //   capabilities: [
      //     Capability.Play,
      //     Capability.Pause,
      //     Capability.Stop,
      //     Capability.SkipToNext,
      //     Capability.SkipToPrevious,
      //   ],
      // });
      // await TrackPlayer.add([
      //   {
      //     url: 'https://aac.saavncdn.com/273/162c51cc9d8e7baca25ec6a8aec2dedd_12.mp4',
      //   },
      // ]);
      // await TrackPlayer.play();
      // await TrackPlayer.seekTo(80);
    };

    init();
  });

  return (
    <View className="flex flex-1 bg-[#FFF] text-black">
      {/* App Container with stacked cards */}
      {/* <SkiaPlayGround /> */}
      <Text>Render Above</Text>
      <MusicPlayer />
    </View>
  );
}

/**
 * 1. Create an audio player
 * 2. Create Swipeable card with Audio player
 * 3. Persist the swipes in liked and archived
 * 4. Requests implementation from saaavncdn
 */

export default App;
