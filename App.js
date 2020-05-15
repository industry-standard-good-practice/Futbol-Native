import React, {useState} from 'react';
import { StyleSheet, View, FlatList, StatusBar } from 'react-native';
import FavCard from './components/FavCard';

const App = () => {

  const leagues = () => {
    const data = [
      {id:'0000', text: '1. De Gea'},
      {id:'0001', text: '2. De Gea'},
      {id:'0002', text: '3. De Gea'},
      {id:'0003', text: '4. De Gea'},
      {id:'0004', text: '5. De Gea'},
    ]

    return([
      {id:'0000', card: <FavCard leagueTitle='Dylan is stupid' data={data} />},
      {id:'0001', card: <FavCard />},
      {id:'0002', card: <FavCard />},
      {id:'0003', card: <FavCard />},
      {id:'0004', card: <FavCard />},
      {id:'0005', card: <FavCard />},
      {id:'0006', card: <FavCard />},
    ])
  }

  const items = leagues(); 

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} animated={true} backgroundColor={'rgba(0,0,0,0)'} barStyle={'dark-content'} />
      <FlatList 
        contentContainerStyle={styles.flatList}
        decelerationRate={0.998}
        data={items}
        renderItem={({item}) => <View>{item.card}</View>}
      />
    </View>
  );
}

FavCard.defaultProps = {
    title: 'Hello World!',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100%',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    overflow: 'visible',
    padding: 0,
    margin: 0,
  },
  flatList: {
    flexGrow: 1,
    alignItems: 'center',
    overflow: "visible",
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingBottom: 40,
  }
});

export default App;
