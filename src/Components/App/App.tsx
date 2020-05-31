import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../Header/Header";
import ContentPage from "../ContentPage/ContentPage";

const App: React.FC = () => {
    return (
        <div className='App'>
            <div className='leftImg' >
                <img id='left' src='https://cdn.discordapp.com/attachments/341253796724342786/716598861040189490/left.svg' />
            </div>
            <div className='root-content'>
                <Router>
                    <Header/>
                    <ContentPage />
                </Router>
            </div>
            <div className='rightImg'>
                <img id='right' src='https://cdn.discordapp.com/attachments/341253796724342786/716602320133292042/right.svg'/>
            </div>
        </div>
    );
}

export default App;
