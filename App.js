import { useFonts } from "expo-font";
import TranslateScreen from "./screens/TranslateScreen";
import LayoutScreen from "./screens/LayoutScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Stack = createStackNavigator();

  const [loaded] = useFonts({
    Dosis: require("./assets/fonts/Dosis-VariableFont_wght.ttf"),
  });

  if (!loaded) {
    return null;
  }
  // todo: вынести стек в отдельную папку с навигацией
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
