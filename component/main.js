'use strict';

var React = require('react-native');
var Bar = require('./bar');
var Thread = require('./thread');
var Message = require('./message');
var Found = require('./found');
var {
    AppRegistry,
    StyleSheet,
    TabBarIOS,
    NavigatorIOS,
    Component
} = React;


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'bar'
        };
    }
    render() {
        return (
          <TabBarIOS
            tintColor = '#3385ff'
            barTintColor = '#f8fafd'
            titleTextColor = '#7b7d81'>
            <TabBarIOS.Item
                title = '进吧'
                badge = '3'
                icon = {require('image!bar')}
                selected = {this.state.selectedTab === 'bar'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'bar'
                    });
                }} >
                {this._renderContent()}
            </TabBarIOS.Item>
            <TabBarIOS.Item
                title = '看帖'
                icon = { require('image!thread') }
                selected = { this.state.selectedTab === 'thread' }
                onPress={() => {
                    this.setState({
                        selectedTab: 'thread'
                    });
                }} >
                {this._renderContent()}
            </TabBarIOS.Item>
            <TabBarIOS.Item
                title = '消息'
                icon = { require('image!message') }
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
                icon = { require('image!found') }
                selected = { this.state.selectedTab === 'found' }
                onPress={() => {
                    this.setState({
                        selectedTab: 'found'
                    });
                }} >
                <Found navigator={this.props.navigator}/>
            </TabBarIOS.Item>
          </TabBarIOS>
        );
    }
    _renderContent() {
        return (
            <NavigatorIOS
                style={styles.container}
                tintColor='#D6573D'
                barTintColor='#FFFFFD'
                titleTextColor='#D6573D'
                initialRoute={{
                    title: '看帖',
                    component: Bar,
                    backButtonTitle: '返回'
            }} />
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

module.exports = Main;

