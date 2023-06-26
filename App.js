import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import TranslateScreen from "./screens/TranslateScreen";
import LayoutScreen from "./screens/LayoutScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const Stack = createStackNavigator();

  const [loaded] = useFonts({
    Dosis: require("./assets/fonts/Dosis-VariableFont_wght.ttf"),
  });

  if (!loaded) {
    return null;
  }

  function MyStack() {
    return (
      
      <Stack.Navigator>
        <Stack.Screen name="Переводчик" component={TranslateScreen} />
        <Stack.Screen name="Макет" component={LayoutScreen} />
      </Stack.Navigator>
     
    );
  }
  return (
   
 
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    
  );
}
