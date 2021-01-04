import React from 'react';
import { TiThMenuOutline } from 'react-icons/ti';
import './Header.scss';
import User from '../../model/User';

interface Props {
  userInfo: User;
  boardName: string;
  fn?: (name: string) => string; // 테스트로 사용 않는 함수 생성해봄
}

const Header: React.FC<Props> = ({ userInfo, boardName }: Props) => { // 타스 도입방식2
  
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
  );
};

export default Header;
