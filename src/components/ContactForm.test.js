import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";




test('Submit when form inputs valid', () => {
  const { getByLabelText, getByTestId, findByText, getByDisplayValue } = render(<ContactForm />)

  const firstName = getByLabelText(/first name/i)
  const lastName = getByLabelText(/last name/i)
  const email = getByLabelText(/email/i)
  const message = getByLabelText(/first name/i)
  
  fireEvent.change(firstName, { target: {value: 'Cha'} })
  fireEvent.change(lastName, { target: {value: 'DiFranco'} })
  fireEvent.change(email, { target: {value: 'charliedifranco1@gmail.com'}
  }) 
  fireEvent.change(message, { target: {value: 'Hello there'} 
  })
   
  const button = getByTestId(/submit/i)
  fireEvent.click(button);

})


