import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNotes } from "../context/NotesContext";
import NoteItem from "../components/NoteItem";

const NotesApp: React.FC = () => {
  const { state, dispatch } = useNotes();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = () => {
    if (title.trim() && content.trim()) {
      dispatch({ type: "ADD_NOTE", payload: { title, content } });
      setTitle("");
      setContent("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📝 Notes App</Text>

      <TextInput
        style={styles.input}
        placeholder="Title"
        placeholderTextColor="#000" 
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.contentInput]}
        placeholder="Content"
        placeholderTextColor="#000"
        value={content}
        onChangeText={setContent}
        multiline
      />

      <TouchableOpacity style={styles.addButton} onPress={addNote}>
        <Text style={styles.addButtonText}>➕ Add Note</Text>
      </TouchableOpacity>

      <FlatList
        data={state}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NoteItem note={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
    backgroundColor: "#FFD700", // 🟡 Changed background to yellow
  },
  header: {
    fontSize: 30, // 🔹 Increased text size
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#000", // 🔹 Made text black for better contrast
  },
  input: {
    borderWidth: 1,
    borderColor: "#000", // 🔹 Darker border for contrast
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    fontSize: 18, // 🔹 Increased input text size
    fontWeight: "bold",
    color: "#000", // 🔹 Ensured input text is black
  },
  contentInput: {
    height: 80,
    textAlignVertical: "top",
  },
  addButton: {
    backgroundColor: "#060270", 
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 20, 
    fontWeight: "bold",
  },
});

export default NotesApp;
