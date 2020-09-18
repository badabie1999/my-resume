import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResumeFormScreens  from './screens/ResumeForm'
import ResumeDetailScreen from './screens/ResumeDetail'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ResumeForm" option={{ title: 'ResumeForm' }} component={ResumeFormScreens} />
        <Stack.Screen name="ResumeDetail" option={{ title: 'ResumeDetail' }} component={ResumeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;