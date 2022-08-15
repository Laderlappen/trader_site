import React from "react";
import YouTube from "react-youtube";
import styles from "../styles/Home.module.css";

export default class YoutubeVideo extends React.Component {
    render() {
        const opts = {
            height: "360",
            width: "540",
            playerVars: {
                autoplay: 1,
            },
        };

        return (
            <div>
                <YouTube
                    videoId="QH2-TGUlwu4"
                    opts={opts}
                    onReady={this._onReady}
                />
            </div>
        );
    }

    _onReady(event) {
        event.target.pauseVideo();
    }
}
