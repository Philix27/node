import React from "react";

export default function App() {
  return (
    <div>
        <Navbar />
        <HeroComp />
        <div>
        <p>More contents</p>
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <div>
      <p>This is the navbar</p>
      <p>Content</p>
    </div>
  );
}

export default function HeroComp() {
  return (
    <div>
     <h2>Hero section</h2>
     <img src="./jane.png" alt="image" />
    </div>
  );
}
