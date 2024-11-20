import { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-Z70LX1R9TK');
  }, []);

  return <div>My App</div>;
};

export default MyComponent;
