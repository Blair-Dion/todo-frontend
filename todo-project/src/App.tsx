import React, { useEffect, useState } from 'react';
import './App.scss';
import './reset.scss';
import Header from "./Common/Header/Header";
import List from "./Component/List/List";
import Menu from "./Common/Menu/Menu";
import axios from 'axios';
import EditCardModal from "./Component/EditCradArea/EditCardModal";

function App() {
  const [dataLoading, setDataLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({id: 0, profile_image_url: "", user_id: "", user_nickname: ""});
  const [boardData, setBoardData] = useState({id: 0, name: "", lists: []}); // 보드 전체 정보
  const [listArray, setListArray] = useState([]); // 리스트 배열
  const [editCardInfo, setEditCardInfo] = useState({listId: 0, cardId: 0, editedTitle: "", editedContents: ""})
  const [isEditCardModal, setIsEditCardModal] = useState(false);
  const [menuModal, setMenuModal] = useState({
    data: [],
    isOpen: false
  });
  
  
  const getUserInfo = async () => {
    await axios.get("http://54.180.198.188/api/mock/v1/user/1")
      .then(response => {
        setUserInfo(response.data);
      })
  }
  
  const getInitialData = async () => {
    setDataLoading(true);
    try {
      const response = await axios.get("http://54.180.198.188/api/v1/board/1");
      setBoardData(response.data);
      setListArray(response.data.lists);
    } catch (err) {
      console.log(err);
    }
    setDataLoading(false)
    
  }
  
  useEffect(() => {
    getUserInfo();
    getInitialData();
    
  }, [])
  
  
  return (
    <div className="App">
      {/*<Header userInfo={userInfo} boardName={boardData.name} setMenuModal={setMenuModal} menuModal={menuModal}/>*/}
      <Header userInfo={userInfo} boardName={boardData.name}/>
      {dataLoading ? (<div>데이터를 가져오고 있습니다.</div>) : (
        <div className="body-section">
          {listArray.map(list => (
            <List key={list.id} userInfo={userInfo} listInfo={list} setEditCardInfo={setEditCardInfo}
                  setIsEditCardModal={setIsEditCardModal}/>
          ))}
        </div>
      )}
      {isEditCardModal ? (<EditCardModal listArray={listArray} setListArray={setListArray} editCardInfo={editCardInfo}
                                         setEditCardInfo={setEditCardInfo}
                                         setIsEditCardModal={setIsEditCardModal}/>) : null}
      {/*{menuModal.isOpen ? (<Menu/>) : null}*/}
      <Menu/>
    </div>
  );
}

export default App;
