import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeTabView from './components/HomeTabView'
import COLORS from './global-styles/Colors';
import CustomTabBar from './components/CustomTabBar';

const width = Dimensions.get('window').width;

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return(
    <HomeStack.Navigator
      screenOptions = {{
        headerShown: false
      }}
    >
      <HomeStack.Screen name='Matches' component={HomeTabView} />
      <HomeStack.Screen name='Details' component={DetailsScreen} />
    </HomeStack.Navigator>
  )
}

const TabNavigator = createBottomTabNavigator();

const TabNav = () => {
  return (
    <TabNavigator.Navigator
      initialRouteName='Matches'
      tabBar={props => <CustomTabBar {...props}/>}
      tabBarOptions={{
        style: {
          width: width-30,
          height: 85,
          paddingBottom: 10,
          alignSelf: 'center',
          overflow: 'hidden',
          backgroundColor: COLORS.primary01,
          fontFamily: 'recursive-regular',
          fontWeight: '200',
          borderRadius: 10,
        },
        labelStyle: {
          fontFamily: 'recursive-regular',
          fontWeight: '200',
        },
      }}
      navigationOptions={{
        animationEnabled: true,
      }}
    >
      <TabNavigator.Screen 
        name='Matches'
        component={HomeStackScreen}
      />
      <TabNavigator.Screen 
        name='News'
        component={DetailsScreen}
      />
      <TabNavigator.Screen 
        name='Calendar'
        component={DetailsScreen}
      />
    </TabNavigator.Navigator>
  )
};

const App = () => {
  return(
    <SafeAreaProvider>
      <NavigationContainer>
        <TabNav />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;
