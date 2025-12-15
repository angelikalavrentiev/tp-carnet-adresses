import type { Contact } from "./contact";

const STORAGE_KEY = "contacts";

export const loadContacts = (): Contact[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    console.log("Loading contacts from localStorage:", stored);
    if (!stored) {
      console.log("No contacts found in localStorage");
      return [];
    }
    const parsed = JSON.parse(stored);
    console.log("Parsed contacts:", parsed);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Error loading contacts from localStorage:", error);
    return [];
  }
};

export const saveContacts = (contacts: Contact[]) => {
  try {
    console.log("Saving contacts to localStorage:", contacts);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
    console.log("Contacts saved successfully");
  } catch (error) {
    console.error("Error saving contacts to localStorage:", error);
  }
};