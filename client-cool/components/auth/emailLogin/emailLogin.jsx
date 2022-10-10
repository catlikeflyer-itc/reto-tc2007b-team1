import React, { useState } from "react";
import ButtonLogic from "../buttonLogic/buttonLogic";

const EmailLogin = ({ providers, csrfToken }) => {
  const [email, setEmail] = useState("");

  return (
    <ButtonLogic
      provider={providers.email}
      bgColor="#22b05b"
      csrfToken={csrfToken}
      options={{ email }}
    >
      <div>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control w-100"
          placeholder="email@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </ButtonLogic>
  );
};

export default EmailLogin;
