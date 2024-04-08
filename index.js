/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';

TrackPlayer.registerPlaybackService(() =>
  require('./src/services/audioPlaybackService'),
);

AppRegistry.registerComponent(appName, () => App);
