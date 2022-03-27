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
  
      body: {
        flex:1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#F2F2F2',
      },
      
  
      content_container: {
        backgroundColor: '#FFF',
        borderRadius:8,
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

      summaryContainer:{
        backgroundColor:'#F0F0F0',
        elevation: 5,
        padding:20,
        // borderColor:'black',
        // borderWidth:1,
        borderRadius:5,
        marginTop:10,
        marginBottom:20,
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
      
      endPrice:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
      },
      buttonContainer:{
       flexDirection:'row',
       paddingLeft:5,
       paddingRight:5,
       alignContent:'center',
       justifyContent:'center',
      },

      content_header:{
        // alignItems:'center',
        // justifyContent:'center',
        
      },
      result:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
      },
  
      input_container1:{
        // marginBottom:10,
      },
      input_container2:{
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent:'center',
  
      },

      buttonKembali:{
        margin:15,
        marginRight:20,
        padding:10,
        flexDirection:'row',
        backgroundColor:'#FFF',
        borderColor:'#00579C',
        borderWidth:2,
        borderRadius:4,
        alignItems:'center',
        justifyContent:'center',
        width:145,
      },

      buttonLanjutkan:{
        margin:15,
        marginLeft:20,
        padding:10,
        flexDirection:'row',
        backgroundColor:'#00579C',
        borderColor:'#00579C',
        borderRadius:4,
        alignItems:'center',
        justifyContent:'center',
        width:145,
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