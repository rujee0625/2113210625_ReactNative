import { View, Text, Button, StyleSheet, Alert } from "react-native";
import React, { useLayoutEffect } from "react";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import AppLogo from "../components/AppLogo";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import 'react-native-gesture-handler';

const MaterialHeaderButton = (props: any) => (
  // the `props` here come from <Item ... />​
  // you may access them and pass something else to `HeaderButton` if you like​
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
);
const ProductScreen = (): React.JSX.Element => {
  const navigation = useNavigation<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'สินค้า',
      headerTitleAlign: 'center',
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item title="menu" iconName="menu"
          onPress={()=>{
           navigation.openDrawer();
          }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
    
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  postContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  postText: {
    margin: 10,
    fontSize: 16,
  },
  postContent: {
    color: "blue", // เปลี่ยนสีข้อความที่ถูกส่งกลับมา​
    fontWeight: "bold",
  },
});
