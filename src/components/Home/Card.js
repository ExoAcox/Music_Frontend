import React from "react";
import { isMobile } from "react-device-detect";

const urlImg = "http://127.0.0.1:9999/public/img/cover/";

const Card = ({ card, index, width, setReady, setPlaying, setShow, setIndex }) => {
	return (
		<div className="card" key={index} style={{ width: width, height: width }}>
			<img
				className="cardImage"
				src={urlImg + card.album_id + ".jpg"}
				onClick={() => {
					document.getElementById("hover_tooltip").style.display = "none";
					setReady();
					setPlaying();
					setShow();
					setIndex();
				}}
				style={{ filter: isMobile ? "none" : 0 }}
				data-artist={card.artist_name}
				data-album={card.album_name}
				data-date={card.release_date}
				data-count={card.track_count}
				data-id={card.album_id}
			/>
		</div>
	);
};

export default Card;
