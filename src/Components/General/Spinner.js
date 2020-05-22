import React from 'react';
import '../../css/Spinner.css'

const Spinner = () => (
    <div className='center'>
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
);

export default Spinner;
