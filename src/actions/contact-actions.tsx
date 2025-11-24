import { ContactFormSchema } from "@/validators/contact-validators";
import z from "zod";

export async function ContactFormAction(values: z.infer<typeof ContactFormSchema>) {
  console.log(values)
}
