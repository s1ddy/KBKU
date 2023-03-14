import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PesticideApp from './src/screens/PesticideApp';
import PestPage from './src/screens/PestPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={PesticideApp} />
        <Stack.Screen name="Info" component={PestPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;