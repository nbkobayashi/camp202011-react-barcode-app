import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner";

export function ScanScreen() {
  // カメラのアクセス権限を保存するstate
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanning, setScanning] = useState<boolean | null>(null);

  // カメラのアクセス権限を求める
  const requestPermissions = async () => {
    // BarCodeScannerの権限取得
    const permissionResult = await BarCodeScanner.requestPermissionsAsync();
    // 権限取得結果を保存
    setHasPermission(permissionResult.granted);

    if (permissionResult.granted === false) {
      alert("カメラロールへのアクセス許可が必要です！");
      return;
    }
  };

  // ナビゲーションを定義
  const navigation = useNavigation();

  useEffect(() => {
    requestPermissions();
  });

  // スキャン開始ボタンを押した時の処理
  const handleScanButton = () => {
    if (hasPermission) {
      setScanning(true);
    }
  };

  // スキャンの後処理
  const handleBarCodeScanned = ({ type, data }: BarCodeScannerResult) => {
    setScanning(false);
    navigation.navigate("ResultScreen", { data: data });
  };

  const Scan = () => {
    if (!scanning) {
      return <Button title="スキャン開始" onPress={handleScanButton} />;
    } else {
      return (
        <BarCodeScanner
          style={StyleSheet.absoluteFill}
          onBarCodeScanned={handleBarCodeScanned}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <Scan />
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
