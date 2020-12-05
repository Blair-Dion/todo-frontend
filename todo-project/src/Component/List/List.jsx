import React, { useState, useEffect, useContext } from 'react';
import { BiAddToQueue } from 'react-icons/bi';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import './List.scss';
import Card from "../Card/Card";
import Modal from "../../Common/Modal/Modal";
import UserContext from '../../Context/UserContext';
import { connect } from 'react-redux';

const List = connect(
    (state, props) => console.log({state, props}) || ({
        cards: state.initialData.lists.find((i) => i.id === props.id).cards
    }),
    (dispatch, props) => ({
        addCard: (newCardInfo) =>
            dispatch({ type: "ADD_CARD", payload: { listId: props.id, newCardInfo } }),
        deleteCard: (cardId) =>
            dispatch({ type: "DELETE_CARD", payload: { listId: props.id, cardId } }),
    }))
    (({ cards, addCard, deleteCard }) => {
        const userInfo = useContext(UserContext);

        const [isModal, setIsModal] = useState(false);
        const [isDeleteCard, setIsDeleteCard] = useState(false);
        const [deleteCardId, setDeleteCardId] = useState(0);
        const [isCardArea, setIsCardArea] = useState(false);
        const [newCardTitle, setNewCardTitle] = useState("");
        const [newCardContents, setNewCardContents] = useState("");

        const handleClickCardInputAreaOpenBtn = () => setIsCardArea(!isCardArea);
        const handleClickCardAddBtn = (e) => {
            // todo:서버에세 새 카드의 정보를 보내서 저장요청 후 응답받기?
            e.preventDefault();
            const newCardInfo = {
                id: cards[cards.length - 1].cardId++,
                title: newCardTitle,
                contents: newCardContents,
                user_id: userInfo.user_id
            }

            addCard(newCardInfo)
            setNewCardTitle("");
            setNewCardContents("");
            setIsCardArea(false);
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

        // useEffect(() => {
        //     cards.map((card, index) => {
        //         if (card.id === deleteCardId) {
        //             const tmpArray = [...cards];
        //             tmpArray.splice(index, 1);
        //             setCards(tmpArray);
        //         }
        //     })

        //     setIsDeleteCard(false);
        // }, [isDeleteCard])


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
                                <div className="btn card-add-btn" onClick={handleClickCardInputAreaOpenBtn}><BiAddToQueue />
                                </div>
                                <div className="btn list-setting-btn"><HiOutlineDotsHorizontal /></div>
                            </div>
                        </div>
                        {isCardArea ?
                            <form className="card-create-area-wrapper">
                                <div className="contents-wrapper">
                                    <input type="text" placeholder="Enter a note title" className="title"
                                        value={newCardTitle} onChange={handleCardInputInfoChange} />
                                    <textarea placeholder="Enter a note contents" className="contents"
                                        value={newCardContents} onChange={handleCardInputInfoChange} />
                                </div>
                                <div className="btn-wrapper">
                                    <button type="submit" className="btn add-btn" onClick={handleClickCardAddBtn}>Add
                                </button>
                                    <div className="btn cancel-btn" onClick={handleClickCardCancelBtn}>Cancel</div>
                                </div>
                            </form>
                            : null}

                        <div className="card-list-wrapper">
                            {cards.map((card) => (
                                <Card key={card.id} cardInfo={card} onDelete={() => deleteCard(card.id)} />
                            )
                            )}
                        </div>
                    </div>
                </div>
                {isModal ? <Modal message="선택한 카드를 삭제하시겠습니까?" setIsModal={setIsModal} setIsDeleteCard={setIsDeleteCard}
                    setDeleteCardId={setDeleteCardId} /> : null}
            </>
        )
    });

export default List;
