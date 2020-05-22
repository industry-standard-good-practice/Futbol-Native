import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import COLORS from '../global-styles/Colors.js';
import RecText from './RecText.js';
import LineupText from './LineupText';
import useComponentSize from '../functions/useComponentSize.js';

const initialLayout = { width: 360, height: 360 };

const FavCardTabView = ({cardWidth, homeLineup, awayLineup}) => {
  const [size, onLayout] = useComponentSize();

  const FirstRoute = () => (
    <LineupText lineupData={homeLineup} onLayout={onLayout}/>
  );
  
  const SecondRoute = () => (
    <LineupText lineupData={awayLineup}/>
  );

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'HOME LINEUP' },
    { key: 'second', title: 'AWAY LINEUP' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <TabView
      renderTabBar={props =>
        <TabBar
          {...props}
          indicatorStyle={{backgroundColor: COLORS.primary01, height: 4}}
          indicatorContainerStyle={{marginLeft: 8}}
          style={styles.barStyle}
          tabStyle={{width: 'auto'}}
          inactiveColor={COLORS.primary02}
          activeColor={COLORS.primary01}
          renderLabel={({ route, focused, color }) => (
            <RecText style={{color}}>
              {route.title}
            </RecText>
          )}
        />
      }
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      style={{width: cardWidth, height: size.height/2, flex: 0}}
      initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 0,
  },
  barStyle: {
    backgroundColor: COLORS.primary03,
    shadowColor: 'transparent',
    elevation: 0,
    paddingLeft: 8
  },
});

export default FavCardTabView;