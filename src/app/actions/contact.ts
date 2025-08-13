'use server';

import { z } from 'zod';

// Define schema for form validation
const ContactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(1, { message: 'Message is required' }),
});

export async function sendContactForm(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    // Validate form data
    const result = ContactFormSchema.safeParse({ name, email, message });
    
    if (!result.success) {
      return { 
        success: false, 
        errors: result.error.flatten().fieldErrors 
      };
    }
    
    // Construct mailto URL with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`);
    const mailtoUrl = `mailto:jtj0828@gmail.com?subject=${subject}&body=${body}`;
    
    return { 
      success: true, 
      mailtoUrl 
    };
  } catch (error) {
    console.error('Error processing contact form:', error);
    return { 
      success: false, 
      errors: { form: ['An unexpected error occurred'] } 
    };
  }
}
