import { NextResponse } from "next/server";
import User from "src/models/user";
import { connectDB } from "src/database/mongo";

export async function POST(request) {
  await connectDB();
  const { name, email, password } = await request.json();
  const userFound = await User.findOne({ email });

  if (userFound)
    return NextResponse.json(
      {
        message: "El correo ya existe",
      },
      {
        status: 409,
      }
    );

  await User.create({ email, name, password });

  return NextResponse.json("Usuario Registrado");
}
