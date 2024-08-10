import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    borderColor: "#f5f5f5", //ตั้งค่าสีพื้นหลังเป็นสีเทาอ่อน
  },
  profileImage: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginRight: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 5,
    marginTop: 50,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00008b",
  },
});

const stylesPractice = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#ffffff",
  },
  header: {
    padding: 16,
    backgroundColor: "#f8f8f8",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop: 100,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  subtitleText: {
    fontSize: 16,
    color: "#666",
  },
  content: {
    //flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginVertical: 16,
    width: "90%",
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    color: "#444",
  },
  footer: {
    padding: 16,
    backgroundColor: "#f8f8f8",
    width: "100%",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 16,
    paddingHorizontal: 8,
    width: "80%",
    borderRadius: 8,
    marginBottom: 500,
  },
});

const stylesProflie = StyleSheet.create({
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
        backgroundColor: "#ffdba0",
        elevation: 5,
    },
    profileName:{
        textAlign:"right",
        fontWeight: 'bold',
        fontSize: 20,
        color: '#a98463',
    },

    textDetail:{
        color: "white",
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginTop: 16,
        paddingHorizontal: 8,
        width: "80%",
        borderRadius: 8,
        marginBottom: 500,
      },
});

const stylesLogin = StyleSheet.create({ 
    container: { 
      justifyContent: "center", 
      padding: 20, 
      marginTop: 50,
      backgroundColor: '#f5f4b2', // ตงคาสพนหลงเปนสขาว 
      borderRadius: 10, // เพมความมนใหกบขอบคอนเทนเนอร 
      elevation: 3, // เพมเงาใหกบคอนเทนเนอร (เฉพาะ Android) 
      width: '100%', // ตงความกวางของ container ให้เต็มหน้าจอ 
    }, 
    inputLogin: { 
      height: 45, // เพมความสงของ TextInput 
      borderColor: "gray", // เปลยนสขอบเปนสเทาออน 
      borderWidth: 1,  
      borderRadius: 8, // เพมความมนใหกบขอบ TextInput 
      marginBottom: 15, // เพมระยะหางดานลางระหวาง TextInput 
      paddingHorizontal: 15, // เพมระยะหางภายใน TextInput 
      backgroundColor: "#ffffff", // ตงคาสพนหลงของ TextInput 
    },  
  });

export { styles, stylesPractice, stylesProflie, stylesLogin };
