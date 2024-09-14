import {
  View,
  Text,
  ActivityIndicator,
  ListRenderItem,
  StyleSheet, Dimensions
} from "react-native";
import React, { useState } from "react";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";
import { findProductbyId } from "../services/product-service";
import { FlatList } from "react-native-gesture-handler";
import { ListItem, Avatar, Tile } from "@rneui/themed";

const DetailScreen = (): React.JSX.Element => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const [detail, setDetail] = React.useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
    });
  }, [navigation, route]);

  const getProductbyId = async () => {
    try {
      const response = await findProductbyId(route.params.id);
      //console.log(response.data.data);
      setDetail(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getProductbyId();
    }, [])
  );

  const _renderItem: ListRenderItem<any> = ({ item }) => (
    <>
      <Tile
        imageSrc={{
          uri: "https://www.google.com/imgres?q=popmart&imgurl=https%3A%2F%2Fdown-th.img.susercontent.com%2Ffile%2Fsg-11134201-7rbk0-lkmdm0140himce&imgrefurl=https%3A%2F%2Fshopee.co.th%2F%25E0%25B8%259E%25E0%25B8%25A3%25E0%25B9%2589%25E0%25B8%25AD%25E0%25B8%25A1%25E0%25B8%25AA%25E0%25B9%2588%25E0%25B8%2587-%25E0%25B8%2582%25E0%25B8%25AD%25E0%25B8%2587%25E0%25B9%2580%25E0%25B8%25A5%25E0%25B9%2588%25E0%25B8%2599%25E0%25B8%2595%25E0%25B8%25B8%25E0%25B9%258A%25E0%25B8%2581%25E0%25B8%2595%25E0%25B8%25B2-POPMART-POPMART-SKULLPANDA-Night-City-Series-Mystery-Box-24-%25E0%25B8%258A%25E0%25B8%25B1%25E0%25B9%2588%25E0%25B8%25A7%25E0%25B9%2582%25E0%25B8%25A1%25E0%25B8%2587-%25E0%25B8%25AA%25E0%25B9%258D%25E0%25B8%25B2%25E0%25B8%25AB%25E0%25B8%25A3%25E0%25B8%25B1%25E0%25B8%259A%25E0%25B9%2580%25E0%25B8%2594%25E0%25B9%2587%25E0%25B8%2581-i.1053722542.21683162262&docid=cpHFdFGX3vU5hM&tbnid=VK4rPt7mZFrELM&vet=12ahUKEwj72s6R0sGIAxXrR2cHHfKyAUAQM3oECGwQAA..i&w=800&h=800&hcb=2&ved=2ahUKEwj72s6R0sGIAxXrR2cHHfKyAUAQM3oECGwQAA",
          cache: "force-cache",
        }}
        title={item.ch_title}
        titleStyle={styles.titleStyle}
        containerStyle={styles.tileContainer}
        caption={item.ch_dateadd}
        captionStyle={styles.captionStyle}
        featured
        activeOpacity={0.9}
        width={Dimensions.get("screen").width - 20} // ลบขอบเล็กน้อยทั้งสองข้าง
      />
    </>
  );

  return (
    <View>
      <FlatList
        data={detail}
        renderItem={_renderItem}
        keyExtractor={(item: any) => item.ch_id.toString()}
        onRefresh={ async () => { 
           await getProductbyId();
        }}
        refreshing = {loading}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0', // สีพื้นหลัง​
    },
    listContent: {
        paddingHorizontal: 10, // การเว้นวรรคขอบซ้ายและขวาเท่ากัน​
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue', // สีขาวสำหรับชื่อ​
    },

    tileContainer: {
        borderRadius: 10, //กำหนดให้มุมของ container มีความโค้งมน​
        overflow: 'hidden', //กำหนดให้เนื้อหาที่อาจล้นออกจากขอบของ container ไม่แสดงผล​
        marginBottom: 10,  //กำหนดระยะห่างจากขอบล่างของ container ไปยัง element ต่อไปที่อยู่ด้านล่าง​
        elevation: 5, // เงาสำหรับ Android​
        shadowOffset: { width: 0, height: 2 }, //กำหนดตำแหน่งของเงาที่แสดงผล​
        shadowOpacity: 0.25, //กำหนดระดับความโปร่งแสงของเงา ​
        shadowRadius: 3.84, //กำหนดรัศมีของการกระจายตัวของเงา ​
        opacity: 0.5, // ความโปร่งใสของภาพ , ค่าน้อยจะโปร่งใสมาก​
 },
    captionStyle: {
        fontSize: 14,
        color: 'blue' // สีขาวสำหรับวันที่​
    },

});