import React, { FC } from "react";
import { View, StyleSheet, Platform, Switch, ViewStyle } from "react-native";

import Colors from "../constants/colors";
import BodyText from "./Text/BodyText";

interface AppSwitchProps {
  label: string;
  value: boolean;
  onValueChange(newVal: boolean): void;
  style?: ViewStyle;
}

const AppSwitch: FC<AppSwitchProps> = (props) => (
  <View style={{ ...styles.switch, ...props.style }}>
    <BodyText>{props.label}</BodyText>
    <Switch
      thumbColor={Platform.OS === "android" ? Colors.Primary : undefined}
      trackColor={{ true: Colors.Secondary, false: "#ccc" }}
      value={props.value}
      onValueChange={props.onValueChange}
    />
  </View>
);

const styles = StyleSheet.create({
  switch: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default AppSwitch;
