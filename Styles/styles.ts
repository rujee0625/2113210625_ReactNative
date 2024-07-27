import { StyleSheet} from "react-native";

export default StyleSheet.create({
    container:{
        alignItems: "center",
        padding: 20,
        borderColor: "#f5f5f5", //Setting bg color 
    },
    profileImage:{
        borderRadius: 50,
        width: 100,
        height: 100,
        marginRight: 20,
    },
    profileContainer:{
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 20,
        marginTop:50,
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 5,
    },
    profileName:{
        textAlign:"right",
        fontWeight: 'bold',
        fontSize: 20,
        color: '#dc143c',
    },

})