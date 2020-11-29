type RootStackParamList = {
  //  受け取るパラメータは無いのでundefined
  ScanScreen: undefined;
  // スキャン結果を受け取るので{}内に名前と型を指定
  ResultScreen: { data: string };
};
