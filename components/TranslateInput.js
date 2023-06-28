import { TextInput } from "react-native";
import { useState } from "react";
import { View } from "react-native";
import styles from "./styles";

function TranslateInput({
  placeholder,
  value,
  setText,
  handleClick,
  editable,
}) {
  const [heightValue, setHeightValue] = useState(40);
  function handleOnLayout(event) {
    if (event.nativeEvent.layout) {
      setHeightValue(event.nativeEvent.layout.height + 40);
    }
  }
  return (
    <View style={[styles.TextBoxes, { height: heightValue }]}>
      <TextInput
        onChangeText={setText}
        onChange={handleClick}
        onLayout={{
          handleOnLayout,
        }}
        editable={editable}
        multiline
        value={value}
        placeholder={placeholder}
        style={{ textAlign: "center", fontSize: 20 }}
      />
    </View>
  );
}
export default TranslateInput;
