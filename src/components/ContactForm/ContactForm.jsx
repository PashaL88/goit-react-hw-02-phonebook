import { Component } from "react";
import styles from './ContactForm.module.css'

class ContactForm extends Component  {
  state = {
    name: '',
    number: '',
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            name: '',
            number: '', 
        })
    }

  handleChange = ({target}) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { name, number } = this.state;
    const { handleSubmit, handleChange} = this;
    return (
          <form action="" onSubmit={handleSubmit}>
            <p>Name</p>
            <input value={name} type="tel" onChange={handleChange}
              name="name" placeholder="name" />
            <p>Number</p>
            <input value={number}
              type="tel"
              onChange={handleChange}
  name="number" placeholder="tel"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
            <button type="submit">Add contact</button>
          </form>
)
  }
}

export default ContactForm