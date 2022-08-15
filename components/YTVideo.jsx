import React from "react";
import YouTube from "react-youtube";
import styles from "../styles/Home.module.css";

export default class YoutubeVideo extends React.Component {
    render() {
        const opts = {
            height: "390",
            width: "640",
            playerVars: {
                autoplay: 1,
            },
        };

        return (
            <div>
                <h3 className={styles.title3}>Tutorial Video</h3>
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
