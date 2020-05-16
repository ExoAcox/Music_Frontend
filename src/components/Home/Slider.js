import React, { useState, useEffect } from "react";

const Slider = ({ pos }) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {}, []);

    const slide = [];
    [1].map((x) => {
        slide.push(<div className="slide"></div>);
    });

    return <div className="slide-con">{slide}</div>;
};

export default Slider;
