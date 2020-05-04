import React, { useState } from "react";
import { setList } from "../../redux/actions/album";
import { useDispatch, useSelector } from "react-redux";

const ButtonCenter = ({ show, hide }) => {
	const [hover, setHover] = useState(false);
	const list = useSelector((state) => state.album.list);
	const dispatch = useDispatch();

	return (
		<div className="center" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
			<button
				onClick={() => {
					if (show) {
						hide();
						setTimeout(() => {
							dispatch(setList(30));
						}, 500);
					} else {
						dispatch(setList(30));
					}
				}}>
				Shuffle
			</button>
			{/* <div className="shortcut" style={{ display: hover ? "block" : "none" }}>
				<span>Shortcut ENTER key</span>
			</div> */}
		</div>
	);
};

export default ButtonCenter;
