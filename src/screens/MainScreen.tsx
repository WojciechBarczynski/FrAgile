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

// Navigation functions
  const navigateToQrScanScreen = () => {
    navigation.navigate("QrScanScreen");
  };

  const navigateToListScreen = () => {
    navigation.navigate("ListScreen");
  };

  const navigateToMapScreen = () => {
    navigation.navigate("MapScreen");
  };

  const navigateToCreditsScreen = () => {
    navigation.navigate("CreditsScreen");
  };


// Layout
  return (
    <View style={[{ flex: 1 }]}>
      <SafeAreaView style={mainStyle.container}>
        <Image
          style={mainStyle.logo}
          source={require("../../assets/logo.png")}
        />
        <Title title="FrAgile" />
        <View style={mainStyle.container}>

          <PrimaryButton
            title={"Scan QR Code"}
            handleOnClick={navigateToQrScanScreen}
          ></PrimaryButton>

          <PrimaryButton
            title={"Show list"}
            handleOnClick={navigateToListScreen}
          ></PrimaryButton>

          <PrimaryButton
            title={"Show map"}
            handleOnClick={navigateToMapScreen}
          ></PrimaryButton>

          <PrimaryButton
            title={"Credits"}
            handleOnClick={navigateToCreditsScreen}
          ></PrimaryButton>

        </View>
      </SafeAreaView>
    </View>
  );
};


export default MainScreen;
