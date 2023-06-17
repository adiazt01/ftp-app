import Link from "next/link";
import React from "react";
import Button from "./Button";

function page() {

  return (
    <>
      <Link href={"/home"}>Home</Link>;<Link href={"/register"}>Register</Link>;
      <Link href={"/login"}>login</Link>;
      <Button />
    </>
  );
}

export default page;
