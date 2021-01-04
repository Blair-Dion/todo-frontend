import React, { ChangeEvent } from 'react';
import './EditCardModal.scss';
import { ImCancelCircle } from 'react-icons/im';
import axios, { AxiosResponse } from 'axios';
import List from '../../model/List';
import Card, { EditCard } from '../../model/Card';

interface Props {
  listArray: List[];
  setListArray: (lists: List[]) => void;
  editCardInfo: EditCard;
  setEditCardInfo: (editCard: EditCard) => void;
  setIsEditCardModal: (bool: boolean) => void;
}

const EditCardModal:React.FC<Props> = ({ listArray, setListArray, editCardInfo, setEditCardInfo, setIsEditCardModal } : Props) => {
  const handleEditedCardSaveBtn = (): void => {
    axios.put(`http://54.180.198.188/api/v1/board/1/list/${editCardInfo.listId}/card/${editCardInfo.cardId}`, {
      'title': editCardInfo.editedTitle,
      'contents': editCardInfo.editedContents,
    })
      .then(function (response: AxiosResponse<any>) {
        setIsEditCardModal(false);
        const findListIdx: number = listArray.filter((list) => (list.id === editCardInfo.listId))[0].id;
        const tmpArray: List[] = [...listArray];
        
        tmpArray.map((list: List): void => {
          if (list.id === findListIdx) {
            list.cards.map((card: Card) => {
              if (card.id === response.data.result.id) {
                card.title = response.data.result.title;
                card.contents = response.data.result.contents;
              }
            });
          }
        });
        setListArray(tmpArray);
      })
      .catch(function (error): void {
        console.log(error);
      });
  };
  
  const handleChangeCardEditArea = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.className === 'edit-title-text') {
      setEditCardInfo({
        ...editCardInfo,
        editedTitle: e.target.value,
      });
    } else {
      setEditCardInfo({
        ...editCardInfo,
        editedContents: e.target.value,
      });
    }
  };
  
  return (
    <div className="edit-card-modal-section">
      <div className="modal-section">
        <div className="modal-header-wrapper">
          <span className="title">Edit note</span>
          <div className="close-btn" onClick={() => {
            setIsEditCardModal(false);
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
  );
};

export default EditCardModal;
