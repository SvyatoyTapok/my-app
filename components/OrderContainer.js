import styles from "./styles";
import {
  View,
  FlatList,
  Image,
  TextInput,
  Pressable,
  Text,
} from "react-native";
import LastOrderItem from "./LastOrderItem";
import Product from "./Product";
import Coffies from "./Coffies";

export default function OrderContainer() {
  return (
    <View style={[styles.orderContainer]}>
      <FlatList
        ListHeaderComponent={() => (
          <View>
            <View style={[styles.searchContainer]}>
              <View style={[styles.searchItem]}>
                <Image
                  style={[styles.searchIcon]}
                  source={require("../assets/icons/Search.png")}
                ></Image>
                <TextInput placeholder="Ищу то самое"></TextInput>
              </View>
            </View>
            <View style={[styles.lastOrderContainer]}>
              <View>
                <Text style={[styles.titleLastOrder]}>Прошлый заказ</Text>
                <Text style={[styles.subTitleLastOrder]}>
                  Анкудиновка, проспект Героя, 22
                </Text>
              </View>
              <Pressable style={[styles.repeatOrderButton]}>
                <Image
                  style={[styles.repeactIcon]}
                  source={require("../assets/icons/Repeat.png")}
                ></Image>
                <Text style={[styles.repeatTextButton]}>1750 ₽</Text>
              </Pressable>
            </View>

            <LastOrderItem
              itemName={"Американо"}
              ammountItem={"200 мл"}
              itemPrice={"250 ₽"}
            />

            <LastOrderItem
              itemName={"Лимонный чай без сахара"}
              ammountItem={"110 г"}
              itemPrice={"250 ₽"}
            />
            <View style={[styles.newOrderContainer]}>
              <View style={[styles.titlesNewOrder]}>
                <Text style={[styles.typesOfProducts]}>Напитки</Text>
                <Text style={[styles.typesOfProducts]}>Десерты</Text>
              </View>
            </View>
          </View>
        )}
        StickyHeaderComponent={() => (
          <View
            style={{
              width: 140,
              height: 140,
              backgroundColor: "grey",
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={Coffies}
        renderItem={({ item }) => (
          <Product
            image={item.image}
            price={item.price}
            sizes={item.sizes}
            title={item.title}
          />
        )}
      />
    </View>
  );
}
