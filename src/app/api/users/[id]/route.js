import { NextResponse } from "next/server";
import User from "@/models/userModel";
import { dbConnect } from "@/helpers/lib/dbConnect";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    await dbConnect(); // connect to MongoDB

    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
