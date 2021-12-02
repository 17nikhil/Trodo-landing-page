import React from 'react';
import Typed from 'typed.js';

function HeaderText() {
    /* This component creates the typrwriter effect */
    // Reference to store the DOM element containing the animation
	const el = React.useRef(null);
    // Reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
        strings: [
        'Track your to-dos',
        'Trodo'
      ],
        typeSpeed: 30,
        backSpeed: 40,
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Removes the typed text
      typed.current.destroy();
    }
  }, [])

  return (
    <div className="wrap">
      <div className="type-wrap">
        <span style={{ whiteSpace: 'pre' }} ref={el} />
      </div>
    </div>
  );
}

export default HeaderText;