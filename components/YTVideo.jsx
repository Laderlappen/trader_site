import React from "react";
import YouTube from "react-youtube";
import styles from "../styles/Home.module.css";

export default class YoutubeVideo extends React.Component {
    render() {
        const opts = {
            playerVars: {
                autoplay: 1,
            },
        };

        return (
            <div className="YT-video">
                <YouTube
                    videoId="Wf_wgdsMcpE"
                    opts={opts}
                    onReady={this._loading}
                    className="iframe-wrapper"
                />
            </div>
        );
    }

    _onReady(event) {
        event.target.pauseVideo();
    }
}
