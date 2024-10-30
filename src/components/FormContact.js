import emailjs from 'emailjs-com';
import { useRef } from 'react';



function FormContact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_USER_ID'
    ).then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    e.target.reset();  // Réinitialiser le formulaire après envoi
  };

  return (
    <>
      <p>Vous avez également la possibilité de nous envoyer un message directement :</p>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nom</label>
          <input type="text" className="form-control" id="name" name="user_name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="user_email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="4" name="message" required></textarea>
        </div>
        <button type="submit" className="btn btn-tommette">Envoyer</button>
      </form>
    </>
  );
}

export default FormContact;
