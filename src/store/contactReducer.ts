import type { Contact } from "./contact";

export type Action =
  | { type: "ADD_CONTACT"; payload: Contact }
  | { type: "REMOVE_CONTACT"; payload: number }
  | { type: "UPDATE_CONTACT"; payload: Contact }
  | { type: "SET_CONTACTS"; payload: Contact[] };

export const contactReducer = (state: Contact[], action: Action): Contact[] => {
  console.log("Reducer called with action:", action.type, "current state length:", state.length);
  switch (action.type) {
    case "ADD_CONTACT":
      console.log("Adding contact:", action.payload);
      return [...state, action.payload];
    case "REMOVE_CONTACT":
      console.log("Removing contact with id:", action.payload);
      return state.filter(c => c.id !== action.payload);
    case "UPDATE_CONTACT":
      console.log("Updating contact:", action.payload);
      return state.map(c => (c.id === action.payload.id ? action.payload : c));
    case "SET_CONTACTS":
      console.log("Setting contacts, payload:", action.payload, "payload length:", action.payload.length);
      const newState = action.payload;
      console.log("New state will be:", newState);
      return newState;
    default:
      return state;
  }
};
