import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function Player({ accessToken, trackUri }) {
	const [play, setPlay] = useState(false);

	useEffect(() => setPlay(true), [trackUri]);

	if (!accessToken) return null;
	return (
		<SpotifyPlayer
			// token={accessToken}
			token="AQCba8LgdHhIeMmJ7Trc8-e77bn5pSurPAympxs8T2eQDCNzEbBdA1Nq51mAnDbZYnlA3ceFbqjxD5Hx0m2yExKD6XroQzhvAjSxFt1D0vnvKPCV3BhSvjG1eTEcfN1MCFIq1QBmV6MDBPY6stVr8x6vf3vCaC6K4SzesRBXnMoordZv1M2DZ8ywn6G_buMXGyJ4df5d63fH9d5qWe6bkPYXPZ1CH2GmqWojFHlkgV0kfVnUe8m6xM3SfpAcFOIYHDlEkQV0xdINqr_571nzc87nrFIT9_eCqegVnEherlT3EifAD3n8bQN2xwpdthPjH3iqj1QnoR3uM261K21dSUoAa9Gf6iWlX_VtJBZIkQ"
			showSaveIcon
			callback={(state) => {
				if (!state.isPlaying) setPlay(false);
			}}
			play={play}
			uris={trackUri ? [trackUri] : []}
		/>
	);
}
