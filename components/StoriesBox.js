import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import {View, Text} from 'react-native'
import StoriesItem from "./StoriesItem";
import storiesImages from "../assets/images/images";
export default function StoriesBox(){
    //todo: инлайн стили
    return(
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
    )
}
