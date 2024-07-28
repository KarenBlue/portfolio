import {useState} from "react";

import emailjs from 'emailjs-com';
import Resources from '../Resources';
import { useAlertContext } from '../context/alertContext';


/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    
    setLoading(true);
    try {

      const templateParams = {
        from_name: data.firstName,
        email: data.email,
        type: data.type,
        message: data.comment,
      };

      emailjs.send(Resources.contactMeSection.ids.emailService.name, Resources.contactMeSection.ids.emailService.template, 
        templateParams, Resources.contactMeSection.ids.emailService.key)
        .then((result) => {
          
          setResponse({
              type: 'success',
              message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
          });
        
      }, (error) => {
          setResponse({
            type: 'error',
            message: 'Something went wrong, please try again later!'
          })
      }); 
    } catch (error) {

      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })

    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmit;
