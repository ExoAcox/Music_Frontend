import React, { useState } from "react";

const divider = (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="divider">
        <polygon fill="salmon" points="0, 100 100,0 0,0" />
    </svg>
);
const prev = (event: () => void) => (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" onClick={event}>
        <polygon fill="white" points="100,0 100,100 0,50" />
    </svg>
);
const next = (event: () => void) => (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" onClick={event}>
        <polygon fill="white" points="0,0 0,100 100,50" />
    </svg>
);

const Right = ({ data, pos, setPos }: Props) => {
    const {
        artist: last_artist,
        title: last_title,
        itunes_url: last_itunes_url,
    } = data.last_winner;

    const prevEvent = (): void => {
        if (pos > 0) {
            setPos(pos - 1);
        }
    };
    const nextEvent = (): void => {
        if (pos < 5) {
            setPos(pos + 1);
        }
    };

    return (
        <div className="right">
            <div
                className="background"
                style={{ backgroundImage: `url(${data.cover_art})` }}
            />
            <img
                className="cover"
                src={data.cover_art}
                onClick={() => window.open(data.cover_art)}
            />
            <div className="navigator">
                <span>{data.program}</span>
                {prev(prevEvent)}
                {next(nextEvent)}
            </div>
            <div className="prev-winner">{`Last week winner: ${last_artist} - ${last_title}`}</div>
            {divider}
        </div>
    );
};

interface Props {
    data: Data;
    pos: number;
    setPos: (args: number) => void;
}

interface Data {
    date: string;
    artist: string;
    title: string;
    program: string;
    itunes_url: string;
    cover_art: string;
    last_winner: LastWinner;
}

interface LastWinner {
    artist: string;
    title: string;
    itunes_url: string;
}

export default Right;
