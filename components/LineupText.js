import React, {useState, useCallback} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import RecText from '../components/RecText.js'
import {v4 as uuidv4} from 'uuid'

const LineupText = ({lineupData}) => {
    return (
        <View style={styles.flatContain}>
            <FlatList 
                maxToRenderPerBatch={6}
                data={lineupData.slice(0,6)}
                renderItem={({item}) => (
                    <RecText style={styles.itemText}>{item.shirt}. {item.name}</RecText>
                )}
                listKey={uuidv4()}
            />
            <FlatList 
                maxToRenderPerBatch={6}
                data={lineupData.slice(6,11)}
                renderItem={({item}) => (
                    <RecText style={styles.itemText}>{item.shirt}. {item.name}</RecText>
                )}
                listKey={uuidv4()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    flatContain: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    itemText: {
        width: 170,
        height: 20,
    }
});

export default LineupText;