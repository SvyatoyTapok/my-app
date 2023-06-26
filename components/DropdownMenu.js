import { View, Text, Pressable, FlatList } from "react-native";
import styles from "./styles";
import Addresses from "./Addresses";
function DropdownMenu({ setAddress, setactiveDropdownMenu, activeDropMenu }) {
  return (
    <View style={styles.dropdownContainer}>
      <FlatList
        ItemSeparatorComponent={<View style={{backgroundColor:'lightgray',alignSelf:'center',borderRadius:10, width:"90%",height:0.5}}/>}
        data={Addresses}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              setAddress(item.address), setactiveDropdownMenu(!activeDropMenu);
            }}
            style={[styles.dropdownOption]}
          >
            <Text>{item.address}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

export default DropdownMenu;
