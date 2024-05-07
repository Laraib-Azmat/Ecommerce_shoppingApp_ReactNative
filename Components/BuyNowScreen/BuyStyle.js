import { StyleSheet } from "react-native";


const buyStyle = StyleSheet.create({

    inputField:{
        flexDirection:'row',
        gap:10,
        alignItems:'center',

    },
    modelView:{
        alignItems:'center',
        justifyContent:'center',
        gap:30
    },
    modelHeading:{
        fontFamily:'Mogra',
        color:'#000',
        fontSize:20
    },
    addBtn:{
        position:'absolute',
        bottom:-20,
        left:'30%',
    },
    adressInputFields:{
       gap:10
    },
    addressfield:{
        flex:1,
        gap:20,
        alignItems:'center',
        justifyContent:'center'
    },
    input:{
        backgroundColor:'#fff',
        width:260,
        borderRadius:10,
        padding:8,
        fontFamily:'PoppinsRegular',
        elevation:5
    },
    text:{
        fontFamily:'PoppinsMedium'
    },
    buyIcon:{
      borderRadius:100,
      borderColor:'#000',
      borderWidth:2,
      padding:4,
      textAlign:'center',
    } ,
    buyLocPress:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#fff',
        width:260,
        borderRadius:10,
        padding:8,
        elevation:5,
        alignItems:'center'
    },
    totalPay:{
        flexDirection:'row',
        width:'60%',
        justifyContent:'space-between',
        alignItems:'center'
    }
   
});

export default buyStyle