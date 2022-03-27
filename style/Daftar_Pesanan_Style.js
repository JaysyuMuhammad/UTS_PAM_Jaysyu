import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        // marginTop: StatusBar.currentHeight,
        padding:20,
        // backgroundColor:"#F2F2F2",
      },
      scrollView:{
        // backgroundColor: '#FFF',
        // borderRadius:20,
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5,
      },
  
      header: {
        // flexDirection: 'row',
        // marginTop: 25,
        // justifyContent: 'space-between',
        // height:50,
        // backgroundColor: '#464E2E',
        // padding:5,
      },
  
      header_bar:{
        // alignItems: 'center',
        // justifyContent: 'center',
        // margin: 8,
      },
  
      header_text:{
        // textAlign: 'center',
        // textAlignVertical: 'center',
        // fontSize:20,
        // fontWeight: 'bold',
        // color: '#fff'
      },
  
      body: {
        flex:1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#fff',
      },
      
  
      content_container: {
        backgroundColor: '#E9E9E9',
        borderRadius:3,
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        elevation: 5,
        padding:20,
      },
      travelRoute:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
      },

      travelSchedule:{
        marginTop:18,
      },

      travelService:{
        marginTop:15,
      },

      line:{
          borderBottomColor:'black',
          borderBottomWidth:1,
          marginTop:10,
          marginBottom:20,
      },
      
      result:{
        
      },

      content_header:{
        // alignItems:'center',
        // justifyContent:'center',
        
      },
  
      input_container1:{
        // marginBottom:10,
      },
      input_container2:{
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent:'center',
  
      },
      button:{
        // marginTop:10,
        // padding:10,
        // flexDirection:'row',
        // backgroundColor:'#EE9E54',
        // borderRadius:4,
        // alignItems:'center',
        // justifyContent:'center',
      },
  
      footer: {
        // // backgroundColor:'#F4F4F4',
        // backgroundColor:'#EE9E54',
        // flexDirection: 'row',
        // padding: 10,
        // bottom: 0,
        // width: windowWidth,
        // position:'absolute',
      },
      touchableContainer: {
        // width:300,
        // marginTop:10,
        // marginLeft:10,
        // padding:10,
        // flexDirection:'row',
        // backgroundColor:'#EFF4F4',
        // borderRadius:4,
        // borderColor:'black',
        // // borderWidth:1,
      },
      textInput: {
        // paddingLeft:5,
        // width:300,
        // height:37,
        // borderWidth:1,
        // borderColor: '#777',
        // padding: 8,
        // borderRadius:8,
        // margin: 10,
      },
      footerIcon: {
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5,
        // alignItems: 'center',
        // justifyContent: 'center',
        // marginLeft:10,
        // marginRight:10,
      }
});
export default styles;