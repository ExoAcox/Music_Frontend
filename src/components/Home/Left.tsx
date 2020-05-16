import React from "react";

const Left = () => {
    return (
        <div className="left">
            <div className="record-info">
                <div>1# Inkigayo | 3# Song wins</div>
                <div>9# Artist wins at Inkigayo</div>
                <div>34# Total Artist Wins</div>
            </div>
            <div className="basic-info">
                <div className="title">Title</div>
                <span className="artist">Artist - Album</span>
            </div>
            <div className="last-update">Last update: 12-12-2019</div>
            <span className="preview">Album Preview</span>
        </div>
    );
};

export default Left;
