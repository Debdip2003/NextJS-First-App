// app/api/users/route.ts
import { NextResponse } from "next/server";
import User from "@/models/userModel";
import { dbConnect } from "@/helpers/lib/dbConnect";

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find({});
    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
