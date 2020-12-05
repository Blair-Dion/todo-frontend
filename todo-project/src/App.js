import React, { useEffect, useState } from 'react';
import './App.scss';
import './reset.scss';
import Header from "./Common/Header/Header";
import List from "./Component/List/List";
import axios from 'axios';
import UserContext from './Context/UserContext';
import { connect } from 'react-redux';

const App = connect((state) => state)((props) => {
    const { userInfo, initialData, dispatch } = props;

    const [dataLoading, setDataLoading] = useState(false);

    const getUserInfo = async () => {
        await axios.get("http://54.180.198.188/api/mock/v1/user/1")
            .then(response => {
                props.dispatch({ type: "SET_USER_INFO", payload: response.data })
            })
    }

    const getInitialData = async () => {
        setDataLoading(true);
        try {
            const response = await axios.get("http://54.180.198.188/api/v1/board/1");
            props.dispatch({ type: "SET_INITIAL_DATA", payload: response.data })
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
            <UserContext.Provider value={userInfo}>
                <Header boardName={initialData.name} totalTodoCount={initialData.lists.reduce((x, y) => x + y.cards.length, 0)} />
                {dataLoading ? (<div>데이터를 가져오고 있습니다.</div>) : (
                    <div className="body-section">
                        {initialData.lists.map((list, index) => (
                            <List
                                key={list.id}
                                cards={list.cards}
                                addCard={(newCardInfo) =>
                                    dispatch({ type: "ADD_CARD", payload: { listId: index, newCardInfo } })}
                                deleteCard={(cardId) =>
                                    dispatch({ type: "DELETE_CARD", payload: { listId: index, cardId } })}
                            />
                        ))}
                    </div>
                )}
            </UserContext.Provider>
        </div>
    );
});

export default App;
