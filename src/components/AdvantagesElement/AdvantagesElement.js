import React from 'react';

import './AdvantagesElement.scss'

const AdvantagesElement = ({ icon, title }) => {
    return (
        <div className="element col-3">
            <svg className="image">
                <use
                    href={icon}
                ></use>
            </svg>
            <p className="text">{title}</p>
        </div>
    );
};

export default AdvantagesElement;