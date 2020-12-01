import React from 'react';
import './Card.scss';
import {BsCardChecklist} from 'react-icons/bs';
import {ImCancelCircle} from 'react-icons/im';

const Card = ({cardId, title, contents, writer, setIsModal, setDeleteCardId}) => {
    const handleClickCardDelBtn = () => {
        setIsModal(true);
        setDeleteCardId(cardId);
    }

    return (
            <div className="card-section">
                <div className="card-wrapper">
                    <div className="card-header-wrapper">
                        <div className="header-left-wrapper">
                            <div className="icon"><BsCardChecklist/></div>
                            <span className="card-title">{title}</span>
                        </div>
                        <div className="btn card-del-btn" onClick={handleClickCardDelBtn}><ImCancelCircle/></div>
                    </div>
                    <p className="contents-wrapper">{contents}</p>
                    <span className="writer-wrapper">Added by <span>{writer}</span></span>
                </div>
            </div>
    )
}

export default Card;