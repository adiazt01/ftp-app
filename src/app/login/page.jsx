"use client"

import axios from "axios";
import React from "react";

function page() {
  const loginHandle = (e) => {
    e.preventDefault();
    const loginData = new FormData(e.currentTarget);

    const loginUser = {
      email: loginData.get("email"),
      password: loginData.get("password"),
    };

    try {
      axios.post("/api/auth/login", loginUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <form onSubmit={loginHandle}>
        <p>Login</p>
        <input type="email" placeholder="Example@gmail.com" name="email" />
        <input type="password" placeholder="*****" name="password" />
        <button>Logear</button>
      </form>
    </section>
  );
}

export default page;
