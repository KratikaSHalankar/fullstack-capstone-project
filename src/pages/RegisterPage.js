import React, { useState } from "react";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3060/api/register", {
        method: "POST",   // ✅ REQUIRED
        headers: {
          "Content-Type": "application/json"   // ✅ REQUIRED
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });

      const data = await response.json();
      alert("User registered successfully!");
      console.log(data);

    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <div>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
