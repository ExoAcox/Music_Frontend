import React from "react";
import Iframe from "react-iframe";

const Sidebar = ({ url, show, ready, setReady, height }) => {
	return (
		<div id="music_sidebar" className={show ? "show" : ""} style={{ height: height }}>
			<div style={{ width: "100%", height: "100%", opacity: ready ? 1 : 0 }}>
				<Iframe id="iframe" loading="lazy" onLoad={() => setReady()} url={url} width="100%" height="100%" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" frameBorder={0} />
			</div>
		</div>
	);
};

export default Sidebar;
