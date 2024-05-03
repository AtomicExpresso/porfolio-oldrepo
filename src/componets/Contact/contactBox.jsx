import { useState } from 'react';
import NameIcon from '../../assets/images/icons/decor/signature-solid.svg';
import EmailIcon from '../../assets/images/icons/decor/envelope-regular.svg';
import MessageIcon from '../../assets/images/icons/decor/message-regular.svg';

/*Constructs the contact box, and the btn handles for submission*/
//Also, sets a min and max character limit to prevent spammy messages
//The submit button currently has a placeholder until i figure out a secure way to connect it

function ContactBox(){
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comments: ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData(prevFromData => {
      return {
        ...prevFromData,
        [name]: value
      }
    })
  }

  return (
    <div className="contact-me-container">
      <h1>Contact</h1>
      <form>
        <div>
          <div className='row-one'>
            <img src={NameIcon} draggable="false" alt="name"></img>
            <label htmlFor='name'>Your Name</label>
          </div>
            <input type="text" id='name' placeholder='Your name' name='name' value={formData.name} className="form-control" maxLength={12} minLength={3} onChange={handleChange} autoComplete="given-name" required></input>
          </div>
          <div className='row-one'>
            <img src={EmailIcon} draggable="false" alt="email"></img>
            <label htmlFor='email'>Email Address</label>
          </div>
            <input type="text" id='email' placeholder='Ex. Example@gmail.com' name='email' value={formData.email} className="form-control" maxLength={25} minLength={10} onChange={handleChange} autoComplete="off" required></input>
          <div className='row-one'>
            <img src={MessageIcon} draggable="false" alt="text area icon"></img>
            <label htmlFor="message-box">Message</label>
          </div>
          <textarea placeholder="Please enter your message..." id="message-box" className="form-control" maxLength={200} minLength={16} name='comments' value={formData.comments} onChange={handleChange} required></textarea>
          <button type="submit" className="btn btn-primary" onClick={() => console.log('Place Holder')}>Submit</button>
      </form>
    </div>
  )
};

export default ContactBox;