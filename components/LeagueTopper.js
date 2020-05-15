import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import RecText from '../components/RecText.js'
import {typeStyles} from '../global-styles/typeStyles.js'
import ExpandLess from '../assets/icons/ExpandLess.svg'

const LeagueTopper = ({leagueText, leagueImage}) => {
    return (
        <View style={styles.leagueTopper}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                    style={styles.leagueLogoImage}
                    source={leagueImage}
                />
                <RecText style={typeStyles.p3}>{leagueText}</RecText>
            </View>
             <TouchableOpacity style={{alignSelf: 'flex-end'}}>
                <ExpandLess />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
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

export default LeagueTopper;