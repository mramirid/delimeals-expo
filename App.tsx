import "react-native-gesture-handler";
import React, { FC } from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Fonts from "./constants/fonts";
import AppNavigator from "./navigation/AppNavigator";

const App: FC = () => {
  const [isFontsLoaded] = useFonts({
    [Fonts.OpenSansRegular]: require("./assets/fonts/OpenSans-Regular.ttf"),
    [Fonts.OpenSansBold]: require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  if (!isFontsLoaded) {
    return <AppLoading />;
  }

  return <AppNavigator />;
};

export default App;
