import { Component } from "react";
import { nanoid } from "nanoid"
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";

class App extends Component  {
  state = {
  contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
  filter: '',
  }
  
  addContact = (data) => {
    const { name } = data;
    const { contacts } = this.state;
    const dublicate = contacts.find(contact => contact.name === name)
      if (dublicate) {
        alert(`${name} is already in contacts`)
        return
      }
    this.setState(prevState => {
      const { contacts} = prevState;
      const { name, number } = data;
      const newContact = {
        name,
        number,
        id: nanoid(),
      }
        return { 
          contacts: [...contacts, newContact],
          name: "",
          number: "",
          filter: '',
         }
      }
    )
  }

  changeFilter = ({target}) => {
    this.setState({
      filter: target.value,
    })
  }

  deleteContact = (id) => {
    this.setState(prevState => {
      const { contacts } = prevState;
      return {
        contacts: contacts.filter((contact) => contact.id !== id)
      }
})
  }

  getFilteredContacts() {
    const { filter, contacts } = this.state;
    if(!filter) { return contacts}
    const filterText = filter.toLowerCase();
    const filteredContacts = contacts.filter(({name}) => {
      const result = name.toLowerCase().includes(filterText)
      return result
    })
    return filteredContacts
  }

  render() {
    const {  filter } = this.state;
    const { addContact, changeFilter, deleteContact } = this;
    const contacts = this.getFilteredContacts();
    
    return (
      <div>
          <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact}/>
          <h2>Contacts</h2>
          <Filter filter={filter} changeFilter={changeFilter} />
        <ContactList contacts={contacts} deleteContact={deleteContact } />
      </div>
      
)
  }
}

export default App