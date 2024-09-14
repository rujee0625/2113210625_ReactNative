import { ListRenderItem, StyleSheet, Text, View, ActivityIndicator} from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import "react-native-gesture-handler";
import { findAllProduct } from "../services/product-service";
import { FlatList } from "react-native-gesture-handler";
import { ListItem, Avatar } from "@rneui/themed";
import { Badge } from "@rneui/base";

const MaterialHeaderButton = (props: any) => (
  // the props here come from <Item ... />
  // you may access them and pass something else to HeaderButton if you like
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
);

const ProductScreen = (): React.JSX.Element => {
  const navigation = useNavigation<any>();

  const [loading,setLoading] = useState<boolean>(false); 

  const [product, setProduct] = useState<any[]>([]); // declare state
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Product",

      headerTitleAlign: "center",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await findAllProduct();
      //console.log(response.data.data); แสดงใน console
      setProduct(response.data.data); // set state
    } catch (error: any) {
      console.log(error.message);
    }finally{
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getProduct();
    }, [])
  );

  if(loading){
    return(
      <ActivityIndicator size="large" color="red"/>
    )
  }

  const _renderItem: ListRenderItem<any> = ({ item }) => {
    return (
        <>
        <ListItem bottomDivider onPress={() => navigation.navigate('Details', { productId: item.id, title: item.title })}>
          <Avatar source={{ uri: item.picture }} size={50} rounded/>
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <ListItem.Subtitle>{item.detail}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
          <Badge value = {item.view} status="success"/>
        </ListItem>
      </>
    );
  };

  return (
    <View>
      {/* show product data */}
      {/* <Text>{JSON.stringify(product)}</Text> */}
      <FlatList
        data={product}
        renderItem={_renderItem}
        keyExtractor={(item: any) => item.id.toString()}
      />
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
