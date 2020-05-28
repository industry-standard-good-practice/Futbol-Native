import React, {useState} from 'react';
import { StyleSheet, View, FlatList, StatusBar } from 'react-native';
import FavCard from './FavCard';
import LeagueCard from './LeagueCard';
import LEAGUEIMAGES from '../global-styles/leagueImages.js';
import {v4 as uuidv4} from 'uuid'

const HomeCards = () => {

  const homeLineup = [
    {shirt: '1', name: 'David De Gea', key: uuidv4()},
    {shirt: '2', name: 'Victor Lindelöf', key: uuidv4()},
    {shirt: '5', name: 'Harry Maguire', key: uuidv4()},
    {shirt: '6', name: 'Paul Pogba', key: uuidv4()},
    {shirt: '9', name: 'Anthony Martial', key: uuidv4()},
    {shirt: '10', name: 'Marcus Rashford', key: uuidv4()},
    {shirt: '17', name: 'Fred', key: uuidv4()},
    {shirt: '21', name: 'Dan James', key: uuidv4()},
    {shirt: '23', name: 'Luke Shaw', key: uuidv4()},
    {shirt: '29', name: 'Wan-Bissaka', key: uuidv4()},
    {shirt: '39', name: 'Scott McTominay', key: uuidv4()},
  ]

  const awayLineup = [
    {shirt: '1', name: 'Bernd Leno', key: uuidv4()},
    {shirt: '2', name: 'Hector Bellerin', key: uuidv4()},
    {shirt: '3', name: 'Kieren Tierney', key: uuidv4()},
    {shirt: '5', name: 'Sokratis', key: uuidv4()},
    {shirt: '9', name: 'Lacazette', key: uuidv4()},
    {shirt: '10', name: 'Mesut Özil', key: uuidv4()},
    {shirt: '11', name: 'Lucas Torreira', key: uuidv4()},
    {shirt: '14', name: 'Aubameyang', key: uuidv4()},
    {shirt: '19', name: 'Nicolas Pepe', key: uuidv4()},
    {shirt: '21', name: 'Calumn Chambers', key: uuidv4()},
    {shirt: '29', name: 'Matteo Guendouzi', key: uuidv4()},
  ]

  const leagues = () => {
    return([
      {key: uuidv4(), card: <FavCard
        leagueTitle='Dylan is stupid'
        leagueImage={LEAGUEIMAGES.premImage}
        homeLineup={homeLineup}
        awayLineup={awayLineup}
        matchupData={
          {key: uuidv4(), homeTeam:{name: 'Man United', crest:(require('../assets/card/manUnitedCrest.png'))}, timeScore: '9:00 AM', awayTeam: {name: 'Arsenal', crest:(require('../assets/card/bumnalCrest.png'))}}
        }
      />},
      {key: uuidv4(), card: <LeagueCard
        leagueTitle='Premier League'
        leagueImage={LEAGUEIMAGES.premImage}
        matchupData={[
          {key: uuidv4(), homeTeam:{name: 'Watford', crest:(require('../assets/card/manUnitedCrest.png'))}, timeScore: '9:00 AM', awayTeam: {name: 'Chelsea', crest:(require('../assets/card/bumnalCrest.png'))}},
          {key: uuidv4(), homeTeam:{name: 'West Ham', crest:(require('../assets/card/manUnitedCrest.png'))}, timeScore: '11:00 AM', awayTeam: {name: 'Tottenham', crest:(require('../assets/card/bumnalCrest.png'))}},
        ]}
      />},
      {key: uuidv4(), card: <LeagueCard
        leagueTitle='Premier League'
        leagueImage={LEAGUEIMAGES.premImage}
        matchupData={[
          {key: uuidv4(), homeTeam:{name: 'Watford', crest:(require('../assets/card/manUnitedCrest.png'))}, timeScore: '9:00 AM', awayTeam: {name: 'Chelsea', crest:(require('../assets/card/bumnalCrest.png'))}},
          {key: uuidv4(), homeTeam:{name: 'West Ham', crest:(require('../assets/card/manUnitedCrest.png'))}, timeScore: '11:00 AM', awayTeam: {name: 'Tottenham', crest:(require('../assets/card/bumnalCrest.png'))}},
        ]}
      />},{key: uuidv4(), card: <LeagueCard
        leagueTitle='Premier League'
        leagueImage={LEAGUEIMAGES.premImage}
        matchupData={[
          {key: uuidv4(), homeTeam:{name: 'Watford', crest:(require('../assets/card/manUnitedCrest.png'))}, timeScore: '9:00 AM', awayTeam: {name: 'Chelsea', crest:(require('../assets/card/bumnalCrest.png'))}},
          {key: uuidv4(), homeTeam:{name: 'West Ham', crest:(require('../assets/card/manUnitedCrest.png'))}, timeScore: '11:00 AM', awayTeam: {name: 'Tottenham', crest:(require('../assets/card/bumnalCrest.png'))}},
        ]}
      />},{key: uuidv4(), card: <LeagueCard
        leagueTitle='Premier League'
        leagueImage={LEAGUEIMAGES.premImage}
        matchupData={[
          {key: uuidv4(), homeTeam:{name: 'Watford', crest:(require('../assets/card/manUnitedCrest.png'))}, timeScore: '9:00 AM', awayTeam: {name: 'Chelsea', crest:(require('../assets/card/bumnalCrest.png'))}},
          {key: uuidv4(), homeTeam:{name: 'West Ham', crest:(require('../assets/card/manUnitedCrest.png'))}, timeScore: '11:00 AM', awayTeam: {name: 'Tottenham', crest:(require('../assets/card/bumnalCrest.png'))}},
        ]}
      />},{key: uuidv4(), card: <LeagueCard
        leagueTitle='Premier League'
        leagueImage={LEAGUEIMAGES.premImage}
        matchupData={[
          {key: uuidv4(), homeTeam:{name: 'Watford', crest:(require('../assets/card/manUnitedCrest.png'))}, timeScore: '9:00 AM', awayTeam: {name: 'Chelsea', crest:(require('../assets/card/bumnalCrest.png'))}},
          {key: uuidv4(), homeTeam:{name: 'West Ham', crest:(require('../assets/card/manUnitedCrest.png'))}, timeScore: '11:00 AM', awayTeam: {name: 'Tottenham', crest:(require('../assets/card/bumnalCrest.png'))}},
        ]}
      />},
    ])
  }

  const items = leagues();

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatList}
        showsVerticalScrollIndicator={false}
        decelerationRate={0.998}
        data={items}
        renderItem={({item}) => <View>{item.card}</View>}
      />
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
  flatList: {
    flexGrow: 1,
    alignItems: 'center',
    overflow: 'visible',
    justifyContent: 'flex-start',
    paddingTop: 130,
    paddingBottom: 40,
  },
});

export default React.memo(HomeCards);
