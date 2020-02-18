import React, { useState, useEffect }from 'react';

const ModalSize = () =>{

  const [size, setSize] = useState(window.innerWidth)

  useEffect(()=>{
     window.addEventListener( 'resize', handleResize)
  });

  const handleResize =()=>{
      const size=window.innerWidth;
      if(size<550) return console.log('mobile');
      if(size>720) return console.log('desktop');

      setSize(window.innerWidth)
  };


  return(
      <div>
          <span>{size}</span>
      </div>
  )
};

export default ModalSize;