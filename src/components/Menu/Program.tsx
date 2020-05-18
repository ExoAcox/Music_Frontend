import React, { useState, useRef } from "react";

const Program = () => {
    const [hide, setHide] = useState(false);
    const [clone, setClone] = useState();
    const program = useRef<HTMLDivElement>();

    const selectProgram = (e: any): void => {
        e.persist();
        const rect = e.target.getBoundingClientRect();
        const index = e.target.dataset.index;
        const query = program.current.querySelectorAll(".card");
        query.forEach((x) => {
            if (x instanceof HTMLElement && x.dataset.index != index) {
                x.classList.add("hide");
            }
        });
        setTimeout(() => {
            console.log(e.target.parentElement);
            e.target.classList.add("zoom");
        }, 2200);
    };

    const card: JSX.Element[] = [];
    for (let x = 0; x < 6; x++) {
        card.push(
            <div className="card-con" key={x}>
                <div
                    className="card"
                    onClick={(e) => selectProgram(e)}
                    data-index={x}
                >
                    {x + 1}
                </div>
            </div>
        );
    }

    return (
        <div className="program" ref={program}>
            {card}
        </div>
    );
};

export default Program;
