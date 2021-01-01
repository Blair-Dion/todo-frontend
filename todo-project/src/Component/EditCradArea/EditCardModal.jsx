import React from 'react';
import './EditCardModal.scss';
import { ImCancelCircle } from 'react-icons/im';
import axios from "axios";


const EditCardModal = ({listArray, setListArray, editCardInfo, setEditCardInfo, setIsEditCardModal}) => {
  const handleEditedCardSaveBtn = () => {
    axios.put(`http://54.180.198.188/api/v1/board/1/list/${editCardInfo.listId}/card/${editCardInfo.cardId}`, {
      "title": editCardInfo.editedTitle,
      "contents": editCardInfo.editedContents
    })
      .then(function (response) {
        setIsEditCardModal(false);
        const findListIdx = listArray.filter((list) => (list.id === editCardInfo.listId))[0].id;
        const tmpArray = [...listArray];
        
        tmpArray.map((list) => {
          if (list.id === findListIdx) {
            list.cards.map((card) => {
              if (card.id === response.data.result.id) {
                card.title = response.data.result.title;
                card.contents = response.data.result.contents;
              }
            })
          }
        })
        setListArray(tmpArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  const handleChangeCardEditArea = (e) => {
    if (e.target.className === "edit-title-text") {
      setEditCardInfo({
        ...editCardInfo,
        editedTitle: e.target.value
      })
    } else {
      setEditCardInfo({
        ...editCardInfo,
        editedContents: e.target.value
      })
    }
  }
  
  return (
    <div className="edit-card-modal-section">
      <div className="modal-section">
        <div className="modal-header-wrapper">
          <span className="title">Edit note</span>
          <div className="close-btn" onClick={() => {
            setIsEditCardModal(false)
          }}><ImCancelCircle/></div>
        </div>
        <div className="modal-body">
          <div className="body-wrapper">
            <div className="title-wrapper">
              <span className="title">Title</span>
              <input type="text" className="edit-title-text" value={editCardInfo.editedTitle}
                     onChange={handleChangeCardEditArea}/>
            </div>
            <div className="contents-wrapper">
              <span className="title">Contents</span>
              <div>
                            <textarea className="edit-contents-text"
                                      onChange={handleChangeCardEditArea}>{editCardInfo.editedContents}</textarea>
              </div>
            </div>
            <button onClick={handleEditedCardSaveBtn}>Save note</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditCardModal;