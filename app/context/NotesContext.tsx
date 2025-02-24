import React, { createContext, useReducer, useContext } from "react";

type Note = {
  id: number;
  title: string;
  content: string;
};

type NotesState = Note[];

type NotesAction =
  | { type: "ADD_NOTE"; payload: { title: string; content: string } }
  | { type: "EDIT_NOTE"; payload: { id: number; title: string; content: string } }
  | { type: "DELETE_NOTE"; payload: number };

const NotesContext = createContext<{
  state: NotesState;
  dispatch: React.Dispatch<NotesAction>;
} | null>(null);

const notesReducer = (state: NotesState, action: NotesAction): NotesState => {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, { id: Date.now(), ...action.payload }];
    case "EDIT_NOTE":
      return state.map(note =>
        note.id === action.payload.id ? { ...note, ...action.payload } : note
      );
    case "DELETE_NOTE":
      return state.filter(note => note.id !== action.payload);
    default:
      return state;
  }
};

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, []);
  return <NotesContext.Provider value={{ state, dispatch }}>{children}</NotesContext.Provider>;
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) throw new Error("useNotes must be used within a NotesProvider");
  return context;
};
