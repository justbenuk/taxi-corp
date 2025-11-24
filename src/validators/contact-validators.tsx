import z from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(1, 'Whats your name'),
  email: z.string().email('Whats your email'),
  contactNumber: z.string().min(1, 'Whats your contact number'),
  subject: z.string().min(1, 'Pleasde tell us how we can help you'),
  message: z.string().min(1, 'Whats your message')
})
