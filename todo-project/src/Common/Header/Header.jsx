import React, { useContext } from 'react';
import { TiThMenuOutline } from 'react-icons/ti';
import UserContext from '../../Context/UserContext';
import './Header.scss';

const Header = ({boardName}) => {
    const userInfo = useContext(UserContext)

    return (
        <>
            <div className="header-section">
                <div className="left-wrapper">
                    <img className="btn" src={userInfo.profile_image_url} alt="image"/>
                    <span className="username">{userInfo.user_nickname}</span>
                    <span className="board-title">{boardName}</span>
                </div>
                <div className="right-wrapper">
                    <div className="menu-wrapper">
                        <TiThMenuOutline className="btn"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;