import React from 'react';
import Homepage from '../components/Homepage';
import Gallorypage from '../components/Gallorypage';

import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
export default function Menupage() {
  return (
    
    <Stack.Navigator initialRouteName="Homepage">
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="Gallorypage" component={Gallorypage} />
    </Stack.Navigator>
    
  );
}


