import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from './home-stack/HomeScreen';
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

const TabNavigator = createBottomTabNavigator(
  {
    Matches: HomeTabView,
    News: DetailsScreen,
    Calendar: DetailsScreen,
  },
  {
    tabBarComponent: props =>
      <CustomTabBar {...props}/>,
    tabBarOptions: {
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
    },
    navigationOptions: {
      animationEnabled: true,
    }
  },
);

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  },
);

const AppContainer = createAppContainer(TabNavigator);

const App = () => {
  return(
    <SafeAreaProvider>
      <AppContainer />
    </SafeAreaProvider>
  )
}

export default App;
