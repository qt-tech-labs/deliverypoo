import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import BasketScreen from './screens/BasketScreen';
import Globals from './Globals';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
            <Stack.Navigator>
              <Stack.Screen name={Globals.SCREENS.Home} component={HomeScreen}/>
              <Stack.Screen name={Globals.SCREENS.Restaurant} component={RestaurantScreen}/>
              <Stack.Screen 
                name={Globals.SCREENS.Basket}
                component={BasketScreen}
                options= {{
                  presentation: "modal",
                  headerShown: false
                }}/>
              <Stack.Screen options={{
                presentation:"fullScreenModal",
                headerShown: false
              }} name={Globals.SCREENS.Delivery} component={DeliveryScreen}/>
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}