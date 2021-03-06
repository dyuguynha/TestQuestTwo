import React from "react";

const Title = ({ name, title }) => {
  return (

    <div data-aos='fade-left' data-aos-duration='3000' className='top-space text-title'>

      <div className='col-10 mx-auto my-2 text-center text-title'>
        <h1>
          {title} <strong className='text-primary'>{name}</strong>
        </h1>
      </div>
      
    </div>
  );
};

export default Title;
