import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";

const App: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Ovo je Moj Prvi React Native App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
