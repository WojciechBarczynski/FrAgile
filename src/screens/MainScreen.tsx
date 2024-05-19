import {PrimaryButton, Title} from "components/atoms";
import {paddingSize} from "properties/styles/vars";
import React from "react";
import {Image, SafeAreaView, StyleSheet, View} from "react-native";


export const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: paddingSize.medium,
    paddingVertical: paddingSize.mediumBig,
    rowGap: paddingSize.xBig,
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

const MainScreen = ({ navigation }: { navigation: any }) => {
  const navigateToStationListScreen = () => {
    navigation.navigate("StationList", {});
  }

  return (
    <View style={[{ flex: 1 }]}>
      <SafeAreaView style={mainStyle.container}>
        <Title title=" 💀 FrAgile 💀 " />
        <Image
          style={mainStyle.logo}
          source={require("../../assets/logo.png")}
        />
        <View style={mainStyle.container}>
          <PrimaryButton
              title={"Wybierz stanowiska"}
              handleOnClick={navigateToStationListScreen}
          ></PrimaryButton>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MainScreen;
