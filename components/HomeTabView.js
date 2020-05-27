import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar, ScrollPager } from 'react-native-tab-view';
import COLORS from '../global-styles/Colors.js';
import RecText from './RecText.js';
import HomeScreen from '../home-stack/HomeScreen';

const width = Dimensions.get('window').width;

const HomeTabView = () => {

  const FirstRoute = () => (
    <HomeScreen/>
  );
  
  const SecondRoute = () => (
    <HomeScreen/>
  );

  const ThirdRoute = () => (
    <HomeScreen/>
  );

  const FourthRoute = () => (
    <HomeScreen/>
  );

  const FifthRoute = () => (
    <HomeScreen/>
  );

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'first', title: 'YESTERDAY' },
    { key: 'second', title: 'TODAY' },
    { key: 'third', title: 'TOMORROW' },
    { key: 'fourth', title: 'TOMORROW' },
    { key: 'fifth', title: 'TOMORROW' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
    fifth: FifthRoute,
  });

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
            tabStyle={{width:100}}
            scrollEnabled={true}
            bounces={true}
            renderLabel={({ route, focused, color }) => (
              <RecText style={{ color }}>
                {route.title}
              </RecText>
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
    width: width-80,
    backgroundColor: null,
    marginTop: 40,
    shadowColor: 'transparent',
    elevation: 0,
    zIndex: 0,
  },
});

export default HomeTabView;