import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
export default function App() {
  return (
    <>
<ListingDetailsScreen/>
      <StatusBar style="auto" />
    </>
  );
}
