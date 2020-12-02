import React, {useEffect, useState} from 'react';
import './App.scss';
import './reset.scss';
import Header from "./Common/Header/Header";
import List from "./Component/List/List";
import axios from 'axios';

function App() {
    const [userInfo, setUserInfo] = useState({id: 0, profile_image_url: "", user_id: "", user_nickname: ""});
    const [initialData, setInitialData] = useState({id: 0, name: "", lists: []});
    const [dataLoading, setDataLoading] = useState(false);

    const getUserInfo = async () => {
        await axios.get("http://54.180.198.188/api/mock/v1/user/1")
            .then(response => {
                setUserInfo(response.data);
            })
    }

    const getInitialData = async () => {
        setDataLoading(true);
        try {
            const response = await axios.get("http://54.180.198.188/api/mock/v2/board/1");
            setInitialData(response.data);
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
            <Header userInfo={userInfo} boardName={initialData.name}/>
            {dataLoading ? (<div>데이터를 가져오고 있습니다.</div>) : (
                <div className="body-section">
                    {initialData.lists.map(list => (
                        <List key={list.id} userInfo={userInfo} listInfo={list}/>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
