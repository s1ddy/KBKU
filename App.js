import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PesticideApp from './PesticideApp';
import PestPage from './PestPage';
import PestPageTermite from './src/PestPageTermite';
import PestPageAphid from './src/PestPageAphid';
import PestPageWhiteFlies from './src/PestPageWhiteFlies';
import { pestO } from './PesticideApp';

const Stack = createStackNavigator();

const App = () => {
  const pestComponent = {
    'Termite': PestPageTermite,
    'Aphid': PestPageAphid,
    'White flies': PestPageWhiteFlies,
  };

  const pestC = pestComponent[pestO];

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Keedon Bhagao Khet Ugao"
          component = {PesticideApp}
        />
        <Stack.Screen
          name = "Pest"
          component = {pestC}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;