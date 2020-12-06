import React from 'react';
import './Menu.scss';
import {TiThMenuOutline} from 'react-icons/ti';
import {ImCancelCircle} from 'react-icons/im';
import {GrPowerReset} from 'react-icons/gr';
import {BiBell} from 'react-icons/bi';

const Menu = () => {

    return (
        <>
            <div className="menu-section">
                <div className="menu-wrapper">
                    <div className="current-board-info-wrapper">
                        <header className="header-wrapper">
                            <div className="title"><TiThMenuOutline/><span>Menu</span></div>
                            <div className="close-btn btn"><ImCancelCircle/></div>
                        </header>
                        <div className="body-wrapper">
                            <div className="board-name">todo-fronted</div>
                            <div className="board-desc">디온과 블레어의 첫번째 프로젝트 - 투두 리스트
                            </div>
                        </div>
                    </div>
                    <div className="activity-list-wrapper">
                        <header className="header-wrapper">
                            <div className="title"><BiBell/><span>Activity</span></div>
                            <div className="refresh-btn btn"><GrPowerReset/></div>
                        </header>
                        <div className="body-wrapper">
                            <div className="history-list">
                                <div className="item">
                                    <div className="left-wrapper">
                                        <img className="user-img"
                                             src="https://avatars0.githubusercontent.com/u/38597469?s=88&u=4dec19ec378bfb64c9b4a00c4d63e7805dac9c6c&v=4"/>
                                    </div>
                                    <div className="right-wrapper">
                                        <div className="message-wrapper">
                                            <span className="user-id">@Blair-0404</span>
                                            <span className="status">moved</span>
                                            <span className="target">콩이와 놀기</span>
                                            <span className="pos">from 리스트1 to 리스트2</span>
                                        </div>
                                        <div className="date">2020-12-06 19:42:17</div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="left-wrapper">
                                        <img className="user-img"
                                             src="https://avatars0.githubusercontent.com/u/38597469?s=88&u=4dec19ec378bfb64c9b4a00c4d63e7805dac9c6c&v=4"/>
                                    </div>
                                    <div className="right-wrapper">
                                        <div className="message-wrapper">
                                            <span className="user-id">@Blair-0404</span>
                                            <span className="status">moved</span>
                                            <span className="target">콩이와 놀기</span>
                                            <span className="pos">from 리스트1 to 리스트2</span>
                                        </div>
                                        <div className="date">2020-12-06 19:42:17</div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="left-wrapper">
                                        <img className="user-img"
                                             src="https://avatars0.githubusercontent.com/u/38597469?s=88&u=4dec19ec378bfb64c9b4a00c4d63e7805dac9c6c&v=4"/>
                                    </div>
                                    <div className="right-wrapper">
                                        <div className="message-wrapper">
                                            <span className="user-id">@Blair-0404</span>
                                            <span className="status">moved</span>
                                            <span className="target">콩이와 놀기</span>
                                            <span className="pos">from 리스트1 to 리스트2</span>
                                        </div>
                                        <div className="date">2020-12-06 19:42:17</div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="left-wrapper">
                                        <img className="user-img"
                                             src="https://avatars0.githubusercontent.com/u/38597469?s=88&u=4dec19ec378bfb64c9b4a00c4d63e7805dac9c6c&v=4"/>
                                    </div>
                                    <div className="right-wrapper">
                                        <div className="message-wrapper">
                                            <span className="user-id">@Blair-0404</span>
                                            <span className="status">moved</span>
                                            <span className="target">콩이와 놀기</span>
                                            <span className="pos">from 리스트1 to 리스트2</span>
                                        </div>
                                        <div className="date">2020-12-06 19:42:17</div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="left-wrapper">
                                        <img className="user-img"
                                             src="https://avatars0.githubusercontent.com/u/38597469?s=88&u=4dec19ec378bfb64c9b4a00c4d63e7805dac9c6c&v=4"/>
                                    </div>
                                    <div className="right-wrapper">
                                        <div className="message-wrapper">
                                            <span className="user-id">@Blair-0404</span>
                                            <span className="status">moved</span>
                                            <span className="target">콩이와 놀기</span>
                                            <span className="pos">from 리스트1 to 리스트2</span>
                                        </div>
                                        <div className="date">2020-12-06 19:42:17</div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="left-wrapper">
                                        <img className="user-img"
                                             src="https://avatars0.githubusercontent.com/u/38597469?s=88&u=4dec19ec378bfb64c9b4a00c4d63e7805dac9c6c&v=4"/>
                                    </div>
                                    <div className="right-wrapper">
                                        <div className="message-wrapper">
                                            <span className="user-id">@Blair-0404</span>
                                            <span className="status">moved</span>
                                            <span className="target">콩이와 놀기</span>
                                            <span className="pos">from 리스트1 to 리스트2</span>
                                        </div>
                                        <div className="date">2020-12-06 19:42:17</div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="left-wrapper">
                                        <img className="user-img"
                                             src="https://avatars0.githubusercontent.com/u/38597469?s=88&u=4dec19ec378bfb64c9b4a00c4d63e7805dac9c6c&v=4"/>
                                    </div>
                                    <div className="right-wrapper">
                                        <div className="message-wrapper">
                                            <span className="user-id">@Blair-0404</span>
                                            <span className="status">moved</span>
                                            <span className="target">콩이와 놀기</span>
                                            <span className="pos">from 리스트1 to 리스트2</span>
                                        </div>
                                        <div className="date">2020-12-06 19:42:17</div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="left-wrapper">
                                        <img className="user-img"
                                             src="https://avatars0.githubusercontent.com/u/38597469?s=88&u=4dec19ec378bfb64c9b4a00c4d63e7805dac9c6c&v=4"/>
                                    </div>
                                    <div className="right-wrapper">
                                        <div className="message-wrapper">
                                            <span className="user-id">@Blair-0404</span>
                                            <span className="status">moved</span>
                                            <span className="target">콩이와 놀기</span>
                                            <span className="pos">from 리스트1 to 리스트2</span>
                                        </div>
                                        <div className="date">2020-12-06 19:42:17</div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="left-wrapper">
                                        <img className="user-img"
                                             src="https://avatars0.githubusercontent.com/u/38597469?s=88&u=4dec19ec378bfb64c9b4a00c4d63e7805dac9c6c&v=4"/>
                                    </div>
                                    <div className="right-wrapper">
                                        <div className="message-wrapper">
                                            <span className="user-id">@Blair-0404</span>
                                            <span className="status">moved</span>
                                            <span className="target">콩이와 놀기</span>
                                            <span className="pos">from 리스트1 to 리스트2</span>
                                        </div>
                                        <div className="date">2020-12-06 19:42:17</div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="left-wrapper">
                                        <img className="user-img"
                                             src="https://avatars0.githubusercontent.com/u/38597469?s=88&u=4dec19ec378bfb64c9b4a00c4d63e7805dac9c6c&v=4"/>
                                    </div>
                                    <div className="right-wrapper">
                                        <div className="message-wrapper">
                                            <span className="user-id">@Blair-0404</span>
                                            <span className="status">moved</span>
                                            <span className="target">콩이와 놀기</span>
                                            <span className="pos">from 리스트1 to 리스트2</span>
                                        </div>
                                        <div className="date">2020-12-06 19:42:17</div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="left-wrapper">
                                        <img className="user-img"
                                             src="https://avatars0.githubusercontent.com/u/38597469?s=88&u=4dec19ec378bfb64c9b4a00c4d63e7805dac9c6c&v=4"/>
                                    </div>
                                    <div className="right-wrapper">
                                        <div className="message-wrapper">
                                            <span className="user-id">@Blair-0404</span>
                                            <span className="status">moved</span>
                                            <span className="target">콩이와 놀기</span>
                                            <span className="pos">from 리스트1 to 리스트2</span>
                                        </div>
                                        <div className="date">2020-12-06 19:42:17</div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="left-wrapper">
                                        <img className="user-img"
                                             src="https://avatars0.githubusercontent.com/u/38597469?s=88&u=4dec19ec378bfb64c9b4a00c4d63e7805dac9c6c&v=4"/>
                                    </div>
                                    <div className="right-wrapper">
                                        <div className="message-wrapper">
                                            <span className="user-id">@Blair-0404</span>
                                            <span className="status">moved</span>
                                            <span className="target">콩이와 놀기</span>
                                            <span className="pos">from 리스트1 to 리스트2</span>
                                        </div>
                                        <div className="date">2020-12-06 19:42:17</div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="left-wrapper">
                                        <img className="user-img"
                                             src="https://avatars0.githubusercontent.com/u/38597469?s=88&u=4dec19ec378bfb64c9b4a00c4d63e7805dac9c6c&v=4"/>
                                    </div>
                                    <div className="right-wrapper">
                                        <div className="message-wrapper">
                                            <span className="user-id">@Blair-0404</span>
                                            <span className="status">moved</span>
                                            <span className="target">콩이와 놀기</span>
                                            <span className="pos">from 리스트1 to 리스트2</span>
                                        </div>
                                        <div className="date">2020-12-06 19:42:17</div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="left-wrapper">
                                        <img className="user-img"
                                             src="https://avatars0.githubusercontent.com/u/38597469?s=88&u=4dec19ec378bfb64c9b4a00c4d63e7805dac9c6c&v=4"/>
                                    </div>
                                    <div className="right-wrapper">
                                        <div className="message-wrapper">
                                            <span className="user-id">@Blair-0404</span>
                                            <span className="status">moved</span>
                                            <span className="target">콩이와 놀기</span>
                                            <span className="pos">from 리스트1 to 리스트2</span>
                                        </div>
                                        <div className="date">2020-12-06 19:42:17</div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="left-wrapper">
                                        <img className="user-img"
                                             src="https://avatars0.githubusercontent.com/u/38597469?s=88&u=4dec19ec378bfb64c9b4a00c4d63e7805dac9c6c&v=4"/>
                                    </div>
                                    <div className="right-wrapper">
                                        <div className="message-wrapper">
                                            <span className="user-id">@Blair-0404</span>
                                            <span className="status">moved</span>
                                            <span className="target">콩이와 놀기</span>
                                            <span className="pos">from 리스트1 to 리스트2</span>
                                        </div>
                                        <div className="date">2020-12-06 19:42:17</div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="left-wrapper">
                                        <img className="user-img"
                                             src="https://avatars0.githubusercontent.com/u/38597469?s=88&u=4dec19ec378bfb64c9b4a00c4d63e7805dac9c6c&v=4"/>
                                    </div>
                                    <div className="right-wrapper">
                                        <div className="message-wrapper">
                                            <span className="user-id">@Blair-0404</span>
                                            <span className="status">moved</span>
                                            <span className="target">콩이와 놀기</span>
                                            <span className="pos">from 리스트1 to 리스트2</span>
                                        </div>
                                        <div className="date">2020-12-06 19:42:17</div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="left-wrapper">
                                        <img className="user-img"
                                             src="https://avatars0.githubusercontent.com/u/38597469?s=88&u=4dec19ec378bfb64c9b4a00c4d63e7805dac9c6c&v=4"/>
                                    </div>
                                    <div className="right-wrapper">
                                        <div className="message-wrapper">
                                            <span className="user-id">@Blair-0404</span>
                                            <span className="status">moved</span>
                                            <span className="target">콩이와 놀기</span>
                                            <span className="pos">from 리스트1 to 리스트2</span>
                                        </div>
                                        <div className="date">2020-12-06 19:42:17</div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="left-wrapper">
                                        <img className="user-img"
                                             src="https://avatars0.githubusercontent.com/u/38597469?s=88&u=4dec19ec378bfb64c9b4a00c4d63e7805dac9c6c&v=4"/>
                                    </div>
                                    <div className="right-wrapper">
                                        <div className="message-wrapper">
                                            <span className="user-id">@Blair-0404</span>
                                            <span className="status">moved</span>
                                            <span className="target">콩이와 놀기</span>
                                            <span className="pos">from 리스트1 to 리스트2</span>
                                        </div>
                                        <div className="date">2020-12-06 19:42:17</div>
                                    </div>
                                </div>
                            </div>
                            <footer className="bottom-wrapper">
                                <button className="more-btn-wrapper btn">
                                    <div className="btn-text">More</div>
                                </button>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;