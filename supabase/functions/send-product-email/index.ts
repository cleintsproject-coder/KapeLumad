import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  name: string;
  email: string;
  message?: string;
  productName: string;
  type: "inquiry" | "notify";
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message, productName, type }: EmailRequest = await req.json();

    console.log(`Processing ${type} email for ${productName} from ${email}`);

    // Send confirmation email to customer
    const customerSubject = type === "notify" 
      ? `You're on the list for ${productName}!`
      : `Thank you for your inquiry about ${productName}`;

    const customerHtml = type === "notify"
      ? `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #faf8f5;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #3d2314; font-size: 28px; margin: 0;">Kape Lumad</h1>
            <p style="color: #6b5344; font-style: italic;">Brewing Culture, Empowering Communities</p>
          </div>
          <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
            <h2 style="color: #3d2314; margin-top: 0;">Hi ${name}! 👋</h2>
            <p style="color: #5c4a3d; line-height: 1.6;">
              Thank you for your interest in <strong>${productName}</strong>!
            </p>
            <p style="color: #5c4a3d; line-height: 1.6;">
              You're now on our notification list. We'll send you an email as soon as this product becomes available.
            </p>
            <p style="color: #5c4a3d; line-height: 1.6;">
              In the meantime, check out our other premium highland coffee products!
            </p>
          </div>
          <div style="text-align: center; margin-top: 30px; color: #8b7355; font-size: 14px;">
            <p>Kape Lumad • Maramag, Bukidnon, Philippines</p>
            <p>Empowering Manobo farmers through sustainable coffee</p>
          </div>
        </div>
      `
      : `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #faf8f5;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #3d2314; font-size: 28px; margin: 0;">Kape Lumad</h1>
            <p style="color: #6b5344; font-style: italic;">Brewing Culture, Empowering Communities</p>
          </div>
          <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
            <h2 style="color: #3d2314; margin-top: 0;">Thank you, ${name}! ☕</h2>
            <p style="color: #5c4a3d; line-height: 1.6;">
              We've received your inquiry about <strong>${productName}</strong>.
            </p>
            <p style="color: #5c4a3d; line-height: 1.6;">
              Our team will review your message and get back to you within 24-48 hours.
            </p>
            ${message ? `
              <div style="background: #f5f2ed; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p style="color: #6b5344; margin: 0; font-size: 14px;"><strong>Your message:</strong></p>
                <p style="color: #5c4a3d; margin: 10px 0 0 0; font-style: italic;">"${message}"</p>
              </div>
            ` : ''}
            <p style="color: #5c4a3d; line-height: 1.6;">
              If you need immediate assistance, you can reach us at:
            </p>
            <ul style="color: #5c4a3d;">
              <li>Email: kapelumad@gmail.com</li>
              <li>Phone: 0967 169 8475</li>
            </ul>
          </div>
          <div style="text-align: center; margin-top: 30px; color: #8b7355; font-size: 14px;">
            <p>Kape Lumad • Maramag, Bukidnon, Philippines</p>
            <p>Empowering Manobo farmers through sustainable coffee</p>
          </div>
        </div>
      `;

    const customerEmailResponse = await resend.emails.send({
      from: "Kape Lumad <onboarding@resend.dev>",
      to: [email],
      subject: customerSubject,
      html: customerHtml,
    });

    console.log("Customer email sent:", customerEmailResponse);

    // Send notification email to Kape Lumad
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #3d2314;">New ${type === "notify" ? "Notification Request" : "Product Inquiry"}</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Product:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${productName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
          </tr>
          ${message ? `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Message:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${message}</td>
          </tr>
          ` : ''}
        </table>
        <p style="margin-top: 20px; color: #666;">Reply directly to this email to respond to the customer.</p>
      </div>
    `;

    const adminEmailResponse = await resend.emails.send({
      from: "Kape Lumad Website <onboarding@resend.dev>",
      to: ["kapelumad@gmail.com"],
      reply_to: email,
      subject: `[${type === "notify" ? "Notify" : "Inquiry"}] ${productName} - ${name}`,
      html: adminHtml,
    });

    console.log("Admin email sent:", adminEmailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-product-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
