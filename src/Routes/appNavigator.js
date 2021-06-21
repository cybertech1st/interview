import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import A from "../pages/a";
import B from "../pages/b";
import C from "../pages/c";
// import D from "../pages/d";
// import SubmitanOfficer from "../pages/submitanOfficer";
// import Contactus from "../pages/contactus";



//const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigator = () => {
return (
    <NavigationContainer>
     <Drawer.Navigator>
     <Drawer.Screen name="C" component={C} options={{ title: 'Chat', headerShown: false, }} />

        <Drawer.Screen name="A" component={A} options={{ title: 'Status', headerShown: false }} />
        <Drawer.Screen name="B" component={B} options={{ title: 'Call', headerShown: false, }} />
        {/* <Drawer.Screen name="D" component={D} options={{ title: 'D', headerShown: false, }} /> */}
        {/* <Drawer.Screen name="SubmitanOfficer" component={SubmitanOfficer} options={{ title: 'SubmitanOfficer', headerShown: false, }} /> */}
       {/* <Drawer.Screen name="Contactus" component={Contactus} options={{ title: 'Contactus', headerShown: false, }} /> */}



      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;