import { StyleSheet } from "react-native";


const contactStyle = StyleSheet.create({

    contactView:{
        alignItems:'center',
        justifyContent:"center",
        height:'100%',
        width:"100%",
        gap:30
    },
    inputView:{
        width:300,
        height:400,
        backgroundColor:'pink',
        borderRadius:20,
        elevation:5
    },
    
    contactFields:{
        alignItems:'center',
        height:350,
       gap:20,
       paddingVertical:20

    },
    contactBtn:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:20
    },
    socialmediaView:{
        flexDirection:'row',
        alignItems:'center',
        gap:20

    }
});

export default contactStyle;