import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const data = await req.json();

        // Here you would connect to a database or send an email using Resend / SendGrid / NodeMailer
        // Example: await db.contactSubmissions.create({ data });

        console.log("Contact API received:", data);

        return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 });
    }
}
