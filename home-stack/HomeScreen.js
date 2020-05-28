import React from 'react';
import { StyleSheet, View, StatusBar, Dimensions } from 'react-native';
import HomeTabView from '../components/HomeTabView';
import SearchIcon from '../assets/icons/SearchIcon.svg';
import SettingIcon from '../assets/icons/SettingIcon.svg';
import COLORS from '../global-styles/Colors';
import Ripple from 'react-native-material-ripple';

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} animated={true} backgroundColor={'rgba(0,0,0,0)'} barStyle={'dark-content'}/>
      <Ripple style={styles.iconContainLeft} rippleColor={COLORS.primary01} rippleOverflow={true}>
        <SearchIcon style={styles.icon}/>
      </Ripple>
      <Ripple style={styles.iconContainRight} rippleColor={COLORS.primary01} rippleOverflow={true}>
        <SettingIcon style={styles.icon}/>
      </Ripple>
      <HomeTabView/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100%',
    backgroundColor: 'transparent',
    alignItems: 'stretch',
    justifyContent: 'center',
    overflow: 'visible',
    padding: 0,
    margin: 0,
  },
  icon: {
    color: COLORS.primary01,
  },
  iconContainLeft: {
    zIndex: 9,
    position: 'absolute',
    top: 45,
    left: 15,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary02,
    borderRadius: 40,
    zIndex: 1,
  },
  iconContainRight: {
    zIndex: 9,
    position: 'absolute',
    top: 45,
    right: 15,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary02,
    borderRadius: 40,
    zIndex: 1,
  },
});

export default React.memo(HomeScreen);
