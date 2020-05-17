import React from "react";

const Left = ({ data, showMenu }: Props) => {
    const { win, win_all, artist_win, artist_win_all } = data.stats;

    return (
        <div className="left">
            <span className="menu" onClick={showMenu}>
                Menu
            </span>
            <div className="record-info">
                <div>{`${win}# Inkigayo | ${win_all}# Song wins`}</div>
                <div>{`${artist_win}# Artist wins at ${data.program}`}</div>
                <div>{`${artist_win_all}# Total Artist Wins`}</div>
            </div>
            <div className="basic-info">
                <div className="title">{data.title}</div>
                <span className="artist">{data.artist}</span>
            </div>
            <div className="last-update">{`Last updated: ${data.date}`}</div>
            <span className="preview">Album Preview</span>
        </div>
    );
};

interface Props {
    data: Data;
    showMenu: () => void;
}

interface Data {
    date: string;
    artist: string;
    title: string;
    program: string;
    itunes_url: string;
    stats: Stats;
}

interface Stats {
    win: number;
    win_all: number;
    artist_win: number;
    artist_win_all: number;
}

export default Left;
