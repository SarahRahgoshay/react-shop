import React from 'react';

//gif
import spinner from '../../gif/Spinner.gif';

const Loader = () => {
    return (
        <div style= {{width: "100%" , textAlign: "center"}}>
           <img src= {spinner} alt= "loader" /> 
        </div>
    );
};

export default Loader;