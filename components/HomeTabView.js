import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import COLORS from '../global-styles/Colors.js';
import RecTextMedium from './RecTextBold.js';
import HomeScreen from './HomeCards';

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
      style={[{flex: 1}, {backgroundColor: 'white'}, {zIndex: 0}]}
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
  },
  barStyle: {
    width: width-120,
    backgroundColor: null,
    marginTop: 40,
    shadowColor: 'transparent',
    elevation: 0,
    zIndex: 0,
    overflow: 'hidden'
  },
});

export default HomeTabView;