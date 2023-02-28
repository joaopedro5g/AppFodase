import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import Book from './pages/Book';
import Player from './components/Player';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      sceneContainerStyle={{ paddingTop: 40, paddingLeft: 20 }}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="book" component={Book} />
    </Tab.Navigator>
  );
}

const Routes = () => {
  return (
    <NavigationContainer>
      <TabRoutes />
      <Player />
    </NavigationContainer>
  )
}

export default Routes;