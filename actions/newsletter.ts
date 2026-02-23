"use server";

const apiKey = process.env.RESEND_API_KEY;

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email") as string;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!email) return { error: "Email is required" };

  try {
    const response = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email: email,
        unsubscribed: false, // Default aktif
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      // Handle jika email sudah terdaftar
      if (errorData.name === "contact_already_exists") {
        return { error: "You are already subscribed!" };
      }
      throw new Error("Failed to subscribe");
    }

    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong. Please try again later." };
  }
}
