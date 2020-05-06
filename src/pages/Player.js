import React, { useState, useEffect } from "react";
import EventListener from "react-event-listener";
import { useSelector, useDispatch } from "react-redux";
import { setList } from "../redux/actions/album";
import { resize, shortcut, hoverEvent, hoverLeave } from "../functions/player";
import Card from "../components/Player/Card";
import Player from "../components/Player/Player";
import Sidebar from "../components/Player/Sidebar";
import Tooltip from "../components/Player/Tooltip";

// const url = "http://127.0.0.1:9999/api/album";
// const urlImg = "http://127.0.0.1:9999/public/img/cover/";

const Home = () => {
	const list = useSelector((state) => state.album.list); // list all card
	const [playing, setPlaying] = useState({}); // selected card
	const [show, setShow] = useState(false); // state for hiden div
	const [ready, setReady] = useState(true); //
	const [width, setWidth] = useState(0); // width of card
	const [hover, setHover] = useState(list[0]); // on hover card info
	const [index, setIndex] = useState(0); // index of card
	const [height, setHeight] = useState(window.innerHeight); // height of card container
	const time = useSelector((state) => state.album.time); // time to refresh card
	// const listReady = useSelector((state) => state.album.ready); // card fetching status
	const dispatch = useDispatch();

	useEffect(() => {
		// Check redux and time countdown
		if (list.length < 1) {
			dispatch(setList(50));
		} else if (!time) {
			dispatch(setList(50));
		} else if (time + 86400000 <= Date.now()) {
			dispatch(setList(50));
		} else if (time - 300000 >= Date.now()) {
			dispatch(setList(50));
		}
		resize(setHeight, setWidth);
	}, []);

	useEffect(() => {
		setPlaying(list[0]);
		setHover(list[0]);
	}, [list]);

	const cardList = [];
	list.forEach((x, i) => {
		cardList.push(
			<Card
				card={x}
				index={i}
				key={i}
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
						dispatch(setList(50));
					});
				}}
				onMouseLeave={() => {
					hoverLeave();
				}}
			/>
			<div id="card_con">{cardList}</div>
			<div className={show ? "blank show" : "blank"} onClick={() => setShow(false)} />
			<Sidebar
				url={playing?.itunes_url}
				show={show}
				height={height}
				ready={ready}
				setReady={() => {
					setReady(true);
				}}
			/>
			<Player
				event={() => dispatch(setList(50))}
				playing={playing}
				show={show}
				hide={() => {
					setShow(false);
				}}
				setShow={() => {
					setShow(show ? false : true);
				}}
			/>
			<Tooltip hover={hover || false} />
		</div>
	);
};

export default Home;
