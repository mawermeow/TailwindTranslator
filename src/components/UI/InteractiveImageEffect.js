import React, { useState } from 'react';
import Img from "./Img";

const InteractiveImageEffect = ({ topSrc, botSrc }) => {
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setCoordinates({ x, y });
    };


    const radius = 150;

    return (
        <div
            className="absolute inset-0 overflow-hidden z-10 pointer-events-auto"
            onMouseMove={handleMouseMove}
        >
            <Img
                src={topSrc}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div
                style={{
                    clipPath: `circle(${radius}px at ${coordinates.x}px ${coordinates.y}px)`,
                }}
                className="absolute inset-0 w-full h-full pointer-events-none"
            >
                <Img
                    src={botSrc}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default InteractiveImageEffect;
