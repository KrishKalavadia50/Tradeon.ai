import React from "react";

export default function Header() {
  return (
      <header class="header">
        <div class="container">
        <div class="gradient-background"></div>
          <div class="logo-container">
            <img src="/images/logo.svg" alt="Company Logo" class="logo" />
          </div>
          <button class="login">Login</button>
        </div>
      </header>
  );
}
