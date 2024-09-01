import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Portfolio</div>
        <div className="space-x-4">
          <a
            href="https://www.buymeacoffee.com/dhruvmehta" // Replace with your actual Buy Me a Coffee link
            target="_blank"
            rel="noopener noreferrer"
            className="white hover:text-yellow-300"
          >
            Buy Me a Coffee
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
