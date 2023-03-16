import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PesticideApp from './PesticideApp';
import PestPage from './PestPage';
import PestPageTermite from './src/PestPageTermite';
import PestPageAphid from './src/PestPageAphid';
import PestPageWhiteFlies from './src/PestPageWhiteFlies';
import PPWFTamil from './src/PestPageWhiteFlies(Tamil)';
import PestPageAphidGujurati from './src/PestPageAphid(Gujurati)';
import PestPageTermiteKannada from './src/PestPageTermite(Kannada)';


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
        <Stack.Screen
          name = "வெள்ளை ஈக்கள்"
          component = {PPWFTamil}
        />
        <Stack.Screen
          name = "ಗೆದ್ದಲು"
          component = {PestPageTermiteKannada}
        />
        <Stack.Screen
          name = "એફિડ"
          component = {PestPageAphidGujurati}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;