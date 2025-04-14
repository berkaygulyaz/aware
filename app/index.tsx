import { Link } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  Image,
} from "react-native";

// Fonts
import { useFonts } from "@expo-google-fonts/smooch-sans/useFonts";
import { SmoochSans_700Bold } from "@expo-google-fonts/smooch-sans/700Bold";

export default function LoginScreen() {
  let [fontsLoaded] = useFonts({
    SmoochSans_700Bold,
  });
  if (!fontsLoaded) return null;

  return (
    <View style={styles.Container}>
      <Text style={styles.LoginScreenTitle}>Welcome to Aware</Text>

      <TextInput style={styles.Input} placeholder="Username" />

      <TextInput
        style={styles.Input}
        placeholder="Password"
        secureTextEntry={true}
      />

      <Pressable
        onPress={() => console.log("Pressed!")}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#ddd" : "#1C1C1C",
          },
          styles.Button,
        ]}
      >
        {({ pressed }) => (
          <Text
            style={{ color: pressed ? "#1C1C1C" : "#fff", fontWeight: "bold" }}
          >
            Login
          </Text>
        )}
      </Pressable>
      <Text style={styles.OtherOptionsText}>Login with Others</Text>
      <View style={styles.LoginOption}>
        <Image
          style={styles.Logo}
          source={require("../assets/images/apple.png")}
        />
        <Text style={styles.LoginOptionText}>Login with Apple</Text>
      </View>
      <View style={styles.LoginOption}>
        <Image
          style={styles.Logo}
          source={require("../assets/images/google.png")}
        />
        <Text style={styles.LoginOptionText}>Login with Google</Text>
      </View>
      <Text style={styles.SignUpButton}>
        If you dont have account, you can sign up
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
    backgroundColor: "#fff",
  },
  LoginScreenTitle: {
    fontSize: 60,
    marginBottom: 30,
    fontWeight: "bold",
    fontFamily: "SmoochSans_700Bold",
  },
  Input: {
    width: 360,
    height: 52,
    backgroundColor: "#F2F2F2",
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
  },
  Button: {
    width: 360,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  OtherOptionsText: {
    marginVertical: 24,
    fontSize: 16,
  },
  Logo: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  LoginOption: {
    flexDirection: "row",
    alignItems: "center",
    width: 360,
    borderWidth: 1,
    borderColor: "#1C1C1C",
    paddingVertical: 11,
    paddingHorizontal: 110,
    borderRadius: 12,
    marginBottom: 16,
  },
  LoginOptionText: {
    marginLeft: 8,
  },
  SignUpButton: {
    fontSize: 14,
  },
});
