import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNotes } from "../context/NotesContext";

type NoteItemProps = { note: { id: number; title: string; content: string } };

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  const { dispatch } = useNotes();
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(note.title);
  const [editContent, setEditContent] = useState(note.content);

  const saveEdit = () => {
    dispatch({ type: "EDIT_NOTE", payload: { id: note.id, title: editTitle, content: editContent } });
    setIsEditing(false);
  };

  return (
    <View style={styles.card}>
      {isEditing ? (
        <>
          <TextInput
            value={editTitle}
            onChangeText={setEditTitle}
            style={styles.input}
          />
          <TextInput
            value={editContent}
            onChangeText={setEditContent}
            style={styles.input}
            multiline
          />
          <TouchableOpacity style={styles.saveButton} onPress={saveEdit}>
            <Text style={styles.buttonText}>💾 Save</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.title}>{note.title}</Text>
          <Text style={styles.content}>{note.content}</Text>
        </>
      )}

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
          <Text style={styles.buttonText}>✏ Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => dispatch({ type: "DELETE_NOTE", payload: note.id })}
        >
          <Text style={styles.buttonText}>❌ Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#060270",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30, 
    marginBottom: 10,
    color: "#FFFFFF", 
  },
  content: {
    fontSize: 30,
    color: "#FFFFFF",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    backgroundColor: "#f9f9f9",
    fontSize: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  editButton: {
    backgroundColor: "#FFD700",
    padding: 12,
    borderRadius: 6,
  },
  deleteButton: {
    backgroundColor: "#FF3B30",
    padding: 12,
    borderRadius: 6,
  },
  saveButton: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 6,
    marginTop: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default NoteItem;
