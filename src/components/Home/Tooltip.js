import React from "react";

const Tooltip = ({ hover }) => {
	return (
		<div id="hover_tooltip">
			<img src={hover.image} />
			<span>{hover.artist}</span>
			<span>{hover.album}</span>
			<span>
				{hover.count} {hover.count == 1 ? "track" : "tracks"}
			</span>
			<span>{hover.date}</span>
		</div>
	);
};

export default Tooltip;
