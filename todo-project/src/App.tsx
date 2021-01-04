import React, { useEffect, useState } from 'react';
import './App.scss';
import './reset.scss';
import Header from './Common/Header/Header';
import List from './Component/List/List';
import Menu from './Common/Menu/Menu';
import axios, { AxiosResponse } from 'axios';
import EditCardModal from './Component/EditCradArea/EditCardModal';
import Board from './model/Board';
import { EditCard } from './model/Card';
import User from './model/User';
import ListModel from './model/List';

const App: React.FC = () => {
  const [dataLoading, setDataLoading] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<User>({ id: 0, profile_image_url: '', user_id: '', user_nickname: '' });
  const [boardData, setBoardData] = useState<Board>({ id: 0, name: '', lists: [] }); // 보드 전체 정보
  const [listArray, setListArray] = useState<ListModel[]>([]);
  const [editCardInfo, setEditCardInfo] = useState<EditCard>({
    listId: 0,
    cardId: 0,
    editedTitle: '',
    editedContents: '',
  });
  const [isEditCardModal, setIsEditCardModal] = useState<boolean>(false);
  const [menuModal, setMenuModal] = useState({ // 타입부여하기
    data: [],
    isOpen: false,
  });
  
  
  const getUserInfo = async (): Promise<void> => {
    await axios.get('http://54.180.198.188/api/mock/v1/user/1')
      .then((response) => {
        setUserInfo(response.data);
      });
  };
  
  const getInitialData = async (): Promise<void> => {
    setDataLoading(true);
    try {
      const response = await axios.get('http://54.180.198.188/api/v1/board/1');
      setBoardData(response.data);
      setListArray(response.data.lists);
    } catch (err) {
      console.log(err);
    }
    setDataLoading(false);
    
  };
  
  useEffect(() => {
    getUserInfo();
    getInitialData();
    
  }, []);
  
  
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
      {/*<Menu/>*/}
    </div>
  );
};

export default App;
