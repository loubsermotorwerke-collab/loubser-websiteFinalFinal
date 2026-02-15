import React from 'react';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">

      {/* Header */}
      <header className="bg-primary p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Loubser Motorwerke" className="h-12 mr-4" />
          <h1 className="text-2xl font-cursive tracking-wide">Loubser Motorwerke</h1>
        </div>
        <nav className="space-x-6 text-secondary">
          <h2 href="#Home" className="hover:text-white">Home</a>
    
          <h3 href="#Shop" className="hover:text-white">Shop</a>
    
          <h4 href="#Projects" className="hover:text-white">Projects</a>
    
          <h5 href="#About" className="hover:text-white">About</a>
    
          <h6 href="#Contact us" className="hover:text-white">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex flex-col justify-center items-center text-center p-24">
        <h2 className="text-5xl font-bold mb-4">Precision in Motion</h2>
        <p className="text-xl text-secondary max-w-xl">Engineering high-performance components with passion, precision, and reliability.</p>
      </section>

      {/* Shop Section */}
      <section id="shop" className="p-16 bg-primary">
        <h2 className="text-4xl mb-12 text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-black p-6 rounded-lg hover:scale-105 transition-transform duration-300">
            <img src="/product1.png" alt="Sway Bar Bushings" className="mb-4 rounded" />
            <h3 className="text-xl mb-2 font-semibold">Sway Bar Bushings</h3>
            <p className="text-secondary">$49.99</p>
          </div>
          <div className="bg-black p-6 rounded-lg hover:scale-105 transition-transform duration-300">
            <img src="/product2.png" alt="Engine Mounts" className="mb-4 rounded" />
            <h3 className="text-xl mb-2 font-semibold">Engine Mounts</h3>
            <p className="text-secondary">$79.99</p>
          </div>
          <div className="bg-black p-6 rounded-lg hover:scale-105 transition-transform duration-300">
            <img src="/product3.png" alt="Poly Bush Kit" className="mb-4 rounded" />
            <h3 className="text-xl mb-2 font-semibold">Poly Bush Kit</h3>
            <p className="text-secondary">$99.99</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-16">
        <h2 className="text-4xl mb-12 text-center">Projects</h2>
        <div className="flex justify-center">
          <img src="/e12_build.png" alt="E12 Project" className="rounded shadow-lg w-2/3" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-16 bg-primary text-center">
        <h2 className="text-4xl mb-6">About Us</h2>
        <p className="text-xl text-secondary max-w-2xl mx-auto">
          Loubser Motorwerke is dedicated to building premium performance components for enthusiasts who demand quality, precision, and passion in every detail.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-16">
        <h2 className="text-4xl mb-8 text-center">Contact</h2>
        <form className="max-w-xl mx-auto flex flex-col gap-4">
          <input type="text" placeholder="Name" className="p-3 rounded bg-black border border-secondary text-white"/>
          <input type="email" placeholder="Email" className="p-3 rounded bg-black border border-secondary text-white"/>
          <textarea placeholder="Message" rows="4" className="p-3 rounded bg-black border border-secondary text-white"></textarea>
          <button className="bg-secondary text-black p-3 rounded hover:bg-white hover:text-black transition-colors">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-primary p-6 text-center text-secondary">
        <p>&copy; 2026 Loubser Motorwerke. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
