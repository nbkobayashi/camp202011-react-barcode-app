import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RouteProp } from "@react-navigation/native";

// 型を設定
type ResultScreenRouteProps = RouteProp<RootStackParamList, "ResultScreen">;

type Props = {
  route: ResultScreenRouteProps;
};

export function ResultScreen(props: Props) {
  // 分割代入でdataだけを取り出す
  const { data } = props.route.params;

  return (
    <View style={styles.container}>
      <Text>{data}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
