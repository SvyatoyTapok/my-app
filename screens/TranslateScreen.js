import { useEffect, useState } from "react";
import { View, Button, Text, Pressable, Image } from "react-native";
import TranslateInput from "../components/TranslateInput";
import { postRequest } from "../Requests/postRequest";
import { getLanguages } from "../Requests/getLanguages";
import styles from "../components/styles";
import SelectDropdown from "react-native-select-dropdown";
import DropDownTranslate from "../components/DropDownTranslate";

export default TranslateScreen = ({ navigation }) => {
  const [text, setText] = useState();
  const [source, setSource] = useState("en");
  const [target, setTarget] = useState("ru");
  const [result, setResult] = useState();
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getLanguages(target);
      setLanguages(response)
    }
    fetchData();
  }, []);

  const handleClick = async () => {
    const response = await postRequest(text, source, target);
    const translatedText = response?.[0]?.translatedText;
    setResult(translatedText);
  };

  const handleChoose = async () => {
    const response = await getLanguages(target);
    setLanguages(response);
  };

  const handleSwap = async () => {
    setSource(target);
    setTarget(source);
  };
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <TranslateInput
          onChangeText={setText}
          placeholder="Введите ваш текст"
        />
        <View style={[styles.languagesContainer]}>
          <View style={[styles.sourceLanguage]}>
            <Text> Ваш язык {source}</Text>
          </View>
          <Pressable onPress={handleSwap}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../assets/icons/swapIcon.png")}
            ></Image>
          </Pressable>
          <View style={[styles.targetLanguage]}>
            <Text> Язык на который переводим {target}</Text>
          </View>
        </View>
        <View style={[styles.languagePicker]}></View>
        <View style={[styles.languagesContainer]}>
          <Pressable onPress={handleChoose} style={[styles.languagePicker]}>
          <DropDownTranslate setTarget={setTarget} languages={languages}/>
          </Pressable>
        </View>
        <TranslateInput placeholder="Перевод" value={result} />
        <Button onPress={handleClick} title="Запрос"></Button>
      </View>
      <Button
        title="Перейти к макету"
        onPress={() => navigation.navigate("Макет")}
      />
    </View>
  );
};
