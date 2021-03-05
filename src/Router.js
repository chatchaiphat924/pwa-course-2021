<<<<<<< HEAD
import{BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';
import SupportList from './SupportList';

function Router( ) {

    return (
        <BrowserRouter>
         <Switch>
            <Route path="/support-list">
                <SupportList />
            </Route>
              <Route path="/friend-list">
                <FriendList />
              </Route>
             <Route path="/">
                <App />
             </Route>
         </Switch>
        </BrowserRouter>
    )
}

export default Router;
=======

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from "./App";
import FriendList from "./FriendList";
import EnterApp_3ofghost from "./EnterApp_3ofghost";
import Eye_LoadingScene from "./Eye_LodeingScene";
import Profiletar from "./Profile-Tar";
import LobbySetting from "./LobbySetting";

function Router(){
    
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/Profile_Tar">
                  <Profiletar />
                </Route>
                <Route path="/Eye_Scene">
                    <Eye_LoadingScene />
                </Route>
                <Route path="/friend-list">
                    <FriendList />
                </Route>
                <Route path="/App">
                    <App />
                </Route>
                <Route path="/LobbySetting">
                    <LobbySetting />
                </Route>
                <Route path="/">
                    <EnterApp_3ofghost />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;

>>>>>>> 0f650f1ab1e99e48f09e54b3e2805e1f27b83e86
