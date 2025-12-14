import type { Contact } from "./contact";

const STORAGE_KEY = "contacts";

export const loadContacts = (): Contact[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveContacts = (contacts: Contact[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
};