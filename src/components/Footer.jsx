import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', marginTop: 'auto', backgroundColor: '#333', color: '#fff' }}>
      &copy; {new Date().getFullYear()} Maison La Plage. All rights reserved.
    </footer>
  );
};

export default Footer;
