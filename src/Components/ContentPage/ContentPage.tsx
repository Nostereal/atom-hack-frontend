import React from "react";
import { Button, Result } from "antd";
import './ContentPage.scss'
import { Route, Switch } from "react-router-dom";
import ProfilePage from "../ProfilePage/ProfilePage";
import MainPage from "../MainPage/MainPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import LoginPage from "../LoginPage/LoginPage";

interface ContentProps {}

const ContentPage: React.FC<ContentProps> = () => {

    return (
        <>

            <div className='main-content'>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route exact path='/profile' component={ProfilePage}/>
                    <Route exact path='/passport/register' component={RegistrationPage} />
                    <Route exact path='/passport/login' component={LoginPage} />

                    <Route children={renderError}/>
                </Switch>
            </div>

        </>
    )
}

const renderError = () =>
    <Result
        status={'404'}
        title={'404'}
        subTitle={'Page not found'}
        extra={[
            <Button type={'primary'} href={'/'}>
                Go to the home page
            </Button>,
        ]}
    />

export default ContentPage