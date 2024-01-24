import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View, TouchableWithoutFeedback, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SchedulerScreen from './screens/SchedulerScreen';
import LandingScreen from './screens/LandingScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer initialRouteName='Landing'>
        <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name='Landing' component={LandingScreen}/>
          <Stack.Screen options={{headerShown: false}} name='Scheduler' component={SchedulerScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
