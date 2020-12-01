import React, {useState} from 'react';
import {BiAddToQueue} from 'react-icons/bi';
import {HiOutlineDotsHorizontal} from 'react-icons/hi';
import './List.scss';
import Card from "../Card/Card";
import Modal from "../../Common/Modal/Modal";

const List = () => {
    const [isModal, setIsModal] = useState(false)
    const [isDelCard, setIsDelCard] = useState(false)

    const [isCardArea, setIsCardArea] = useState(false);
    const [newCardTitle, setNewCardTitle] = useState("");
    const [newCardContents, setNewCardContents] = useState("");
    const [cardList, setCardList] = useState([{
        cardId: 0,
        cardTitle: "리액트 공부",
        cardContents: "함수형 컴포넌트와 클래스형 컴포넌트의 차이"
    }, {
        cardId: 1,
        cardTitle: "자바스크립트 공부",
        cardContents: "프로토타입 체이닝에 대해서 설명해보자"
    }, {
        cardId: 2,
        cardTitle: "자바 공부",
        cardContents: "객체지향적으로 생각해보기 ="
    }]);

    const handleClickCardInputAreaOpenBtn = () => setIsCardArea(!isCardArea);
    const handleClickCardAddBtn = (e) => {
        // todo:서버에세 새 카드의 정보를 보내서 저장요청 후 응답받기?
        e.preventDefault();
        const newCardInfo = {
            cardId: 33,
            cardTitle: newCardTitle,
            cardContents: newCardContents
        }

        setCardList([newCardInfo, ...cardList]);

    }
    const handleCardInputInfoChange = (e) => {
        const tmpText = e.target.value;

        e.target.className === "title" ? setNewCardTitle(tmpText) : setNewCardContents(tmpText);
    }


    return (
        <>
            <div className="list-section">
                <div className="list-wrapper">
                    <div className="header-wrapper">
                        <div className="left-wrapper">
                            <div className="card-count-wrapper">
                                <span className="card-count">3</span>
                            </div>
                            <span className="list-title">Todo</span>
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
                                <div className="btn cancel-btn" onClick={() => setIsCardArea(!isCardArea)}>Cancel</div>
                            </div>
                        </form>
                        : null}

                    <div className="card-list-wrapper">
                        {cardList.map((card) => (
                                <Card key={card.cardId} cardId={card.cardId} title={card.cardTitle} contents={card.cardContents}
                                      writer={"Blair"} setIsModal={setIsModal}/>
                            )
                        )}
                    </div>
                </div>
            </div>
            {isModal ? <Modal message="선택한 카드를 삭베하시겠습니까?" setIsModal={setIsModal}/> : null}
        </>
    )
}

export default List;
