'use strict';

var StyleSheet = require('react-native').StyleSheet;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sideMenu: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    resizeMode: 'cover',
  },
  sideMenuContent: {
    padding: 20,
    backgroundColor: 'transparent',
  },
  userInfo: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  userInfoAvatar: {
    marginBottom: 5,
  },
  userInfoName: {
    backgroundColor: 'transparent',
    color: '#fff',
    marginBottom: 5,
  },
  mask: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  nav: {
    height: 64,
    backgroundColor: '#212936',
  },
  navTitle: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  navTitleText: {
    color: '#fff',
    fontSize: 16,
  },
  navLeft: {
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
    left: 5,
    height: 44,
    alignItems: 'center',
    opacity: 1,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  navRight: {
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
    right: 5,
    height: 44,
    alignItems: 'center',
    opacity: 1,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  navIcon: {
    marginHorizontal: 5,
    width: 22,
    height: 22,
  },
  block: {
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 25,
    backgroundColor: '#eee',
    padding: 5,
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 10,
    borderRadius: 3,
    fontSize: 12,
    textAlign: 'center',
  },
  row: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  line: {
    height: 1,
    backgroundColor: '#f0f0f0',
    opacity: 0.5,
  },
  barIcon: {
    width: 30,
    height: 30,
  },
  barName: {
    flex: 1,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  level: {
    color: '#fff',
    backgroundColor: '#7cdebc',
    fontWeight: 'bold',
    fontSize: 8,
    padding: 2,
  },
  moreBar: {
    alignItems: 'center',
    margin: 10,
  },
  insLabel: {
    padding: 10,
    flexDirection: 'row',
  },
  insInfo: {
    flex: 1,
    fontSize: 12,
  },
  insChange: {
    color: '#3668b2',
    fontSize: 12,
  },
  rmdIcon: {
    width: 60,
    height: 60,
  },
  rmdInfo: {
    flex: 1,
    paddingLeft: 5,
  },
  rmdName: {
    fontSize: 14,
  },
  rmdCount: {
    color: '#7a7c80',
    fontSize: 12,
    lineHeight: 22,
  },
  rmdMeta: {
    color: '#abaeb2',
    fontSize: 10,
    lineHeight: 16,
  },
  btn: {
    color: '#fff',
    backgroundColor: '#3385ff',
    textAlign: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
  }
});
