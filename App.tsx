import React from 'react';
import {Text, View} from 'react-native';
import TrackPlayer from 'react-native-track-player';

function App() {
  React.useEffect(() => {
    const init = async () => {
      await TrackPlayer.setupPlayer();
      // await TrackPlayer.add({
      //   url: 'https://open.spotify.com/embed/playlist/13IGjCsNoySchlHk1FyqLL',
      //   title: 'Coelacanth I',
      //   artist: 'deadmau5',
      //   artwork: '',
      //   duration: 166,
      // });

      TrackPlayer.play();
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
