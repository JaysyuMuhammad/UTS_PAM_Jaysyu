import React, {useState, Component} from 'react';
import { Text, View, Button, TextInput, SafeAreaView, TouchableOpacity,ScrollView } from 'react-native';
import styles from '../style/Daftar_Pesanan_Style';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function Daftar_Pesanan({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <View style={styles.content_container}>
                    <View style={styles.travelRoute}>
                        <Text style={[{fontWeight:'bold', fontSize:15, marginRight:50}]}>
                            Sekupang
                        </Text>
                        <Entypo name="arrow-right" size={24} color="black" />
                        <Text style={[{fontWeight:'bold', fontSize:15, marginLeft:50}]}>
                            Merak
                        </Text>
                    </View>
                    <View style={styles.travelSchedule}>
                        <Text style={[{fontWeight:'bold', fontSize:12}]}>
                            Jadwal Masuk Pelabuhan
                        </Text>
                        <Text style={[{fontSize:12}]}>
                            Minggu, 27 Maret 2022
                        </Text>
                        <Text style={[{fontSize:12}]}>
                            11.30 WIB
                        </Text>
                    </View>
                    <View style={styles.travelService}>
                        <Text style={[{fontWeight:'bold', fontSize:12}]}>
                            Layanan
                        </Text>
                        <Text style={[{fontSize:12}]}>
                            Express
                        </Text>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.result}>
                        <Text>
                            Dewasa x 1
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
