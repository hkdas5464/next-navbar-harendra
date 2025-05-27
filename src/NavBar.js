// src/NavBar.js
import React from 'react';

export const NavBar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#111', color: '#fff' }}>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li><a href="/" style={{ color: '#fff' }}>Home</a></li>
        <li><a href="/about" style={{ color: '#fff' }}>About</a></li>
        <li><a href="/contact" style={{ color: '#fff' }}>Contact</a></li>
      </ul>
    </nav>
  );
};
