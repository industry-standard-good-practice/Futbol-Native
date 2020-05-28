import React, {useState} from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import AnimatedTabBar, {TabsConfig, BubbleTabConfig} from '@gorhom/animated-tabbar';
import {BoxShadow} from 'react-native-shadow';
import MatchSVG from '../assets/icons/MatchSVG'
import NewsSVG from '../assets/icons/NewsSVG'
import CalendarSVG from '../assets/icons/CalendarSVG'
import COLORS from '../global-styles/Colors'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const width = Dimensions.get('window').width;

const fetchFonts = () => {
    return Font.loadAsync({
        'recursive-regular': require('../assets/fonts/RecursiveSansLinearB027st-Rg.ttf'),
    });
}

const tabs: TabsConfig<BubbleTabConfig> = {
    Matches: {
      labelStyle: {
        color: 'white',
        fontFamily: 'recursive-regular',
      },
      icon: {
        component: MatchSVG,
        activeColor: COLORS.white01,
        inactiveColor: 'rgba(255,255,255,.4)',
      },
      background: {
        activeColor: COLORS.primary01,
        inactiveColor: COLORS.primary01,
      },
    },
    News: {
      labelStyle: {
        color: 'white',
        fontFamily: 'recursive-regular',
      },
      icon: {
        component: NewsSVG,
        activeColor: COLORS.white01,
        inactiveColor: 'rgba(255,255,255,.4)',
      },
      background: {
        activeColor: COLORS.primary01,
        inactiveColor: COLORS.primary01,
      },
    },
    Calendar: {
      labelStyle: {
        color: 'white',
        fontFamily: 'recursive-regular',
      },
      icon: {
        component: CalendarSVG,
        activeColor: COLORS.white01,
        inactiveColor: 'rgba(255,255,255,.4)',
      },
      background: {
        activeColor: COLORS.primary01,
        inactiveColor: COLORS.primary01,
      },
    },
};

const CustomTabBar = ({...props}) => {
    const shadowOpt = {
        width: width-30,
        height: 85,
        color: COLORS.primary01,
        border: 16,
        radius: 10,
        opacity: .2,
        x: 0,
        y: 4,
        style:{
            position: 'absolute',
            bottom: 30,
            alignSelf: 'center',
            backgroundColor: 'transparent'
        }
    };

    const [dataLoaded, setDataLoaded] = useState(false);

    if (!dataLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDataLoaded(true)}
            />
        );
    }

    return (
        <BoxShadow setting={shadowOpt}>
            <AnimatedTabBar
                tabs={tabs}
                preset={'bubble'}
                style={styles.tabBar}
                itemContainerWidth={'fill'}
                itemOuterSpace={15}
                itemInnerSpace={15}
                iconSize={30}
                {...props}
            />
        </BoxShadow>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        paddingBottom: 10,
    },
});

export default CustomTabBar;