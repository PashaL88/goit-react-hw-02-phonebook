const ContactList = ({ contacts, deleteContact }) => {
    const elements = contacts.map(({ id, name, number }) => (
        <li key={id}>{name}: {number} <button type="button" onClick={() => deleteContact(id)}>delete</button></li>
    ));
    return (
         <ul>
          {elements}
          </ul>
    )
}

export default ContactList

