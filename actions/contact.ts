"use server";

import { getTranslations } from "next-intl/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ name, email, message }: { name: string; email: string; message: string }) {
  const t = await getTranslations();

  if (!name || !email || !message) return { ok: false, message: "Semua field harus diisi." };

  try {
    const { error } = await resend.emails.send({
      from: "Vryce Contact <contact@vryce.id>",
      to: ["contact@vryce.id"],
      replyTo: email,
      subject: `Pesan Baru: ${name} via vryce.id`,
      text: `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { ok: false, message: "Gagal mengirim email." };
    }

    return { ok: true, message: t("contact.success_message", { name: name }) };
  } catch (err) {
    console.error("Server Error:", err);
    return { ok: false, error: "Terjadi kesalahan server." };
  }
}
