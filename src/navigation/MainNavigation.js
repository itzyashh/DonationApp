import Home from '../screens/Home';

const {createNativeStackNavigator} = require('@react-navigation/native-stack');
const {Routes} = require('./Routes');

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.home} component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
