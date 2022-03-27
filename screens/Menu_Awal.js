import React, {useState, Component} from 'react';
import { Text, View, Button, TextInput, SafeAreaView, TouchableOpacity,ScrollView, Modal } from 'react-native';
import styles from '../style/Menu_Awal_Style.js';
import { FontAwesome5 } from '@expo/vector-icons';
import  DateTimePicker from '@react-native-community/datetimepicker';


export default function Menu_Awal({navigation}){
    const [modal,setModal] = useState(false);
    const [modal2,setModal2] = useState(false);
    const [modal3,setModal3] = useState(false);
    const [layanan,setLayanan] = useState('Pilih Layanan')
    const [awal,setAwal] = useState('Pilih Pelabuhan Awal');
    const [tujuan,setTujuan] = useState('Pilih Pelabuhan Tujuan');
    const [date,setDate] = useState(new Date());
    const [show,setShow] = useState(false);
    const [mode,setMode] = useState('date');
    const [dateText,setDateText] = useState('Pilih Tanggal Masuk');
    const [timeText,setTimeText] = useState('Pilih Jam Masuk');
    const onChange = (even, selectedDate) =>{
        if(mode=='date'){
            const currentDate = selectedDate || dateText;
            setShow(false);
            if(currentDate!=dateText){
                setDate(currentDate);
                let temp = new Date(currentDate);
                let fDate = temp.getDate() + '/' + (temp.getMonth()+1) + '/' + temp.getFullYear();
                setDateText(fDate);
            }
        }
        else if(mode == 'time'){
            const currentDate = selectedDate || timeText;
            setShow(false);
            if(currentDate!=timeText){
                setDate(currentDate);
                let temp = new Date(currentDate);
                let fTime = temp.getHours() + '.' + temp.getMinutes();
                setTimeText(fTime);
            }
        }
    };
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }
    const showDatePicker = () => {
        showMode('date');
    }
    const showTimePicker = () => {
        showMode('time');
    }

    return(
            
            
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            </View>

            
            <ScrollView style={styles.scrollView}>
                <View style={styles.body}>
                    <View style={styles.content_container}>
                        <Text style={[{color:'#00579C', fontWeight:'bold', fontSize:30, lineHeight:35, marginBottom:50, textAlign:'center', marginTop:10}]}>
                            Kapalzy
                        </Text>
                        <View style={styles.input_container1}>
                            <Text style={[{color:'#9D9D9D', fontSize:17, lineHeight:19,}]}>
                                Pelabuhan Awal
                            </Text>
                            <View style={styles.input_container2}>
                            <FontAwesome5 name="ship" size={24} color="#357ac4"/>
                                <TouchableOpacity style={styles.touchableContainer} onPress={()=> setModal(!modal)}>
                                    <Text style={[{color:'black', fontSize:14, lineHeight:19, fontWeight:'bold'}]}>
                                        {awal}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.input_container1}>
                            <Text style={[{color:'#9D9D9D', fontSize:17, lineHeight:19,}]}>
                                Pelabuhan Tujuan
                            </Text>
                            <View style={styles.input_container2}>
                            <FontAwesome5 name="ship" size={24} color="#357ac4" />
                                <TouchableOpacity style={styles.touchableContainer} onPress={()=> setModal2(!modal2)}>
                                    <Text style={[{color:'black', fontSize:14, lineHeight:19, fontWeight:'bold'}]}>
                                        {tujuan}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.input_container1}>
                            <Text style={[{color:'#9D9D9D', fontSize:17, lineHeight:19,}]}>
                                Kelas Layanan
                            </Text>
                            <View style={styles.input_container2}>
                            <FontAwesome5 name="people-arrows" size={24} color="#357ac4" />
                                <TouchableOpacity style={styles.touchableContainer} onPress={()=> setModal3(!modal3)}>
                                    <Text style={[{color:'black', fontSize:14, lineHeight:19, fontWeight:'bold'}]}>
                                        {layanan}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.input_container1}>
                            <Text style={[{color:'#9D9D9D', fontSize:17, lineHeight:19,}]}>
                                Tanggal Masuk Pelabuhan
                            </Text>
                            <View style={styles.input_container2}>
                            <FontAwesome5 name="calendar-week" size={24} color="#357ac4"/>
                                <TouchableOpacity style={styles.touchableContainer} onPress={()=>{showDatePicker()}}>
                                    <Text style={[{color:'black', fontSize:14, lineHeight:19, fontWeight:'bold'}]}>
                                        {dateText}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.input_container1}>
                            <Text style={[{color:'#9D9D9D', fontSize:17, lineHeight:19,}]}>
                                Jam Masuk Pelabuhan
                            </Text>
                            <View style={styles.input_container2}>
                            <FontAwesome5 name="clock" size={24} color="#357ac4" />
                                <TouchableOpacity style={styles.touchableContainer} onPress={()=>{showTimePicker()}}>
                                    <Text style={[{color:'black', fontSize:14, lineHeight:19, fontWeight:'bold'}]}>
                                        {timeText}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {show && (
                            <DateTimePicker testID='dateTimePicker'
                            value={date}
                            mode={mode} is24Hour={true}  onChange={onChange} on/>
                        )}
                        <View style={[{flexDirection: 'row', alignItems: 'center', justifyContent:'center', marginBottom:15}]}>
                            <TouchableOpacity style={[{width:320,height:40,marginTop:10,marginLeft:10,padding:10,flexDirection:'row',backgroundColor:'#f5fcfc',borderRadius:4, borderColor:'black',}]}>
                                <View>
                                    <Text style={[{color:'black', fontSize:14, lineHeight:19, fontWeight:'bold', textAlign:'left'}]}>
                                        Dewasa
                                    </Text>
                                </View>
                                <View style={[{marginLeft:200, flexDirection:'row',}]}>
                                    <Text style={[{color:'black', fontSize:14, lineHeight:19, fontWeight:'bold', textAlign:'right'}]}>
                                        2
                                    </Text>
                                    <Text style={[{color:'black', fontSize:14, lineHeight:19, fontWeight:'bold', textAlign:'right'}]}>
                                        _Orang
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Menu Konfirmasi Pesanan')}>
                            <FontAwesome5 name="search" size={20} color="#c74242"/>
                            <Text style={[{color:'#fff', fontSize:20, lineHeight:20,}]}>
                                 Buat Tiket
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                    <Modal
                        transparent={true}
                        visible={modal}
                        onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModal(!modal);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={styles.modalHeader}>
                                    <Text style={[{color:'#fff', textAlign:'center', fontSize:13, marginLeft:100, marginRight:100, fontWeight:'bold'}]}>
                                        PILIH PELABUHAN AWAL
                                    </Text>
                                </View>
                                <View style={[{padding:20,}]}>
                                    <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => {setModal(!modal); setAwal('Tanjung Pandan')}}>
                                        <Text style={[{ fontSize:11,color:'#fff' }]}>
                                            Belitung
                                        </Text>
                                        <Text style={[{ fontSize:16,color:'#fff' }]}>
                                            Tanjung Pandan
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => {setModal(!modal); setAwal('Sekupang')}}>
                                        <Text style={[{ fontSize:11,color:'#fff' }]}>
                                            Batam
                                        </Text>
                                        <Text style={[{ fontSize:16,color:'#fff' }]}>
                                            Sekupang
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => {setModal(!modal); setAwal('Merak')} }>
                                        <Text style={[{ fontSize:11,color:'#fff' }]}>
                                            Serang
                                        </Text>
                                        <Text style={[{ fontSize:16,color:'#fff' }]}>
                                            Merak
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    <Modal
                        transparent={true}
                        visible={modal2}
                        onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModal2(!modal2);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={styles.modalHeader}>
                                    <Text style={[{color:'#FFF', textAlign:'center', fontSize:13, marginLeft:100, marginRight:100, fontWeight:'bold'}]}>
                                        PILIH PELABUHAN TUJUAN
                                    </Text>
                                </View>
                                <View style={[{padding:20,}]}>
                                    <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => {setModal2(!modal2); setTujuan('Tanjung Pandan')} }>
                                        <Text style={[{ fontSize:11,color:'#fff' }]}>
                                            Belitung
                                        </Text>
                                        <Text style={[{ fontSize:16,color:'#fff' }]}>
                                            Tanjung Pandan
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => {setModal2(!modal2); setTujuan('Sekupang')}}>
                                        <Text style={[{ fontSize:11,color:'#fff' }]}>
                                            Batam
                                        </Text>
                                        <Text style={[{ fontSize:16,color:'#fff' }]}>
                                            Sekupang
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => {setModal2(!modal2); setTujuan('Merak')} }>
                                        <Text style={[{ fontSize:11,color:'#fff' }]}>
                                            Serang
                                        </Text>
                                        <Text style={[{ fontSize:16,color:'#fff' }]}>
                                            Merak
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    <Modal
                        transparent={true}
                        visible={modal3}
                        onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModal3(!modal3);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={styles.modalHeader}>
                                    <Text style={[{color:'#FFF', textAlign:'center', fontSize:13, marginLeft:100, marginRight:100, fontWeight:'bold'}]}>
                                        PILIH LAYANAN
                                    </Text>
                                </View>
                                
                                <View style={[{padding:20,}]}>
                                    <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => {setModal3(!modal3); setLayanan('Express')} }>
                                        <Text style={[{ fontSize:16,color:'#fff' }]}>
                                            Express
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => {setModal3(!modal3); setLayanan('Normal')} }>
                                        <Text style={[{ fontSize:16,color:'#fff'}]}>
                                            Normal
                                        </Text>
                                    </TouchableOpacity>


                                </View>
                            </View>
                        </View>
                    </Modal>
            </ScrollView>
        </SafeAreaView>
    );
}

