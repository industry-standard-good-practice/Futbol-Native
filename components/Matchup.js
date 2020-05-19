import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import RecText from '../components/RecText.js'
import {typeStyles} from '../global-styles/typeStyles.js'

const Matchup = ({homeTeam, awayTeam, timeScore}) => {

    return (
        <View style={styles.mainContain}>
            <View style={styles.leftContain}>
                <RecText style={typeStyles.p2}>{homeTeam.name}</RecText>
                <Image 
                    style={styles.crestLeft}
                    source={homeTeam.crest}
                />
            </View>
            <View style={styles.middleContain}>
                <RecText style={typeStyles.p1}>{timeScore}</RecText>
            </View>
            <View style={styles.rightContain}>
                <Image 
                    style={styles.crestRight}
                    source={awayTeam.crest}
                />
                <RecText style={typeStyles.p2}>{awayTeam.name}</RecText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContain: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    middleContain: {
        paddingHorizontal: 10,
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
    crestLeft: {
        width: 32,
        height: 32,
        marginLeft: 10
    },
    crestRight: {
        width: 32,
        height: 32,
        marginRight: 10,
    },
});

export default Matchup;