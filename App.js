import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

//screens
import Menu_Awal from './screens/Menu_Awal';
// import Navigasi_Beranda from './navigation/navigation_stack';
import Daftar_Pesanan from './screens/Daftar_Pesanan';
import Daftar_Pembatalan from './screens/Daftar_Pembatalan';
import Lainnya from './screens/Lainnya';
import Menu_Konfirmasi_Pesanan from './screens/Menu_Konfirmasi_Pesanan';
import Menu_Detail_Pemesanan from './screens/Menu_Detail_Pemesanan';

const Tab =createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator

      initialRouteName='Menu Awal' 
      screenOptions={({ route } ) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;
          if (rn === 'Beranda'){
            return <FontAwesome5 name="home" size={30} color="#0d5a91" />
          }
          else if(rn === 'Pesanan Saya'){
            return <Entypo name="book" size={30} color="#0d5a91" />
          }
          else if(rn === 'Pembatalan'){
            return <MaterialCommunityIcons name="cash-refund" size={35} color="#0d5a91" />
          }
          else if(rn === 'Lainnya'){
            return <FontAwesome5 name="bars" size={30} color="#0d5a91" />
          }
        },
      })}
      >
        <Tab.Screen name = 'Beranda' component={Navigasi_Beranda} options={{ headerShown:false }}/>
         <Tab.Screen name = 'Pesanan Saya' component={Daftar_Pesanan} options={{ headerTitle:'Daftar Pemesanan', headerStyle:{backgroundColor:'#024D88'}, headerTitleAlign:'center', headerTitleStyle:{color:'#FFF'}}}/>
         <Tab.Screen name = 'Pembatalan' component={Daftar_Pembatalan} options={{ headerTitle:'Daftar Pembatalan', headerStyle:{backgroundColor:'#024D88'}, headerTitleAlign:'center', headerTitleStyle:{color:'#FFF'}}}/>
         <Tab.Screen name = 'Lainnya' component={Lainnya} options={{ headerShown:false }}/>
      </Tab.Navigator>
      
      
    </NavigationContainer>
  );
}
function Navigasi_Beranda(){
  return(
      <Stack.Navigator>
          <Stack.Screen name="Beranda" component={Menu_Awal} options={{ headerShown:false }}/>
          <Stack.Screen name="Menu Konfirmasi Pesanan" component={Menu_Konfirmasi_Pesanan} options={{ headerShown:false }}/>
          <Stack.Screen name="Menu Detail Pemesanan" component={Menu_Detail_Pemesanan} options={{ headerShown:false }}/>
      </Stack.Navigator>
  )
}
