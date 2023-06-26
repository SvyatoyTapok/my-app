import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "../components/styles";
import StoriesItem from "../components/StoriesItem";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import storiesImages from "../assets/images/images";
import DropdownMenu from "../components/DropdownMenu";
import LastOrderItem from "../components/LastOrderItem";
import Coffies from "../components/Coffies";
import Product from "../components/Product";

export default LayoutScreen = ({ navigation }) => {
  const [activeDropdownMenu, setactiveDropdownMenu] = useState(false);
  const [address, setAddress] = useState("Анкудиновка Свободы 5к2");
  return (
    <View style={{ backgroundColor: "#FFFFFF" }}>
      <View style={[styles.topContainer]}>
        <Pressable onPress={() => setactiveDropdownMenu(!activeDropdownMenu)}>
          <Text style={[styles.topText]}>{address}</Text>
        </Pressable>
        {activeDropdownMenu ? (
          <DropdownMenu
            activeDropMenu={activeDropdownMenu}
            setactiveDropdownMenu={setactiveDropdownMenu}
            setAddress={setAddress}
          />
        ) : (
          <View/>
        )}
        <Image
          style={[styles.topIconProfile]}
          source={{
            uri: "https://sun21-2.userapi.com/s/v1/ig2/z-N4QBr3OUbKaSxzXN1eMW82i14znqMql9WuG8gTAFCGQBPZkt9EvUrNpaRyVx0grJmtxnE6CRF0CrSWNw1C3ykM.jpg?size=50x50&quality=95&crop=0,0,900,900&ava=1",
          }}
        />
      </View>
      <View style={[styles.storiesBox]}>
        <View style={[styles.storiesTitle]}>
          <Text style={[styles.storiesCurrentTitle]}>Истории</Text>
        </View>
        <View style={{ overflow: "hidden" }}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <StoriesItem
              imageSrc={storiesImages[0].src}
              storyText={"Какой-то заголовок"}
            />
            <StoriesItem
              imageSrc={storiesImages[1].src}
              storyText={"Кофейня-это крутяк"}
            />
            <StoriesItem
              imageSrc={storiesImages[2].src}
              storyText={"Кофе много не бывает"}
            />
            <StoriesItem
              imageSrc={storiesImages[3].src}
              storyText={"Люблю кофе"}
            />
            <StoriesItem
              imageSrc={storiesImages[4].src}
              storyText={"Здесь могла бы быть ваша реклама"}
            />
            <StoriesItem
              imageSrc={storiesImages[5].src}
              storyText={"Кофейные сторисы"}
            />
          </ScrollView>
        </View>
      </View>
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
    </View>
  );
};
