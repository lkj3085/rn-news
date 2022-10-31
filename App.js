import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/AppNavigator";
import Main from "./src/screens/Main";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="hidden" />
      <AppNavigator />
    </SafeAreaView>
  );
}
