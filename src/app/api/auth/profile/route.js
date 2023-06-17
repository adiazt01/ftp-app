import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function GET() {
  const cookieUser = cookies().get("user").value;
  console.log(cookieUser);

  try {
    const userVerify = verify(cookieUser, "secret");
    return NextResponse.json({ email:userVerify.email });
  } catch (error) {
    return NextResponse.json("Error, cookie no obtenida")
  }

}
