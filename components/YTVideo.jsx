import React from "react";
import YouTube from "react-youtube";
import styles from "../styles/Home.module.css";

export default class YoutubeVideo extends React.Component {
    render() {
        const opts = {
            height: "640",
            width: "1024",
            playerVars: {
                autoplay: 1,
            },
        };

        return (
            <div>
                <YouTube
                    videoId="Wf_wgdsMcpE"
                    opts={opts}
                    onReady={this._loading}
                />
            </div>
        );
    }

    _onReady(event) {
        event.target.pauseVideo();
    }
}
