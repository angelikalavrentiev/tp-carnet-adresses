import type { Contact } from "./contact";

export type Action =
  | { type: "ADD_CONTACT"; payload: Contact }
  | { type: "REMOVE_CONTACT"; payload: number }
  | { type: "UPDATE_CONTACT"; payload: Contact }
  | { type: "SET_CONTACTS"; payload: Contact[] };

export const contactReducer = (state: Contact[], action: Action): Contact[] => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.payload];
    case "REMOVE_CONTACT":
      return state.filter(c => c.id !== action.payload);
    case "UPDATE_CONTACT":
      return state.map(c => (c.id === action.payload.id ? action.payload : c));
    case "SET_CONTACTS":
      return action.payload;
    default:
      return state;
  }
};
