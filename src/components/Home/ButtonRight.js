import React, { useState } from "react";

const urlImg = "http://127.0.0.1:9999/public/img/cover/";

const ButtonRight = ({ playing, setShow }) => {
	const [hover, setHover] = useState(false);

	return (
		<div
			className="right"
			onClick={() => {
				setShow();
			}}
			onMouseOver={() => {
				setHover(true);
			}}
			onMouseOut={() => setHover(false)}>
			<span>{playing.artist_name}</span>
			<span>{playing.album_name}</span>
			{playing ? <img src={urlImg + playing.album_id + ".jpg"} /> : <></>}
			<div className="shortcut" style={{ display: hover ? "block" : "none" }}>
				<span>Open Sidebar: SPACE key</span>
				<span>Prev Album: LEFT ARROW key</span>
				<span>Next Album: RIGHT ARROW key</span>
			</div>
		</div>
	);
};

export default ButtonRight;
