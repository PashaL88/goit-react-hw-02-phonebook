import { Component } from "react";
import {nanoid} from "nanoid"

class App extends Component  {
  state = {
  contacts: [],
    name: '',
  number: '',
  }
  
  addContact = (event) => {
    event.preventDefault();
    this.setState(prevState => {
      const { contacts, name, number } = prevState;
      const newContact = {
        name,
        number,
        id: nanoid(),
      }
        return { 
          contacts: [...contacts, newContact],
          name: "",
          number: "",
         }
      }
    )
  }

  handleChange = ({target}) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { contacts } = this.state;
    const { addContact, handleChange } = this;

    const elements = contacts.map(({id, name, number }) => (
      <li key={id}>{name}: {number}</li>
    ))
    return (
      <div>
        <section>
          <h2>Phonebook</h2>
          <form action="" onSubmit={addContact}>
            <input type="tel" onChange={handleChange}
              name="name" />
            <h2>Number</h2>
            <input
              type="tel"
              onChange={handleChange}
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
            <button type="submit">Add contact</button>
          </form>
        </section>
        <section>
          <h2>Contacts</h2>
        <ul>
          {elements}
          </ul>
          </section>
  </div>
)
  }
}

export default App