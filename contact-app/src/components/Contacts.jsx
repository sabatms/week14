import { useState } from "react";
import { v4 } from "uuid";
import ContactsList from "./ContactsList";
import inputs from "../constants/inputs";

import styles from "./Contacts.module.css";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const changeHandeler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandeler = () => {
    if (!contact.name || !contact.lastname || !contact.email || !contact.phone) {
      setAlert("please enter valid data!");
      return;
    }
    setAlert("");
    const newContact = { ...contact, id: v4() };
    setContacts([...contacts, newContact]);
    setContact({
      id: "",
      name: "",
      lastname: "",
      email: "",
      phone: "",
    });
    setAlert("");
  };

  const deleteHandeler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={contact[input.name]}
            onChange={changeHandeler}
          />
        ))}
        <button onClick={addHandeler}>Add Contact</button>
      </div>

      
      <div className={styles.alertContainer}>
        {alert && <p className={styles.alert}>{alert}</p>}
      </div>

      
      <div className={styles.contactsList}>
        <ContactsList contacts={contacts} deleteHandeler={deleteHandeler} />
      </div>
    </div>
  );
}

export default Contacts;
