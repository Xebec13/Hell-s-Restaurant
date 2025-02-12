import React from 'react'
import './Divider.css'


const Divider = ({imageSrc}) => (
    <div className="divider-container">
        <img src={imageSrc} alt="divider-image" />
    </div>
)

export default Divider