import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const ButtonLeft = ({ show, setShow, hide }) => {
	const time = useSelector((state) => state.album.time);
	const [countdown, setCountdown] = useState(0);

	// Count a timer based on localstorage
	const refreshTime = () => {
		setInterval(() => {
			const leftover = time + 86400000 - Date.now();
			const second = Math.floor((leftover % (1000 * 60)) / 1000);
			const minute = Math.floor((leftover % (1000 * 60 * 60)) / (1000 * 60));
			const hour = Math.floor((leftover % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			setCountdown((hour < 10 ? 0 : "") + hour + ":" + (minute < 10 ? 0 : "") + minute + ":" + (second < 10 ? 0 : "") + second);
		}, 1000);
	};

	useEffect(() => {
		refreshTime();
		return refreshTime;
	}, []);

	return (
		<div className="left">
			<span
				onClick={() => {
					hide();
					setShow(show ? false : true);
				}}>
				Menu
			</span>
			<div id="menu_button">
				<div className={show ? "blank show" : "blank"}></div>
				<div className={show ? "list show" : "list"}>
					<span>Next</span>
				</div>
				<div className={show ? "list show" : "list"}>
					<span>Feature</span>
				</div>
				<div className={show ? "list show" : "list"}>
					<span>Coming</span>
				</div>
				<div className={show ? "list show" : "list"}>
					<span>Soon</span>
				</div>
				<div className={show ? "list show" : "list"}>
					<span>{countdown}</span>
				</div>
			</div>
		</div>
	);
};

export default ButtonLeft;
