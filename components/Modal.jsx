import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ show, onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = show ? (
        <StyledModalOverlay onClick={handleCloseClick}>
            <StyledModal>
                <StyledModalHeader>
                    <StyledExit href="#" onClick={handleCloseClick}>
                        x
                    </StyledExit>
                </StyledModalHeader>
                <StyledModalBody>{children}</StyledModalBody>
            </StyledModal>
        </StyledModalOverlay>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }
};

const StyledExit = styled.a`
    color: black;
`;

const StyledModalBody = styled.div`
    padding-top: 10px;
    text-align: center;
    align-content: center;
`;

const StyledModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 25px;
    text-align: center;
`;

const StyledModal = styled.div`
    background: white;
    width: 500px;
    height: 340px;
    border-radius: 15px;
    padding: 15px;
    text-align: center;
`;
const StyledModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
`;

export default Modal;
