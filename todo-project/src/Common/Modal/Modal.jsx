import React from 'react';
import './Modal.scss';


const Modal = ({message, setIsModal}) => {
    const handleClickCancelBtn = () => {
        setIsModal(false);

    }

    const handleClickConfirmBtn = () => {
        setIsModal(false);
    }

    return (
        <>
            <div className="modal-page">
                <div className="modal-section">
                    <div className="message">{message}</div>
                    <div className="btn-wrapper">
                        <button className="btn cancel-btn" onClick={handleClickCancelBtn}>취소</button>
                        <button className="btn confirm-btn" onClick={handleClickConfirmBtn}>확인</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;