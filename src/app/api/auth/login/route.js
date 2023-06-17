import { connectDB } from "@/database/mongo";
import User from "@/models/user";
import Jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function POST(req, res) {
  await connectDB();
  console.log(cookies().get('user'))
  const { email, password } = await req.json();
  const userFound = await User.findOne({ email });
  console.log(userFound.password);
  console.log(password);
  console.log(res);

  if (userFound) {
    if (email === userFound.email && password === userFound.password) {
      const token = Jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000 + 60 * 60 * 24 * 30),
          email: email,
          
        },
        "secret", {
            algorithm: "HS256"
        }
      );

      cookies().set("user", token);
      return NextResponse.json({email:userFound.email})
    }
  }
}
