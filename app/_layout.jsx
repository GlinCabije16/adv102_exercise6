import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { NotesProvider } from "./context/NotesContext"; 
import NotesApp from "./components/NotesApp";
import UserInfo from "./components/UserInfo"; 

export default function App() {
  return (
    <NotesProvider> 
      <View style={styles.container}>
        <UserInfo />  
        <NotesApp />
      </View>
    </NotesProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#060270" },
});
