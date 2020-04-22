import React, { useState } from "react";

const ButtonCenter = ({ show, hide }) => {
	const [hover, setHover] = useState(false);

	return (
		<div className="center" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
			<button
				onClick={() => {
					if (show) {
						hide();
						setTimeout(() => {
							event();
						}, 500);
					} else {
						event();
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
