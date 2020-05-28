import React, { useState, useCallback } from 'react';
import {StyleSheet, View, FlatList, Dimensions} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import LeagueTopper from '../components/LeagueTopper.js';
import Matchup from '../components/Matchup';
import {v4 as uuidv4} from 'uuid';
import useComponentSize from '../functions/useComponentSize.js';

const width = Dimensions.get('window').width;
const cardWidth = width-32;

const LeagueCard = ({leagueTitle, leagueImage, matchupData}) => {

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
                </View>
                <FlatList 
                    style={styles.flatList}
                    listKey={uuidv4()}
                    data={matchupData}
                    renderItem={({item}) => (
                        <View style={{marginBottom: 10, overflow:"visible", width: cardWidth}}>
                            <Matchup
                                homeTeam={item.homeTeam}
                                awayTeam={item.awayTeam}
                                timeScore={item.timeScore}
                            />
                        </View>
                    )}
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
        width: '100%',
    },
    flatList: {
        flexGrow: 1,
        alignItems: 'center',
        overflow: "visible",
        justifyContent: 'flex-start',
    },
    leagueLogoImage: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
});

export default LeagueCard;