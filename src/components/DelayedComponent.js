
import React, { useState, useEffect } from 'react';
import '../css/DelayedComponent.css';


function DelayedComponent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Change this to the number of milliseconds you want to wait

    return () => clearTimeout(timer); // This will clear the timer if the component is unmounted before the timer finishes
  }, []);

  return <div className={`delayed-component ${isVisible ? 'visible' : ''}`}>
    
    <div className="jebac">
    <h1 class="gradient">Wynajem Domków Letniskowych - Twoje Idealne Wakacje! </h1>

</div>
</div>
}

export default DelayedComponent;

