import React from "react";

const Right = ({ preview }) => {
    return (
        <div className="right">
            {preview ? (
                <></>
            ) : (
                <>
                    <div className="cover" />
                    <div className="navigator">
                        <span>Inkigayo</span>
                        <img src="" alt="prev" />
                        <img src="" alt="next" />
                    </div>
                </>
            )}
            <div className="prev-winner">Last week winner: KARA - Pandora</div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <polygon fill="salmon" points="0, 100 100,0 0,0" />
            </svg>
        </div>
    );
};

export default Right;
