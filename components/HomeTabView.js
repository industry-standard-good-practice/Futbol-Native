import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions, StatusBar, ScrollView } from 'react-native';
import Animated from 'react-native-reanimated';
import { TabView, TabBar } from 'react-native-tab-view';
import COLORS from '../global-styles/Colors.js';
import RecTextMedium from './RecTextBold.js';
import HomeCards from './HomeCards';
import SearchIcon from '../assets/icons/SearchIcon.svg';
import SettingIcon from '../assets/icons/SettingIcon.svg';
import Ripple from 'react-native-material-ripple';

const width = Dimensions.get('window').width;
const headerHeight = 100;

const HomeTabView = ({navigation}) => {

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
        return <HomeCards navigation={navigation}/>;
      case 'second':
        return <HomeCards navigation={navigation}/>;
      case 'third':
        return <HomeCards navigation={navigation}/>;
      case 'fourth':
        return <HomeCards navigation={navigation}/>;
      case 'fifth':
        return <HomeCards navigation={navigation}/>;
      default:
        return null;
    }
  };

  return (
    <TabView
      renderTabBar={props =>
        <Animated.View style={styles.tabWrap}>
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
        </Animated.View>
      }
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      style={[{flex: 1}, {backgroundColor: 'white'}]}
      sceneContainerStyle={{zIndex: 9, backgroundColor: 'rgba(0,0,0,0)', overflow: 'visible', paddingTop: 100}}
      initialLayout={{ width: width }}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 0,
  },
  cardContain: {
    marginTop: -100,
    paddingTop: 120,
  },
  tabWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingBottom: 120,
    height: headerHeight,
    flexDirection: 'row',
    justifyContent: 'center',
    zIndex: 0,
  },
  barStyle: {
    width: width-120,
    height: 50,
    backgroundColor: 'transparent',
    marginTop: 50,
    shadowColor: 'transparent',
    elevation: 0,
    overflow: 'hidden',
  },
  icon: {
    color: COLORS.primary01,
  },
  iconContainLeft: {
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