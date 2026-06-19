"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type State = { success: boolean; error?: string } | null;

export async function sendContactEmail(
  _prevState: State,
  formData: FormData
): Promise<State> {
  const name = (formData.get("name") as string)?.trim();
  const contact = (formData.get("contact") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !contact || !message) {
    return { success: false, error: "Sva polja su obavezna." };
  }

  try {
    await resend.emails.send({
      from: "La Trattoria Website <onboarding@resend.dev>",
      to: "latrattoria.sarajevo@gmail.com",
      subject: `Nova poruka od ${name}`,
      text: `Ime: ${name}\nKontakt: ${contact}\nPoruka:\n${message}`,
    });
    return { success: true };
  } catch {
    return { success: false, error: "Greška pri slanju. Pokušajte ponovo." };
  }
}
