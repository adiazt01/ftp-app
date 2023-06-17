import Jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(req, res) {
    const cookiesList = cookies(req, res).get('user');
    const jwt = cookiesList.get('user')

  if (await req.nextUrl.pathname.includes("/home")) {
    if (jwt === undefined) {
      return NextResponse.redirect(new URL("/", req.url));
    }


    const jwtVerify = Jwt.verify(jwt, secret, function (decoded, err) {
      return decoded // bar
    });

    console.log(jwtVerify)
  }

  return NextResponse.next();
}
