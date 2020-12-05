import React from 'react';
import './EditCardModal.scss';
import {ImCancelCircle} from 'react-icons/im';


const EditCardModal = ({editCardInfo, setIsEditCardModal}) => {
    const handleEditedCardSaveBtn = () => {
        // todo: 서버에 변경내용 저장 요청

        setIsEditCardModal(false)
    }

    return (
        <div className="edit-card-modal-section">
            <div className="modal-section">
                <div className="modal-header-wrapper">
                    <span className="title">Edit note</span>
                    <div className="close-btn" onClick={() => {setIsEditCardModal(false)}}><ImCancelCircle/></div>
                </div>
                <div className="modal-body">
                    <div className="body-wrapper">
                        <span className="title">Note</span>
                        <div>
                        <textarea className="edit-textarea">{editCardInfo.editedContents}</textarea>
                        </div>
                        <button onClick={handleEditedCardSaveBtn}>Save note</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCardModal;