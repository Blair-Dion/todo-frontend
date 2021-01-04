import React, { useState, useEffect, MouseEvent, ChangeEvent } from 'react';
import { BiAddToQueue } from 'react-icons/bi';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import axios, { AxiosResponse } from 'axios';
import './List.scss';
import Card from '../Card/Card';
import Modal from '../../Common/Modal/Modal';
import CardModel, { EditCard } from '../../model/Card';
import ListModel from '../../model/List';
import User from '../../model/User';

interface Props {
  userInfo: User;
  listInfo: ListModel;
  setEditCardInfo: (editCard: EditCard) => void;
  setIsEditCardModal: (bool: boolean) => void;
}

const List: React.FC<Props> = ({ userInfo, listInfo, setEditCardInfo, setIsEditCardModal }: Props) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isDeleteCard, setIsDeleteCard] = useState<boolean>(false);
  const [deleteCardId, setDeleteCardId] = useState<number>(0);
  const [isCardArea, setIsCardArea] = useState<boolean>(false);
  const [newCardTitle, setNewCardTitle] = useState<string>('');
  const [newCardContents, setNewCardContents] = useState<string>('');
  const [cardList, setCardList] = useState<CardModel[]>(listInfo.cards);
  const handleClickCardInputAreaOpenBtn = (): void => setIsCardArea(!isCardArea);
  const handleClickCardAddBtn = async (e: MouseEvent<HTMLButtonElement>) => {
    
    axios.post('http://54.180.198.188/api/v1/board/1/list/' + listInfo.id + '/card', {
      'title': newCardTitle,
      'contents': newCardContents,
    })
      .then(function (response: AxiosResponse<any>) {
        const newCardInfo: CardModel = response.data.result;
        
        setCardList([newCardInfo, ...cardList]);
        setNewCardTitle('');
        setNewCardContents('');
        setIsCardArea(false);
      })
      .catch(function (error): void {
        console.log(error);
      });
    
    e.preventDefault();
  };
  const handleClickCardCancelBtn = (): void => {
    setNewCardTitle('');
    setNewCardContents('');
    setIsCardArea(false);
  };
  const handleCardInputInfoChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const tmpText = e.target.value;
    
    e.target.className === 'title' ? setNewCardTitle(tmpText) : setNewCardContents(tmpText);
  };
  
  useEffect(() => {
    cardList.map((card, index) => {
      if (card.id === deleteCardId) {
        const tmpArray = [...cardList];
        tmpArray.splice(index, 1);
        setCardList(tmpArray);
      }
    });
    
    setIsDeleteCard(false);
  }, [isDeleteCard]);
  
  
  return (
    <>
      <div className="list-section">
        <div className="list-wrapper">
          <div className="header-wrapper">
            <div className="left-wrapper">
              <div className="card-count-wrapper">
                <span className="card-count">{listInfo.cards.length}</span>
              </div>
              <span className="list-title">{listInfo.name}</span>
            </div>
            <div className="right-wrapper">
              <div className="btn card-add-btn" onClick={handleClickCardInputAreaOpenBtn}><BiAddToQueue/>
              </div>
              <div className="btn list-setting-btn"><HiOutlineDotsHorizontal/></div>
            </div>
          </div>
          {isCardArea ?
            <form className="card-create-area-wrapper">
              <div className="contents-wrapper">
                <input type="text" placeholder="Enter a note title" className="title"
                       value={newCardTitle} onChange={handleCardInputInfoChange}/>
                <textarea placeholder="Enter a note contents" className="contents"
                          value={newCardContents} onChange={handleCardInputInfoChange}/>
              </div>
              <div className="btn-wrapper">
                <button type="submit" className="btn add-btn" onClick={handleClickCardAddBtn}>Add
                </button>
                <div className="btn cancel-btn" onClick={handleClickCardCancelBtn}>Cancel</div>
              </div>
            </form>
            : null}
          
          <div className="card-list-wrapper">
            {cardList.map((card) => (
                <Card key={card.id} cardInfo={card} userInfo={userInfo} setIsModal={setIsModal}
                      setDeleteCardId={setDeleteCardId} setEditCardInfo={setEditCardInfo}
                      setIsEditCardModal={setIsEditCardModal}/>
              ),
            )}
          </div>
        </div>
      </div>
      {isModal ? <Modal message="선택한 카드를 삭제하시겠습니까?" setIsModal={setIsModal} setIsDeleteCard={setIsDeleteCard}
                        setDeleteCardId={setDeleteCardId}/> : null}
    </>
  );
};

export default List;
