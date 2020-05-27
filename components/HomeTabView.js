import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import COLORS from '../global-styles/Colors.js';
import RecText from './RecText.js';
import HomeScreen from '../home-stack/HomeScreen';
import { typeStyles } from '../global-styles/typeStyles';

const width = Dimensions.get('window').width;

const HomeTabView = () => {

  const FirstRoute = () => (
    <View style={{zIndex: 100}}>
      <HomeScreen/>
    </View>
  );
  
  const SecondRoute = () => (
    <HomeScreen/>
  );

  const ThirdRoute = () => (
    <HomeScreen/>
  );

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'first', title: 'YESTERDAY' },
    { key: 'second', title: 'TODAY' },
    { key: 'third', title: 'TOMORROW' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  return (
    <TabView
      lazy={false}
      renderTabBar={props =>
        <View style={styles.tabWrap}>
          <TabBar
            {...props}
            indicatorStyle={{backgroundColor: COLORS.primary01, height: 4}}
            style={styles.barStyle}
            inactiveColor={COLORS.primary02}
            activeColor={COLORS.primary01}
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