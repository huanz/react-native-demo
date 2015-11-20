'use strict';

var React = require('react-native');
var {
    Component,
    ScrollView,
    View,
    Text,
    TextInput,
    StyleSheet,
    ListView,
    TouchableHighlight,
    Image
} = React;

var styles = require('../styles');

class Bar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dsFollow: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            dsRecommend: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            loaded: false
        };
    }
    componentDidMount() {
      this.fetchUrls('http://localhost:8081/json/followList.json', 'http://localhost:8081/json/recommendList.json').then((list) => {
        this.setState({
          dsFollow: this.state.dsFollow.cloneWithRows(list[0]),
          dsRecommend: this.state.dsRecommend.cloneWithRows(list[1]),
          loaded: true
        });
      });
    }
    async fetchUrls(...urls) {
      let res = [];
      try {
        for (let url of urls) {
          let tmp = await this.fetchUrl(url);
          await res.push(tmp);
        }
      } catch (e) {}
      return res;
    }
    async fetchUrl(url) {
      let res = null;
      try {
        res = await fetch(url);
        res = await res.json();
      } catch(e) {}
      return res.data;
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.block}>
                    <TextInput
                        style={styles.searchInput}
                        keyboardType='web-search'
                        placeholder='搜吧、搜贴、搜人'/>
                    <ListView
                        automaticallyAdjustContentInsets={false}
                        dataSource={this.state.dsFollow}
                        renderRow={this._renderFollowed}/>
                    <TouchableHighlight underlayColor={'#f0f0f0'}>
                        <View style={styles.moreBar}><Text style={{color: '#18191a'}}>+探索更多感兴趣的吧</Text></View>
                    </TouchableHighlight>
                </View>
                <View style={[styles.block, {marginTop: 10}]}>
                    <View style={styles.insLabel}>
                        <Text style={styles.insInfo}>可能感兴趣的吧</Text>
                        <Text style={styles.insChange}>换一换</Text>
                    </View>
                    <View style={styles.line}></View>
                    <ListView
                        automaticallyAdjustContentInsets={false}
                        dataSource={this.state.dsRecommend}
                        renderRow={this._renderRecommends}/>
                </View>
            </ScrollView>
        );
    }
    _renderFollowed(follow) {
        return (
            <TouchableHighlight underlayColor={'#f0f0f0'}>
            <View>
                <View style={styles.row}>
                    <Image
                        source={{uri: follow.icon}}
                        style={styles.barIcon}/>
                    <Text style={styles.barName}>{follow.name}</Text>
                    <Text style={styles.level}>LV.{follow.level}</Text>
                </View>
                <View style={styles.line}></View>
            </View>
            </TouchableHighlight>
        );
    }
    _renderRecommends(recommend) {
        return (
            <TouchableHighlight underlayColor={'#f0f0f0'}>
            <View>
                <View style={styles.row}>
                    <Image
                        source={{uri: recommend.icon}}
                        style={styles.rmdIcon}/>
                      <View style={styles.rmdInfo}>
                        <Text style={styles.rmdName}>{recommend.name}</Text>
                        <Text style={styles.rmdCount}>关注 {recommend.focus} 帖子 {recommend.threads}</Text>
                        <Text style={styles.rmdMeta}>{recommend.info}</Text>
                      </View>
                      <Text style={styles.btn}>关注</Text>
                </View>
                <View style={styles.line}></View>
            </View>
            </TouchableHighlight>
        );
    }
}

module.exports = Bar;
