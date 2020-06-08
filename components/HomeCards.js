import React, {useState} from 'react';
import { StyleSheet, View, FlatList, StatusBar } from 'react-native';
import FavCard from './FavCard';
import LeagueCard from './LeagueCard';
import LEAGUEIMAGES from '../global-styles/leagueImages.js';
import uuid from 'uuid-random'

const HomeCards = () => {

  const homeLineup = [
    {shirt: '1', name: 'David De Gea', key: uuid()},
    {shirt: '2', name: 'Victor Lindelöf', key: uuid()},
    {shirt: '5', name: 'Harry Maguire', key: uuid()},
    {shirt: '6', name: 'Paul Pogba', key: uuid()},
    {shirt: '9', name: 'Anthony Martial', key: uuid()},
    {shirt: '10', name: 'Marcus Rashford', key: uuid()},
    {shirt: '17', name: 'Fred', key: uuid()},
    {shirt: '21', name: 'Dan James', key: uuid()},
    {shirt: '23', name: 'Luke Shaw', key: uuid()},
    {shirt: '29', name: 'Wan-Bissaka', key: uuid()},
    {shirt: '39', name: 'Scott McTominay', key: uuid()},
  ]

  const awayLineup = [
    {shirt: '1', name: 'Bernd Leno', key: uuid()},
    {shirt: '2', name: 'Hector Bellerin', key: uuid()},
    {shirt: '3', name: 'Kieren Tierney', key: uuid()},
    {shirt: '5', name: 'Sokratis', key: uuid()},
    {shirt: '9', name: 'Lacazette', key: uuid()},
    {shirt: '10', name: 'Mesut Özil', key: uuid()},
    {shirt: '11', name: 'Lucas Torreira', key: uuid()},
    {shirt: '14', name: 'Aubameyang', key: uuid()},
    {shirt: '19', name: 'Nicolas Pepe', key: uuid()},
    {shirt: '21', name: 'Calumn Chambers', key: uuid()},
    {shirt: '29', name: 'Matteo Guendouzi', key: uuid()},
  ]

  const leagues = () => {
    return([
      {key: uuid(), card: <FavCard
        leagueTitle='Dylan is stupid'
        leagueImage={LEAGUEIMAGES.premImage}
        homeLineup={homeLineup}
        awayLineup={awayLineup}
        matchupData={
          {key: uuid(), homeTeam:{name: 'Man United', crest:(require('../assets/card/manUnitedCrest.png'))}, timeScore: '9:00 AM', awayTeam: {name: 'Arsenal', crest:(require('../assets/card/bumnalCrest.png'))}}
        }
      />},
      {key: uuid(), card: <LeagueCard
        leagueTitle='Premier League'
        leagueImage={LEAGUEIMAGES.premImage}
        matchupData={[
          {key: uuid(), homeTeam:{name: 'Watford', crest:(require('../assets/card/manUnitedCrest.png'))}, timeScore: '9:00 AM', awayTeam: {name: 'Chelsea', crest:(require('../assets/card/bumnalCrest.png'))}},
          {key: uuid(), homeTeam:{name: 'West Ham', crest:(require('../assets/card/manUnitedCrest.png'))}, timeScore: '11:00 AM', awayTeam: {name: 'Tottenham', crest:(require('../assets/card/bumnalCrest.png'))}},
        ]}
      />},
      {key: uuid(), card: <LeagueCard
        leagueTitle='Premier League'
        leagueImage={LEAGUEIMAGES.premImage}
        matchupData={[
          {key: uuid(), homeTeam:{name: 'Watford', crest:(require('../assets/card/manUnitedCrest.png'))}, timeScore: '9:00 AM', awayTeam: {name: 'Chelsea', crest:(require('../assets/card/bumnalCrest.png'))}},
          {key: uuid(), homeTeam:{name: 'West Ham', crest:(require('../assets/card/manUnitedCrest.png'))}, timeScore: '11:00 AM', awayTeam: {name: 'Tottenham', crest:(require('../assets/card/bumnalCrest.png'))}},
        ]}
      />},{key: uuid(), card: <LeagueCard
        leagueTitle='Premier League'
        leagueImage={LEAGUEIMAGES.premImage}
        matchupData={[
          {key: uuid(), homeTeam:{name: 'Watford', crest:(require('../assets/card/manUnitedCrest.png'))}, timeScore: '9:00 AM', awayTeam: {name: 'Chelsea', crest:(require('../assets/card/bumnalCrest.png'))}},
          {key: uuid(), homeTeam:{name: 'West Ham', crest:(require('../assets/card/manUnitedCrest.png'))}, timeScore: '11:00 AM', awayTeam: {name: 'Tottenham', crest:(require('../assets/card/bumnalCrest.png'))}},
        ]}
      />},{key: uuid(), card: <LeagueCard
        leagueTitle='Premier League'
        leagueImage={LEAGUEIMAGES.premImage}
        matchupData={[
          {key: uuid(), homeTeam:{name: 'Watford', crest:(require('../assets/card/manUnitedCrest.png'))}, timeScore: '9:00 AM', awayTeam: {name: 'Chelsea', crest:(require('../assets/card/bumnalCrest.png'))}},
          {key: uuid(), homeTeam:{name: 'West Ham', crest:(require('../assets/card/manUnitedCrest.png'))}, timeScore: '11:00 AM', awayTeam: {name: 'Tottenham', crest:(require('../assets/card/bumnalCrest.png'))}},
        ]}
      />},{key: uuid(), card: <LeagueCard
        leagueTitle='Premier League'
        leagueImage={LEAGUEIMAGES.premImage}
        matchupData={[
          {key: uuid(), homeTeam:{name: 'Watford', crest:(require('../assets/card/manUnitedCrest.png'))}, timeScore: '9:00 AM', awayTeam: {name: 'Chelsea', crest:(require('../assets/card/bumnalCrest.png'))}},
          {key: uuid(), homeTeam:{name: 'West Ham', crest:(require('../assets/card/manUnitedCrest.png'))}, timeScore: '11:00 AM', awayTeam: {name: 'Tottenham', crest:(require('../assets/card/bumnalCrest.png'))}},
        ]}
      />},
    ])
  }

  const items = leagues();

  return (
    <View style={styles.container} pointerEvents={'box-none'}>
      <FlatList
        pointerEvents={'box-none'}
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
    marginTop: -100,
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
