import React from 'react';
import {Text, View} from 'react-native';
import TrackPlayer, {Capability} from 'react-native-track-player';

function App() {
  React.useEffect(() => {
    const init = async () => {
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
      });
      await TrackPlayer.add([
        {
          url: 'https://aac.saavncdn.com/273/162c51cc9d8e7baca25ec6a8aec2dedd_12.mp4',
        },
      ]);
      await TrackPlayer.play();
      await TrackPlayer.seekTo(80);
    };

    init();
  });

  return (
    <View className="flex flex-1 bg-[#000] text-black">
      <Text className="text-orange-500">Hey</Text>
      <Text>Hey</Text>
      <Text>Hey</Text>
      <Text>Hey</Text>
    </View>
  );
}

export default App;
