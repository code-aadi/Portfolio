import { useState } from 'react';
import './Contact.css';

import WhatsAppButton from '../WhatsappButton/WhatsAppButton';



export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: '', 
    message: '' 
  });

  const [errors, setErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false);

async function submitEnquiry(formData) { 
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  
  if (!accessKey) {
    throw new Error("Web3Forms Access Key missing in .env file.");
  }

  const submissionData = {
    access_key: accessKey,
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  };

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(submissionData)
  });

  const data = await response.json();
  return data; 
}



  const handleInputChange = (field) => (event) => {
    setErrors({})
    setFormData({ 
      ...formData, 
      [field]: event.target.value 
    });
  };



  const handleSubmit = async (event) => {
  event.preventDefault();
  const validationErrors = {};

  if (!formData.name.trim()) {
    validationErrors.name = 'Enter your name.';
  }
  if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    validationErrors.email = 'Enter a valid email address.';
  }
  if (!formData.subject.trim()) {
    validationErrors.subject = 'Enter a subject.';
  }
  if (formData.message.trim().length < 10) {
    validationErrors.message = 'Write at least 10 characters.';
  }

  setErrors(validationErrors); 
  if (Object.keys(validationErrors).length > 0) return; 

  setIsSubmitting(true); 

  try {
    const result = await submitEnquiry(formData); 

    if (result.success) {
      setIsSubmitted(true); 
      setFormData({ name: '', email: '', subject: '', message: '' }); 
      
      setTimeout(() => {
        setIsSubmitted(false);
        setStatusMessage("");
      }, 5000);
    } else {
      alert(result.message)
      console.log(result.message)
    }
  } catch (error) {
    
   alert(error.message)
  } finally {
    setIsSubmitting(false); 
  }
};


  return (
    <section id="contact" className="sec white">
      <div className="container cgrid">
        
       <div className="reveal">
  <h2>Let's build something together.</h2>
  <p>Have an idea, project, or opportunity? Let's talk.</p>
  <p style={{ margin: '24px 0 12px' }}>Prefer a quick chat? Message me directly:</p>
  <WhatsAppButton />
</div>
        
        <form className="cform reveal" onSubmit={handleSubmit} noValidate>
          
          <label>
            Name
            <input 
              type="text" 
              value={formData.name} 
              onChange={handleInputChange('name')} 
              placeholder="Enter your full name" 
              aria-invalid={!!errors.name} 
            />
            {errors.name && <span className="err">{errors.name}</span>}
          </label>

          <label>
            Email
            <input 
              type="email" 
              value={formData.email} 
              onChange={handleInputChange('email')} 
              placeholder="e.g. john@example.com" 
              aria-invalid={!!errors.email} 
            />
            {errors.email && <span className="err">{errors.email}</span>}
          </label>

          <label>
            Subject
            <input 
              type="text" 
              value={formData.subject} 
              onChange={handleInputChange('subject')} 
              placeholder="e.g. Collaboration, Job Opportunity" 
              aria-invalid={!!errors.subject} 
            />
            {errors.subject && <span className="err">{errors.subject}</span>}
          </label>

          <label>
            Message
            <textarea 
              rows="5" 
              value={formData.message} 
              onChange={handleInputChange('message')} 
              placeholder="Type your message here..." 
              aria-invalid={!!errors.message} 
            />
            {errors.message && <span className="err">{errors.message}</span>}
          </label>

          <button className="btn btn-dark" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send Enquiry"}</button>
          
          {isSubmitted && (
            <div className="toast" role="status">
              Thanks! Your message has been received.
            </div>
          )}
          
        </form>
      </div>
    </section>
  );
}
