import React, { useState } from "react";
import styles from "../PresentationPokedex.module.css";

function PresentationNewsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.presentationNewsletter}>
      <input
        type="email"
        className="p-2 rounded-2"
        placeholder="Votre adresse email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="ms-3 p-2 rounded-5">
        S'inscrire
      </button>
    </form>
  );
}

export default PresentationNewsletter;
