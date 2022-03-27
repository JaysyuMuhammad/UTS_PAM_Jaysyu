import React, {useState, Component} from 'react';
import { Text, View, Button, TextInput, SafeAreaView, TouchableOpacity,ScrollView, Image } from 'react-native';
import styles from '../style/Daftar_Pembatalan_Style.js';


export default function Daftar_Pembatalan({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            
            <Text style={[{fontSize:19, fontWeight:'bold', color:'#00579C', textAlign:'center', }]}>
                Tidak ada pembatalan tiket
            </Text>
            
        </SafeAreaView>
    );
}
