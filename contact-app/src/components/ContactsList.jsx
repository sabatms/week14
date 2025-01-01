import ContactItem from "./ContactItem";
 
import styles from "./ContactsList.module.css";
  function ContactsList({ contacts , deleteHandeler }) {
  return (
    
    <div className={styles.container}>
      <br />
      <h1>Contacts List</h1>
      {contacts.length ? (
        <ul className={styles.contacts}>
        {contacts.map((contact) => (
         <ContactItem
         key={contact.id} 
         data={contact} 
         deleteHandeler={deleteHandeler}
          />
        ))}
      </ul>
      ) : (
        <p className={styles.message}>
        No Contact Yet!
        </p>
        )}
      
    </div>
  );
}

export default ContactsList;
