import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { RouteProp } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";

// 型を設定
type ResultScreenRouteProps = RouteProp<RootStackParamList, "ResultScreen">;

type Props = {
  route: ResultScreenRouteProps;
};

export function ResultScreen(props: Props) {
  // 分割代入でdataだけを取り出す
  const { data } = props.route.params;

  const openBrowser = (url: string) => {
    WebBrowser.openBrowserAsync(url).catch(error => {
      alert("URLを開けませんでした");
    });
  };

  // 正規表現でURLかどうかを判定
  const isURL = (url: string) => {
    const urlRegexp = /^https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&= + \$,%#\u3000-\u30FE\u4E00-\u9FA0\uFF01-\uFFE3]+/g;
    return urlRegexp.test(url);
  };

  useEffect(() => {
    if (isURL(data)) {
      Alert.alert("確認", `${data}\nブラウザで開きますか?`, [
        { text: "いいえ" },
        { text: "はい", onPress: () => openBrowser(data) }
      ]);
    }
  });

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
