import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PesticideApp from './PesticideApp';
import PestPage from './PestPage';

const navigator = createStackNavigator(
  {
    Home: PesticideApp,
    Pest: PestPage
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Keedon Bhagao Khet Ugao'
    },
  }
)

export default createAppContainer(navigator);