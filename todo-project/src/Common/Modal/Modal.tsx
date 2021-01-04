import React from 'react';
import './Modal.scss';

interface Props {
  message: string;
  setIsModal: (bool: boolean) => void;
  setIsDeleteCard: (bool: boolean) => void;
  setDeleteCardId: (id: number) => void;
}

const Modal: React.FC<Props> = ({ message, setIsModal, setIsDeleteCard, setDeleteCardId }: Props) => {
  const handleClickCancelBtn = (): void => {
    setIsModal(false);
    setIsDeleteCard(false);
    setDeleteCardId(0);
  };
  
  const handleClickConfirmBtn = (): void => {
    setIsModal(false);
    setIsDeleteCard(true);
  };
  
  return (
    <div className="modal-page">
      <div className="modal-section">
        <div className="message">{message}</div>
        <div className="btn-wrapper">
          <button className="btn cancel-btn" onClick={handleClickCancelBtn}>취소</button>
          <button className="btn confirm-btn" onClick={handleClickConfirmBtn}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
