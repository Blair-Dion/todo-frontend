import React, { MouseEvent } from 'react';
import './Card.scss';
import { BsCardChecklist } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';
import CardInfo from '../../model/Card';
import { EditCard } from '../../model/Card';
import User from '../../model/User';

interface Props {
  cardInfo: CardInfo;
  userInfo: User;
  setIsModal: (bool: boolean) => void;
  setDeleteCardId: (id: number) => void;
  setEditCardInfo: (card: EditCard) => void;
  setIsEditCardModal: (bool: boolean) => void;
}

const Card: React.FC<Props> = ({
                                 cardInfo,
                                 userInfo,
                                 setIsModal,
                                 setDeleteCardId,
                                 setEditCardInfo,
                                 setIsEditCardModal,
                               }: Props) => {
  const handleClickCardDelBtn = (e: MouseEvent<HTMLInputElement>): void => {
    e.stopPropagation();
    setIsModal(true);
    setDeleteCardId(cardInfo.id);
  };
  
  const handleDBClickCard = (): void => {
    setIsEditCardModal(true);
    setEditCardInfo({
      listId: cardInfo.list_id,
      cardId: cardInfo.id,
      editedTitle: cardInfo.title,
      editedContents: cardInfo.contents,
    });
  };
  
  return (
    <div className="card-section" onDoubleClick={handleDBClickCard}>
      <div className="card-wrapper">
        <div className="card-header-wrapper">
          <div className="header-left-wrapper">
            <div className="icon"><BsCardChecklist/></div>
            <span className="card-title">{cardInfo.title}</span>
          </div>
          <div className="btn card-del-btn" onClick={handleClickCardDelBtn}><ImCancelCircle/></div>
        </div>
        <p className="contents-wrapper">{cardInfo.contents}</p>
        <span className="writer-wrapper">Added by <span>{cardInfo.user_id}</span>
                                        <img src={userInfo.profile_image_url} alt="image"/></span>
      </div>
    </div>
  );
};

export default Card;
