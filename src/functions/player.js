// dispatch(setList(30));
// dispatch(setList(30));

// Resize card based on screen width
export const resize = (setHeight, setWidth) => {
	setHeight(window.innerHeight - 80);
	const count = Math.floor(window.innerWidth / 150);
	const leftover = window.innerWidth - count * 150;

	if (leftover <= 50) {
		setWidth(150 + leftover / count);
	} else {
		setWidth(window.innerWidth / Math.ceil(window.innerWidth / 150));
	}
};

// Keyboard shortcut
export const shortcut = (e, list, show, index, setShow, setReady, setPlaying, setIndex, setList) => {
	if (e.code === "Space") {
		e.preventDefault();
		document.getElementById("hover_tooltip").style.display = "none";
		setShow(show ? false : true);
	} else if (e.code === "Enter") {
		e.preventDefault();
		if (show) {
			setShow(false);
			setTimeout(() => {
				setList();
			}, 500);
		} else {
			setList();
		}
	} else if (e.code === "ArrowRight") {
		if (index < list.length - 1) {
			setReady(false);
			setPlaying(list[index + 1]);
			setIndex(index + 1);
		}
	} else if (e.code === "ArrowLeft") {
		if (index > 0) {
			setReady(false);
			setPlaying(list[index - 1]);
			setIndex(index - 1);
		}
	}
};

// Show tooltip when hover on card
export const hoverEvent = (e, hover, setHover) => {
	const hoverTarget = document.getElementById("hover_tooltip");
	if (e.target.className === "cardImage") {
		hoverTarget.style.display = "block";

		// Dynamically adjust tooltip position based on cursor
		if (window.innerWidth - 243 > e.clientX) {
			hoverTarget.style.left = e.clientX + 23 + "px";
		} else {
			hoverTarget.style.left = e.clientX - 220 + "px";
		}
		if (window.innerHeight - (hoverTarget.offsetHeight + 150) > e.clientY) {
			hoverTarget.style.top = e.clientY + "px";
		} else if (e.clientY - hoverTarget.offsetHeight / 2 < 10) {
			hoverTarget.style.top = e.clientY + "px";
		} else {
			if (e.clientY - hoverTarget.offsetHeight < 120) {
				hoverTarget.style.top = e.clientY - hoverTarget.offsetHeight / 2 + "px";
			} else {
				hoverTarget.style.top = e.clientY - hoverTarget.offsetHeight + "px";
			}
		}
		if (e.target.getAttribute("data-id") !== hover.id) {
			// Get tooltip info from card
			setHover({
				id: e.target.getAttribute("data-id"),
				artist: e.target.getAttribute("data-artist"),
				album: e.target.getAttribute("data-album"),
				date: e.target.getAttribute("data-date"),
				count: e.target.getAttribute("data-count"),
				image: e.target.getAttribute("src"),
			});
		}
	} else {
		// Hide tooltip when not hover on card
		hoverTarget.style.display = "none";
	}
};

// Hide tooltip when not hover on card
export const hoverLeave = () => {
	document.getElementById("hover_tooltip").style.display = "none";
};

// Hide tooltip on touchscreen device
export const hoverTouch = (e, show) => {
	if (!show) {
		if (e.target.className === "cardImage") {
			document.getElementById("hover_tooltip").style.opacity = 0;
		}
	}
};
