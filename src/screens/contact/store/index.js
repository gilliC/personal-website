import { action, observable, makeObservable, computed } from "mobx";
import { createContext, useContext } from "react";

export class ContactStore {
  constructor(value) {
    this.name = null;
    this.email = null;
    this.message = null;
    makeObservable(this, {
      name: observable,
      email: observable,
      message: observable,
      setName: action,
      setEmail: action,
      setMessage: action,
    });
  }

  setName = (name) => { this.name = name; };
  setEmail = (email) => { this.email = email; };
  setMessage = (msg) => { this.message = msg; };
}

const ContactStoreContext = createContext();
export const ContactStoreContextProvider = ContactStoreContext.Provider;
export const ContactStoreContextConsumer = ContactStoreContext.Consumer;
export const useContactStore = () => useContext(ContactStoreContext);