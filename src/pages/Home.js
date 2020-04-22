import React, { useState, useEffect } from "react";
import EventListener from "react-event-listener";
import { useSelector, useDispatch } from "react-redux";
import { setList } from "../redux/actions/album";
import { resize, shortcut, hoverEvent, hoverLeave, hoverTouch } from "../functions/home";
import Card from "../components/Home/Card";
import Player from "../components/Home/Player";
import Sidebar from "../components/Home/Sidebar.js";
import Tooltip from "../components/Home/Tooltip";

// const url = "http://127.0.0.1:9999/api/album";
// const urlImg = "http://127.0.0.1:9999/public/img/cover/";

const Home = () => {
	const list = useSelector((state) => state.album.list); // list all card
	const [playing, setPlaying] = useState(list[0] || { playing_id: null }); // selected card
	const [show, setShow] = useState(false); // state for hiden div
	const [ready, setReady] = useState(true); //
	const [width, setWidth] = useState(0); // width of card
	const [hover, setHover] = useState(list[0]); // on hover card info
	const [index, setIndex] = useState(0); // index of card
	const [height, setHeight] = useState(window.innerHeight); // height of card container
	const time = useSelector((state) => state.album.time); // time t	o refresh card
	const listReady = useSelector((state) => state.album.ready); // card fetching status
	const dispatch = useDispatch();

	useEffect(() => {
		// Check redux and time countdown
		if (list.length < 1) {
			dispatch(setList(30));
		} else if (!time) {
			dispatch(setList(30));
		} else if (time + 86400000 <= Date.now()) {
			dispatch(setList(30));
		} else if (time - 300000 >= Date.now()) {
			dispatch(setList(30));
		}
		resize(setHeight, setWidth);
	}, []);

	const cardList = [];
	list.forEach((x, i) => {
		cardList.push(
			<Card
				card={x}
				index={i}
				width={width}
				setReady={() => {
					setReady(false);
				}}
				setPlaying={() => {
					setPlaying(x);
				}}
				setShow={() => {
					setShow(true);
				}}
				setIndex={() => {
					setIndex(i);
				}}
			/>,
		);
	});

	return (
		<div id="home_con">
			<EventListener
				target="window"
				onResize={() => {
					resize(setHeight, setWidth);
				}}
				onMouseMove={(e) => {
					hoverEvent(e, hover, setHover);
				}}
			/>
			<EventListener
				target="document"
				onKeyDown={(e) => {
					shortcut(e, list, show, index, setShow, setReady, setPlaying, setIndex, () => {
						dispatch(setList(30));
					});
				}}
				onMouseLeave={() => {
					hoverLeave();
				}}
				onTouchStart={() => {
					hoverTouch();
				}}
			/>
			<div id="card_con">{cardList}</div>
			<div className={show ? "blank show" : "blank"} onClick={() => setShow(false)} />
			<Sidebar
				url={playing.itunes_url}
				show={show}
				height={height}
				ready={ready}
				setReady={() => {
					setReady(true);
				}}
			/>
			<Player
				event={() => dispatch(setList(30))}
				playing={playing}
				show={show}
				hide={() => {
					setShow(false);
				}}
				setShow={() => {
					setShow(show ? false : true);
				}}
			/>
			<Tooltip hover={hover} />
		</div>
	);
};

export default Home;
