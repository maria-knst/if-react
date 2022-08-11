import React from 'react';
import arrow from "../../images/svg/Arrow.svg";
import './Arrow.css';

const Arrow = ({id}) => {
    return (
        <button className="places__arrow" id={id}>
            <img src={arrow} alt="->"/>
        </button>
    );
};

export default Arrow;