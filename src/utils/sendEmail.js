import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_PRIVATE_KEY } from '../config.js';

"use server";

export const sendEmail = async (formData, isAnswer) => {
 const { firstName, lastName, email, title, course, message} = formData;

  if (!email || !firstName) {
    return { error: "Please fill out all required fields", data: "" };
  }

  const template_id = isAnswer ? EMAILJS_TEMPLATE_ANSWER_ID : EMAILJS_TEMPLATE_ID;

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"  
          },
        body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: template_id,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            title: title,
            course: course,
            message: message
        }
      })
    });
    return response;
    //  { error: "", data: "Email sent out successfully, you should receive a copy to your own email." };
  } catch (error){
    console.log(error);
    return {
      error: "Error sending email. Please contact by phone." + error,
      data: "",
    };
  }
}