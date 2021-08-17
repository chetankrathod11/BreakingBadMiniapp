import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import AppStyles from "../utils/AppStyles";

const DetailsScreen = ({ navigation, route, props }) => {
  const { image, name, nickname, birthday, occupation, portrayed, appearance } =
    route.params;
  return (
    <SafeAreaView style={AppStyles.container}>
      <ScrollView>
        <View style={styles.headerView}>
          <TouchableOpacity
            style={[AppStyles.iconsView, { marginLeft: "1%" }]}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require("../images/leftarrow.png")}
              style={[AppStyles.headerIcons, { width: 10, marginLeft: 18 }]}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[AppStyles.iconsView, { marginLeft: "80%" }]}
          >
            <Image
              source={require("../images/heart.png")}
              style={[AppStyles.headerIcons, { tintColor: "crimson" }]}
            />
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={{ uri: image }}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={{ bottom: 350, alignItems: "center" }}>
          <Image
            source={{ uri: image }}
            style={{
              width: 150,
              height: 200,
              alignSelf: "center",
              borderRadius: 8,
            }}
          />
          <Text style={styles.text}>{name}</Text>
          <Text style={[styles.text, { fontSize: 16, fontWeight: "normal" }]}>
            {nickname}
          </Text>
          <View style={styles.detailsView}>
            <View>
              <Text
                style={[
                  styles.text,
                  { color: "lightgreen", fontSize: 16, fontWeight: "bold" },
                ]}
              >
                Portrayed
              </Text>
              <Text
                style={[styles.text, { fontSize: 14, fontWeight: "normal" }]}
              >
                {portrayed}
              </Text>
            </View>
            <Text style={[styles.text, { fontSize: 14, fontWeight: "normal" }]}>
              {birthday}
            </Text>
          </View>
          <View style={{ alignSelf: "flex-start", left: 18, marginTop: 50 }}>
            <Text
              style={[
                styles.text,
                { color: "lightgreen", fontSize: 16, fontWeight: "bold" },
              ]}
            >
              Occupation
            </Text>
            <Text
              style={[
                styles.text,
                { fontSize: 14, fontWeight: "normal", width: 270 },
              ]}
            >
              {occupation}
            </Text>
          </View>
          <View style={{ alignSelf: "flex-start", left: 18, marginTop: 40 }}>
            <Text style={styles.text}>Other characters</Text>
            <ScrollView style={{ flexDirection: "row" }}>
              <View style={{ margin: 13, top: 25 }}>
                <Image
                  source={{ uri: image }}
                  style={{ width: 180, height: 240, borderRadius: 6 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 8,
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      width: 160,
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "#fff",
                    }}
                  >
                    {name}
                  </Text>
                </View>
                <Text style={{ fontSize: 14, color: "#fff" }}>{nickname}</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    opacity: 0.3,
    height: 550,
    resizeMode: "stretch",
  },
  headerView: {
    height: "8%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    zIndex: 1,
  },
  text: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    top: 20,
  },
  detailsView: {
    width: "90%",
    marginTop: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
