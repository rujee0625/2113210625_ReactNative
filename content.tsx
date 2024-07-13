import { StatusBar } from "expo-status-bar";
import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  Alert 
} from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";


export default function App():React.JSX.Element {
  const onClickMe = ()=>{
    Alert.alert("Hello","Input your fullname");
  }
  const users =[
    {name:'Rujee Nakkardpanou'}
  ]
  return (
    <View style={styles.container}>
      <AppHeader title={"Input your fullname"}/>
      <AppHeader title={"Message from App.tsx"}/>
      {}
      <Button title ="Click Me"
      onPress={onClickMe}
      color="blue"
      />
      <AppFooter></AppFooter>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});