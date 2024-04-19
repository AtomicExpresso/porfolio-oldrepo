import NameIcon from '../../assets/images/icons/decor/signature-solid.svg';
import EmailIcon from '../../assets/images/icons/decor/envelope-regular.svg';
import MessageIcon from '../../assets/images/icons/decor/message-regular.svg';

/*Constructs the contact box, and the btn handles for submission*/
//Also, sets a min and max character limit to prevent spammy messages
//The submit button currently has a placeholder until i figure out a secure way to connect it

function ContactBox(){
  const FieldConstructor = ({Img, Name, PlaceHolder, LabelTxt, MinLen, MaxLen, Type}) => {
    const inputId = `${Name}-input`;
    
    return (
      <div>
        <div className='row-one'>
          <img src={Img} draggable="false" alt={`${Name}`}></img>
          <label htmlFor={inputId}>{LabelTxt}</label>
        </div>
        <input type={Type} id={inputId} placeholder={PlaceHolder} name={Name} className="form-control" maxLength={MaxLen} minLength={MinLen} required></input>
      </div>
    )
  }

  return (
    <div className="contact-me-container">
      <h1>Contact</h1>
      <form>
        <FieldConstructor
          Img={NameIcon}
          Name='name-field'
          LabelTxt='Your Name'
          PlaceHolder='Your name'
          MinLen={3}
          MaxLen={12}
          type='text'
        />
        <FieldConstructor
          Img={EmailIcon}
          Name='email-field'
          LabelTxt='Email Address'
          PlaceHolder='Ex. Example@gmail.com'
          MinLen={10}
          MaxLen={25}
          type='email'
        />
        <div className='row-one'>
          <img src={MessageIcon} draggable="false" alt="text area icon"></img>
          <label htmlFor="message-box">Message</label>
        </div>
        <textarea placeholder="Please enter your message..." id="message-box" className="form-control" maxLength={200} minLength={16} name='message-box' required></textarea>
        <button type="submit" className="btn btn-primary" onClick={console.log('Place Holder')}>Submit</button>
      </form>
    </div>
  )
};

export default ContactBox;