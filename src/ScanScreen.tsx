import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export function ScanScreen() {
  // ナビゲーションを定義
  const navigation = useNavigation();

  // スキャン開始ボタンを押した時の処理
  const handleScanButton = () => {
    navigation.navigate("ResultScreen");
  };

  return (
    <View style={styles.container}>
      <Button title="スキャン開始" onPress={handleScanButton} />
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
