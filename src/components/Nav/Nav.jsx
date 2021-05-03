import React from 'react';

function Nav() {
  return (
    //<!-- Navigation -->
    <nav className="bg-indigo-900 h-auto">
    <header className="flex flex-1 flex-wrap sm:items-stretch md:items-center justify-between bg-gray-800 mx-auto px-2 sm:px-2 lg:px-8  bg-gray-800 sm:py-4 lg:py-8 xl:py-4">
      <h1 className="flex flex-wrap  items-center text-white hover:text-indigo-600 md:text-base lg:text-2xl ">Kashay Arbelo</h1>
      <ul className="flex flex-wrap  sm:ml-6 bg-gray-800  justify-items-stretch">
          <li className="flex space-x-4 items-center">
              <a className="bg-gray-900 text-white hover:text-indigo-600 mx-4 px-3 py-2 rounded-md text-sm md:text-base lg:text-2xl font-medium items-center" href="#about-me">About Me</a>
          </li>
          <li className="flex space-x-4 items-center">
              <a className="bg-gray-900 text-white hover:text-indigo-600 mx-4 px-3 py-2 rounded-md text-sm md:text-base lg:text-2xl font-medium items-center"  href="#work">Work</a>
          </li>
          <li className="flex space-x-4 items-center">
              <a className="bg-gray-900 text-white hover:text-indigo-600 mx-4 px-3 py-2 rounded-md text-sm md:text-base lg:text-2xl font-medium items-center"  href="#contact-me">Contact Me</a>
          </li>
          <li className="flex space-x-4 items-center">
              <a className="bg-gray-900 text-white hover:text-indigo-600 mx-4 px-3 py-2 rounded-md text-sm md:text-base lg:text-2xl font-medium items-center"  href="https://www.linkedin.com/in/kashay-arbelo-11b83a1b9/">Resume</a>
          </li>
      </ul>
    
    </header>
    </nav>
    
    

  );
}

export default Nav;