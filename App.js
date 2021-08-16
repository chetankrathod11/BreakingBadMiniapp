import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello world</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
