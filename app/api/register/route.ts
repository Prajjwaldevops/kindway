import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const data = await req.json();

        // Here you would connect to a database or send an email

        console.log("Registration API received:", data);

        return NextResponse.json({ success: true, message: "Registration successful" }, { status: 200 });
    } catch (error) {
        console.error("Registration API error:", error);
        return NextResponse.json({ success: false, message: "Registration failed" }, { status: 500 });
    }
}
