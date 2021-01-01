import React, {useState, useEffect} from 'react';
import {BiAddToQueue} from 'react-icons/bi';
import {HiOutlineDotsHorizontal} from 'react-icons/hi';
import './List.scss';
import Card from "../Card/Card";
import Modal from "../../Common/Modal/Modal";
import axios from "axios";

const List = ({userInfo, listInfo, setEditCardInfo, setIsEditCardModal}) => {
  const [isModal, setIsModal] = useState(false);
  const [isDeleteCard, setIsDeleteCard] = useState(false);
  const [deleteCardId, setDeleteCardId] = useState(0);
  const [isCardArea, setIsCardArea] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState("");
  const [newCardContents, setNewCardContents] = useState("");
  
  
  const [cardList, setCardList] = useState(listInfo.cards);
  
  const handleClickCardInputAreaOpenBtn = () => setIsCardArea(!isCardArea);
  const handleClickCardAddBtn = async (e) => {
    
    axios.post("http://54.180.198.188/api/v1/board/1/list/" + listInfo.id + "/card", {
      "title": newCardTitle,
      "contents": newCardContents
    })
      .then(function (response) {
        const newCardInfo = response.data.result
        
        setCardList([newCardInfo, ...cardList]);
        setNewCardTitle("");
        setNewCardContents("");
        setIsCardArea(false);
      })
      .catch(function (error) {
        console.log(error);
      });
    
    e.preventDefault();
  }
  const handleClickCardCancelBtn = () => {
    setNewCardTitle("");
    setNewCardContents("");
    setIsCardArea(false)
  }
  const handleCardInputInfoChange = (e) => {
    const tmpText = e.target.value;
    
    e.target.className === "title" ? setNewCardTitle(tmpText) : setNewCardContents(tmpText);
  }
  
  useEffect(() => {
    cardList.map((card, index) => {
      if (card.id === deleteCardId) {
        const tmpArray = [...cardList];
        tmpArray.splice(index, 1);
        setCardList(tmpArray);
      }
    })
    
    setIsDeleteCard(false);
  }, [isDeleteCard])
  
  
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
              )
            )}
          </div>
        </div>
      </div>
      {isModal ? <Modal message="선택한 카드를 삭제하시겠습니까?" setIsModal={setIsModal} setIsDeleteCard={setIsDeleteCard}
                        setDeleteCardId={setDeleteCardId}/> : null}
    </>
  )
}

export default List;
