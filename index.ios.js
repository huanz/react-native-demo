/**
* Sample React Native App
* https://github.com/facebook/react-native
*/
'use strict';

var React = require('react-native');

var {
  AppRegistry,
  Navigator,
  StatusBarIOS,
  Component
} = React;

var MainTab = require('./mainTab');

class TieBa extends Component {
  render() {
    StatusBarIOS.setStyle('light-content');
    return (
      <Navigator
        initialRoute={{name: 'Home', index: 0}}
        renderScene={(route, navigator) =>
          <MainTab navigator={navigator}/>
        }
        />
    );
  }
}

AppRegistry.registerComponent('TieBa', () => TieBa);
