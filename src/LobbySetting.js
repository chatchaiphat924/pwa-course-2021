﻿import {Link} from "react-router-dom";
import './LobbySetting.css';
import ChatBox from "./Chatbox";


function LobbySetting() {

    return (
        <ChatBox>
            <div className="button-bar">
                <table>
                    <tr>
                        <th>
                            <div className="Private">
                                <h1>Private Room</h1>
                            </div>
                        </th>
                        <th>

                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round">
                    </span>
                            </label>
                        </th>
                    </tr>

                    <tr>
                        <th>
                            <div className="AllowHint">
                                <h1>AllowHint</h1>
                            </div>
                        </th>
                        <th><label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round">
                    </span>
                        </label></th>
                    </tr>

                    <tr>
                        <th>
                            <div className="PlayerName">
                                <h1>Show player's name</h1>
                            </div>
                        </th>
                        <th><label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round">
                    </span>
                        </label></th>
                    </tr>

                    <tr>
                        <th>
                            <div className="AllowJoin">
                                <h1>Allow to join</h1>
                            </div>
                        </th>
                        <th><label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round">
                    </span>
                        </label></th>
                    </tr>
                </table>
            </div>
        </ChatBox>
    );
}

export default LobbySetting;