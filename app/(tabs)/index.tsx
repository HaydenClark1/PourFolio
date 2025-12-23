import { View, Text,Image, useWindowDimensions  } from "react-native";
import { LogoStyle } from "@/components/styles/LogoStyle";
export default function HomeScreen() {
  const { height,width } = useWindowDimensions();

  return (
    <>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={{height: height * 0.3,width: width * 0.8}}>
          <Image
            testID="home-logo"
            source={require("../../assets/images/logo.png")}
            style={{
              width: "100%",
              height: "100%",
              resizeMode:"contain",
              marginTop: height * 0.07,
            }}
          />
        </View>

      </View>

    </>
  );
}
