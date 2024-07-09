import React, { useEffect } from 'react';

const VismeEmbed = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/visme-embed.js';
    script.async = true;
    
    // Append script to the document body
    document.body.appendChild(script);

    // Clean up script when component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        className="visme_d"
        data-title="Untitled Project"
        data-url="n0enrdmm-untitled-project"
        data-w="336"
        data-full-h="false"
        data-h="192"
        data-domain="my"
      ></div>
    </div>
  );
};

export default VismeEmbed;
