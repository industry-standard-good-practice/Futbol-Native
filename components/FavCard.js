import React, { useState, useCallback } from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import COLORS from '../global-styles/Colors.js';
import RecText from '../components/RecText.js'
import {typeStyles} from '../global-styles/typeStyles.js'
import LeagueTopper from '../components/LeagueTopper.js'

const useComponentSize = () => {
    const [size,setSize] = useState({height: 360});

    const onLayout = useCallback(event => {
        const { width, height } = event.nativeEvent.layout;
        setSize({ width, height });
    }, []);
    
    return [size, onLayout];
};

const FavCard = ({leagueTitle, data}) => {

    const [size, onLayout] = useComponentSize();

    const shadowOpt = {
        width: 360,
        height: size.height,
        color:"#000",
        border: 16, 
        radius: 10,
        opacity: .05,
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
                    <LeagueTopper leagueText={leagueTitle} leagueImage={require('../assets/card/plLogo.png')}/>
                </View>
                <FlatList 
                    data={data}
                    renderItem={({item}) => <RecText style={typeStyles.p1}>{item.text}</RecText>}
                />
            </View>
        </BoxShadow>
    );
};

const styles = StyleSheet.create({
    favCard: {
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
});

export default FavCard;