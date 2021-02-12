import "react-native-gesture-handler";
import React, { FC } from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";

import Fonts from "./constants/fonts";
import AppNavigator from "./navigation/AppNavigator";
import store from "./store";

enableScreens();

const App: FC = () => {
  const [isFontsLoaded] = useFonts({
    [Fonts.OpenSansRegular]: require("./assets/fonts/OpenSans-Regular.ttf"),
    [Fonts.OpenSansBold]: require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!isFontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </>
  );
};

export default App;
