import React from "react";
import "../index.css";

export default function Hero() {
  return (
    <div className="hero">
      <img
        className="hero-image"
        src="https://picsum.photos/seed/picsum/600/400"
      />
      <h1 className="hero-title">Hero Title</h1>
      <p className="hero-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu
        venenatis quam. Vivamus euismod eleifend metus vitae pharetra. In vel
        tempor metus. Donec dapibus feugiat euismod. Vivamus interdum tellus
        dolor.
      </p>
    </div>
  );
}
