import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PesticideApp from './PesticideApp';
import PestPage from './PestPage';
import PestPageTermite from './src/PestPageTermite'

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Home"
          component = {PesticideApp}
        />
        <Stack.Screen
          name = "Pest"
          component = {PestPageTermite}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;