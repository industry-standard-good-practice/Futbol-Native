import React from 'react';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import COLORS from '../global-styles/Colors.js';
import RecTextMedium from './RecTextBold.js';
import HomeScreen from './HomeCards';
import SearchIcon from '../assets/icons/SearchIcon.svg';
import SettingIcon from '../assets/icons/SettingIcon.svg';
import Ripple from 'react-native-material-ripple';

const width = Dimensions.get('window').width;

const HomeTabView = () => {

  const [index, setIndex] = React.useState(2);

  const [routes] = React.useState([
    { key: 'first', title: 'YESTERDAY' },
    { key: 'second', title: 'YESTERDAY' },
    { key: 'third', title: 'TODAY' },
    { key: 'fourth', title: 'TOMORROW' },
    { key: 'fifth', title: 'TOMORROW' },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <HomeScreen />;
      case 'second':
        return <HomeScreen />;
      case 'third':
        return <HomeScreen />;
      case 'fourth':
        return <HomeScreen />;
      case 'fifth':
        return <HomeScreen />;
      default:
        return null;
    }
  };

  return (
    <TabView
      renderTabBar={props =>
        <View style={styles.tabWrap}>
          <StatusBar translucent={true} animated={true} backgroundColor={'rgba(0,0,0,0)'} barStyle={'dark-content'}/>
          <Ripple style={styles.iconContainLeft} rippleColor={COLORS.primary01} rippleOverflow={true}>
            <SearchIcon style={styles.icon}/>
          </Ripple>
          <Ripple style={styles.iconContainRight} rippleColor={COLORS.primary01} rippleOverflow={true}>
            <SettingIcon style={styles.icon}/>
          </Ripple>
          <TabBar
            {...props}
            indicatorStyle={{backgroundColor: COLORS.primary01, height: 4}}
            style={styles.barStyle}
            inactiveColor={COLORS.primary02}
            activeColor={COLORS.primary01}
            tabStyle={{width:'auto'}}
            scrollEnabled={true}
            bounces={true}
            renderLabel={({ route, focused, color }) => (
              <RecTextMedium style={{ color, fontSize: 18 }}>
                {route.title}
              </RecTextMedium>
            )}
          />
        </View>
      }
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      style={[{flex: 1}, {backgroundColor: 'white'}, {zIndex: 2}]}
      sceneContainerStyle={{zIndex:99999, marginTop: -100, backgroundColor: 'rgba(0,0,0,0)'}}
      initialLayout={{ width: width }}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 0,
  },
  tabWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    zIndex: 0,
  },
  barStyle: {
    width: width-120,
    height: 50,
    backgroundColor: null,
    marginTop: 50,
    shadowColor: 'transparent',
    elevation: 0,
    overflow: 'hidden'
  },
  icon: {
    color: COLORS.primary01,
  },
  iconContainLeft: {
    zIndex: 9,
    position: 'absolute',
    top: 55,
    left: 18,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary02,
    borderRadius: 40,
  },
  iconContainRight: {
    zIndex: 9,
    position: 'absolute',
    top: 55,
    right: 18,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary02,
    borderRadius: 40,
  },
});

export default HomeTabView;