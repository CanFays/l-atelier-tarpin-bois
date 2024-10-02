import React from 'react';

const Map = () => {
  return (
    <div style={{ width: '100%', height: '450px', marginBottom: '20px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.738048776718!2d5.488512315748217!3d43.29705227913421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c7229a2d33c5%3A0x6a9b6c74285c20db!2s3%20Boulevard%20Adrien%20Rousseau%2C%2013011%20Marseille!5e0!3m2!1sfr!2sfr!4v1696181962510!5m2!1sfr!2sfr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="3 Bd Adrien Rousseau, 13011 Marseille"
      ></iframe>
    </div>
  );
};

export default Map;
