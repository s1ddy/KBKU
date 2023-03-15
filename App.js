import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PesticideApp from './PesticideApp';
import PestPage from './PestPage';
import PestPageTermite from './src/PestPageTermite';
import PestPageAphid from './src/PestPageAphid';
import PestPageWhiteFlies from './src/PestPageWhiteFlies';


const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Keedon Bhagao Khet Ugao"
          component = {PesticideApp}
        />
        <Stack.Screen
          name = "Pest"
          component = {PestPage}
        />
        <Stack.Screen
          name = "Termite"
          component = {PestPageTermite}
        />
        <Stack.Screen
          name = "Aphid"
          component = {PestPageAphid}
        />
        <Stack.Screen
          name = "White flies"
          component = {PestPageWhiteFlies}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;