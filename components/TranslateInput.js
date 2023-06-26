import { TextInput } from "react-native";
import { useState } from "react";
import { View } from "react-native";
import styles from "./styles";

function translateScreen(props) {
  const [heightValue, setHeightValue] = useState(40);
  return (
    <View
      style={[styles.TextBoxes, {height: heightValue}]}
    >
      <TextInput
        onChangeText={props.onChangeText}
        onLayout={(event) => {
          if (event.nativeEvent.layout) {
            setHeightValue(event.nativeEvent.layout.height + 40);
          }
        }}
        multiline
        value={props.value}
        placeholder={props.placeholder}
        style={{ textAlign: "center", fontSize: 20}}
      />
    </View>
  );
}

export default translateScreen;
