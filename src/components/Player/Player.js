/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { usePalette } from "react-palette";
import { isMobile } from "react-device-detect";
import ButtonCenter from "./ButtonCenter";
import ButtonLeft from "./ButtonLeft";
import ButtonRight from "./ButtonRight";

const urlImg = process.env.BASE_URL + "/public/img/cover/";

const Player = ({ playing, hide, show, setShow }) => {
	const color = usePalette(urlImg + playing?.album_id + ".jpg").data.darkVibrant; // cover art color

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
			{isMobile ? (
				""
			) : (
				<ButtonCenter
					show={show}
					hide={() => {
						hide();
					}}
				/>
			)}
			<ButtonRight playing={playing} setShow={setShow} />
		</div>
	);
};

export default Player;
