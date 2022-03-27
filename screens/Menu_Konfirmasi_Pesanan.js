import React, {useState, Component} from 'react';
import { Text, View, Button, TextInput, SafeAreaView, TouchableOpacity,ScrollView } from 'react-native';
import styles from '../style/Menu_Konfirmasi_Pesanan_Style.js';
import { Entypo } from '@expo/vector-icons';

export default function Menu_Konfirmasi_Pesanan({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                
            </View>
            <View style={styles.body}>
                <View style={styles.content_container}>
                    <Text style={[{color:'#00579C', fontWeight:'bold', fontSize:30, lineHeight:35, marginBottom:40, textAlign:'center', marginTop:10}]}>
                        Kapalzy
                    </Text>
                    <Text style={[{color:'black', fontWeight:'bold', fontSize:16, marginBottom:10}]}>
                        Kouta tersedia (10000)
                    </Text>
                    <Text style={[{color:'black', fontWeight:'bold', fontSize:16, marginBottom:10}]}>
                        Rincian Tiket
                    </Text>
                    <View style={styles.summaryContainer}>
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
                            <View>
                                <Text style={[{marginRight:160}]}>
                                    Dewasa x 1
                                </Text>
                            </View>
                            <View>
                                <Text style={[{}]}>
                                    Rp. 65000
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.endPrice}>
                        <View style={[{marginRight:200}]}>
                            <Text style={[{color:'black', fontWeight:'bold', fontSize:19,}]}>
                                Total
                            </Text>
                        </View>
                        <View style={[{textAlign:'right'}]}>
                            <Text style={[{color:'black', fontWeight:'bold', fontSize:19,}]}>
                                Rp. 65000
                            </Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonKembali} onPress={()=>navigation.navigate('Beranda')}>
                            <Text style={[{color:'#00579C', fontSize:20, lineHeight:19, fontWeight:'bold'}]}>
                                Kembali
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonLanjutkan} onPress={()=>navigation.navigate('Menu Detail Pemesanan')}>
                            <Text style={[{color:'#FFF', fontSize:20, lineHeight:19, fontWeight:'bold'}]}>
                                Lanjutkan
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
