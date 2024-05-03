import ContactHero from "../componets/Contact/contactHero"
import ContactBox from "../componets/Contact/contactBox"
import {Helmet} from "react-helmet";

function ContactPage(){
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact me</title>
        <meta name="description" content="Fill out this form or send me a message on one of my socials to get in touch" />
      </Helmet>
      <ContactHero/>
      <ContactBox/>
    </div>
  )
}

export default ContactPage