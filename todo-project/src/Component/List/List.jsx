import React from 'react';
import {BiAddToQueue} from 'react-icons/bi';
import {HiOutlineDotsHorizontal} from 'react-icons/hi';
import {BsCircleFill} from 'react-icons/bs';
import './List.scss';
import Card from "../Card/Card";

const List = () => {

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
                            <div className="card-add-btn"><BiAddToQueue/></div>
                            <div className="list-setting-btn"><HiOutlineDotsHorizontal/></div>
                        </div>
                    </div>

                    <div className="card-create-area-wrapper">
                        <div className="contents-wrapper">
                            <textarea placeholder="Enter a note"/>
                        </div>
                        <div className="btn-wrapper">
                            <div className="add-btn">Add</div>
                            <div className="cancel-btn">Cancel</div>
                        </div>
                    </div>

                    <div className="card-list-wrapper">
                        <Card title={"리액트 공부"} contents={"함수형 컴포넌트 작업하기"} writer={"Blair"}/>
                        <Card title={"타입스크립트 공부"} contents={"타입 작업하기"} writer={"Dion"}/>
                        <Card title={"자바 공부"} contents={"OOP 작업하기"} writer={"Bladi"}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default List;
