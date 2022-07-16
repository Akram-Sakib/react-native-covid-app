import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home";
import { useFonts } from "expo-font";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    GraphikRegular: require("./assets/fonts/GraphikRegular.otf"),
    GraphikMedium: require("./assets/fonts/GraphikMedium.otf"),
    GraphikBold: require("./assets/fonts/GraphikBold.otf"),
  });

  if (!loaded) {
    return <Text>Font is loading</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
