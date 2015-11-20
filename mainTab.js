'use strict';

var React = require('react-native');
var Bar = require('./component/bar');
var Thread = require('./component/thread');
var Message = require('./component/message');
var Found = require('./component/found');
var {
  View,
  Text,
  TabBarIOS,
  Component,
  Image,
  Animated,
  LayoutAnimation,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback
} = React;

var SCREEN_WIDTH = Dimensions.get('window').width;
var SCREEN_HEIGHT = Dimensions.get('window').height;

var styles = require('./styles');

var tabMap = {
  bar: '进吧',
  thread: '看帖',
  message: '消息',
  found:'发现',
};

class MainTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'bar',
      x: new Animated.Value(0),
      s: new Animated.Value(1),
      open: false,
      isAnim: false,
    };
  }
  render() {
    let animatedStyles = {transform: [{translateX: this.state.x}, {scale: this.state.s}]};
    return (
      <View style={styles.container}>
        <Image
          source={{uri: 'homeBg'}}
          style={styles.sideMenu}>
          <View style={[styles.sideMenuContent, {width: 220 + SCREEN_WIDTH * (1 - 0.7) / 2}]}>
            <View style={styles.userInfo}>
              <TouchableOpacity onPress={this._toggleNav.bind(this)}>
                <Image
                  source={{uri: 'avatar'}}
                  style={styles.userInfoAvatar}/>
              </TouchableOpacity>
              <Text style={styles.userInfoName}>bukas</Text>
            </View>
            <View style={styles.line}></View>
          </View>
        </Image>
        <Animated.View style={[styles.container, animatedStyles]}>
          <View style={styles.nav}>
            <View style={styles.navTitle}>
              <Text style={styles.navTitleText}>
                {tabMap[this.state.selectedTab]}
              </Text>
            </View>
            <View style={styles.navLeft}>
              <TouchableOpacity onPress={this._toggleNav.bind(this)}>
                <Image
                  source={{uri: 'avatar'}}
                  style={styles.navIcon}/>
              </TouchableOpacity>
            </View>
            <View style={styles.navRight}>
              <TouchableOpacity onPress={this._toggleNav.bind(this)}>
                <Image
                  source={{uri: 'ring'}}
                  style={styles.navIcon}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._toggleNav.bind(this)}>
                <Image
                  source={{uri: 'sign'}}
                  style={styles.navIcon}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.wrap}>
            <TabBarIOS
              tintColor = '#3385ff'
              barTintColor = '#f8fafd'
              titleTextColor = '#7b7d81'>
              <TabBarIOS.Item
                title = '进吧'
                badge = '3'
                icon = {{uri: 'bar'}}
                selected = {this.state.selectedTab === 'bar'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'bar'
                  });
                }} >
                <Bar navigator={this.props.navigator}/>
              </TabBarIOS.Item>
              <TabBarIOS.Item
                title = '看帖'
                icon = {{uri: 'thread'}}
                selected = { this.state.selectedTab === 'thread' }
                onPress={() => {
                  this.setState({
                    selectedTab: 'thread'
                  });
                }} >
                <Thread navigator={this.props.navigator}/>
              </TabBarIOS.Item>
              <TabBarIOS.Item
                title = '消息'
                icon = {{uri: 'message'}}
                selected = { this.state.selectedTab === 'message' }
                onPress={() => {
                  this.setState({
                    selectedTab: 'message'
                  });
                }} >
                <Message navigator={this.props.navigator}/>
              </TabBarIOS.Item>
              <TabBarIOS.Item
                title = '发现'
                icon = {{uri: 'found'}}
                selected = { this.state.selectedTab === 'found' }
                onPress={() => {
                  this.setState({
                    selectedTab: 'found'
                  });
                }} >
                <Found navigator={this.props.navigator}/>
              </TabBarIOS.Item>
            </TabBarIOS>
          </View>
          <TouchableWithoutFeedback onPress={this._toggleNav.bind(this)}>
            <View style={[styles.mask, {opacity: +this.state.open}]}></View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </View>
    );
  }
  _toggleNav() {
    if (this.state.isAnim) {
      return;
    }
    let x = 0, s = 1;
    if (!this.state.open) {
      x = 220;
      s = 0.7;
    }
    this.setState({
      isAnim: true,
    });
    Animated.parallel([
      Animated.spring(this.state.x, {
        toValue: x,
        friction: 20,
        tension: 300,
      }),
      Animated.spring(this.state.s, {
        toValue: s,
        friction: 20,
        tension: 300,
      }),
    ]).start(res => {
      if(res.finished){
        this.state.open = !this.state.open;
        this.setState({
          isAnim: false,
        });
      }
    });
  }
}
module.exports = MainTab;
