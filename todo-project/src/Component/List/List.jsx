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

                    <div className="card-list-wrapper">
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default List;
