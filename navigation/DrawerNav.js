import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screen/HomeScreen';

const Drawer = createDrawerNavigator();

function DrawerNav(props) {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
        drawerActiveBackgroundColor: '#e4e6eb',
        drawerLabelStyle: { color: 'black' },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
export default DrawerNav;
