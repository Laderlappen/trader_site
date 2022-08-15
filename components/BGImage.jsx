import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const Background = styled.div`
    z-index: 0;
    position: fixed;
    top: 0;
`;

function getWindowDimentions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

function BGImage() {
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    useEffect(() => {
        const { width, height } = getWindowDimentions();
        setWidth(width);
        setHeight(height);
    }, []);

    useEffect(() => {
        function handleResize() {
            const { width, height } = getWindowDimentions();
            setWidth(width);
            setHeight(height);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (width && height) {
        return (
            <Background>
                <Image src="/background.jpg" width={width} height={height} />
            </Background>
        );
    }

    return null;
}

export default BGImage;
