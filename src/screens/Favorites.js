import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import AppStyles from "../utils/AppStyles";

const Favorites = ({ navigation }) => {
  return (
    <SafeAreaView style={AppStyles.container}>
      <View style={AppStyles.headerView}>
        <Text style={[AppStyles.headingText, { color: "lightgreen" }]}>
          Favorites
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[AppStyles.iconsView, { marginLeft: "60%" }]}
        >
          <Image
            source={require("../images/close.png")}
            style={AppStyles.headerIcons}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
  },
});
