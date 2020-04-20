/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { usePalette } from "react-palette";
import ButtonCenter from "./ButtonCenter";
import ButtonLeft from "./ButtonLeft";
import ButtonRight from "./ButtonRight";

const urlImg = "http://127.0.0.1:9999/public/img/cover/";

const Player = ({ playing, hide, show, setShow }) => {
	const color = usePalette(urlImg + playing.album_id + ".jpg").data.darkVibrant; // cover art color

	return (
		<div id="music_player" style={{ backgroundColor: color }}>
			<ButtonLeft
				show={show}
				setShow={() => {
					setShow();
				}}
				hide={() => {
					hide();
				}}
			/>
			<ButtonCenter
				show={show}
				hide={() => {
					hide();
				}}
			/>
			<ButtonRight playing={playing} setShow={setShow} />
		</div>
	);
};

export default Player;
