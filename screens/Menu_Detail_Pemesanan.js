import React, {useState, Component} from 'react';
import { Text, View, Button, TextInput, SafeAreaView, TouchableOpacity,ScrollView } from 'react-native';
import styles from '../style/Menu_Detail_Pemesanan_Style';
import { Entypo } from '@expo/vector-icons';


export default function Menu_Detail_Pemesanan({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                
            </View>
            <ScrollView style={styles.body}>
                <View style={styles.content_container}>
                    <Text style={[{color:'#00579C', fontWeight:'bold', fontSize:30, lineHeight:35, marginBottom:40, textAlign:'center', marginTop:10}]}>
                        Kapalzy
                    </Text>
                    <Text style={[{color:'black', fontWeight:'bold', fontSize:16, marginBottom:10}]}>
                        Informasi Pemesanan
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
                            <Text>
                                Dewasa x 1
                            </Text>
                        </View>
                    </View>
                    <Text style={[{color:'black', fontWeight:'bold', fontSize:16, textAlign:'left'}]}>
                        Data Pemesan
                    </Text>
                    <View style={styles.input_container1}>
                        <Text style={[{fontSize:12, lineHeight:12}]}>
                            Nama Lengkap
                        </Text>
                        <TextInput style={styles.textInput} placeholder={'Nama Lengkap'}>

                        </TextInput>
                    </View>
                    <View style={styles.input_container1}>
                        <Text style={[{fontSize:12, lineHeight:12}]}>
                            Jenis Kelamin
                        </Text>
                        <TextInput style={styles.textInput} placeholder={'Jenis Kelamin'}>

                        </TextInput>
                    </View>
                    <View style={styles.input_container1}>
                        <Text style={[{fontSize:12, lineHeight:12}]}>
                            Umur
                        </Text>
                        <TextInput style={styles.textInput} placeholder={'Umur'}>

                        </TextInput>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonSubmit} onPress={()=>navigation.navigate('Menu Detail Pemesanan')}>
                            <Text style={[{color:'#FFF', fontSize:19, lineHeight:19, fontWeight:'bold'}]}>
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
