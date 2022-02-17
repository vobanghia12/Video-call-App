import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from "@react-navigation/native"
import { Home } from './screens/Home'
import CameraRoom from './components/CameraRoom'
const Navigation = () => {
    const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName ={Home}>
            <Stack.Screen 
                  name ="Home"
                  component={Home}
            >
            </Stack.Screen>
            <Stack.Screen
                  name ="CameraRoom"
                  component={CameraRoom}
            >
            </Stack.Screen>
          
        </Stack.Navigator>



    </NavigationContainer>
  )
}

export default Navigation