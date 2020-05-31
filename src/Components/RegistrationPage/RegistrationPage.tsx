import './RegistrationPage.scss'
import React from 'react'
import block from "bem-cn";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import { PageHeader } from "antd";

const b = block('RegistrationPage')

const RegistrationPage: React.FC = () => {
    return (
        <div className={b()}>
            {/*<PageHeader title='Регистрация' style={} />*/}
            <RegistrationForm />
        </div>
    )
}

export default RegistrationPage