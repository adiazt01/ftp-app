"use client";

import axios from "axios";
import React from "react";

function Page() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newUser = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      axios.post("/api/auth/signup", newUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <p>Registo</p>
        <input type="text" placeholder="Nombre de usuario" name="name" />
        <input type="email" placeholder="Example@gmail.com" name="email" />
        <input type="password" placeholder="*****" name="password" />
        <button>Registrar</button>
      </form>
    </section>
  );
}

export default Page;
