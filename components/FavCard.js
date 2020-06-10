import React, { useState, useCallback } from 'react';
import {StyleSheet, View, FlatList, Dimensions} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import COLORS from '../global-styles/Colors.js';
import LeagueTopper from '../components/LeagueTopper.js';
import Matchup from '../components/Matchup';
import FavCardTabView from './FavCardTabView.js';
import useComponentSize from '../functions/useComponentSize.js';

const width = Dimensions.get('window').width;
const cardWidth = width-32;

const FavCard = ({leagueTitle, leagueImage, homeLineup, awayLineup, matchupData, navigation}) => {

    const [size, onLayout] = useComponentSize();

    const shadowOpt = {
        width: cardWidth,
        height: size.height,
        color:"#000",
        border: 16,
        radius: 10,
        opacity: .06,
        x: 0,
        y: 4,
        style:{
            marginBottom:20,
            flex: 0,
        }
    };

    return (
        <BoxShadow setting={shadowOpt}>
            <View style={styles.favCard} onLayout={onLayout}>
                <View style={styles.favCardHeadContain}>
                    <LeagueTopper leagueText={leagueTitle} leagueImage={leagueImage}/>
                    <Matchup 
                        homeTeam={matchupData.homeTeam}
                        timeScore={matchupData.timeScore}
                        awayTeam={matchupData.awayTeam}
                        navigation={navigation}
                    />
                </View>
                <FavCardTabView
                    cardWidth={cardWidth}
                    cardHeight={size.height}
                    homeLineup={homeLineup}
                    awayLineup={awayLineup}
                />
            </View>
        </BoxShadow>
    );
};

const styles = StyleSheet.create({
    favCard: {
        width: cardWidth,
        alignSelf: 'center',
        backgroundColor: 'white',
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: "flex-start",
        borderRadius: 10,
        overflow: 'hidden',
    },
    favCardHeadContain: {
        backgroundColor: COLORS.primary03,
        width: '100%',
    },
    leagueTopper: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 16,
    },
    leagueLogoImage: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    mainContain: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    middleContain: {
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    leftContain: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    rightContain: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});

export default FavCard;