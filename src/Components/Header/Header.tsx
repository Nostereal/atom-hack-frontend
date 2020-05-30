import block from "bem-cn";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons/lib";
import Title from "antd/lib/typography/Title";
import './Header.scss'

const b = block('Header')

const Header: React.FC = () => {
    return (
        <div className='container'>
            <div className={b()}>
                <nav className={b('nav')}>
                    <ul className={b('menu')}>
                        <li className={b('menu-item')}>
                            <Button type='link' size='large'>
                                <Link to=''>Развелечения</Link>
                            </Button>
                        </li>
                        <li className={b('menu-item')}>
                            <Button type='link' size='large'>
                                <Link to=''>Кино</Link>
                            </Button>
                        </li>
                        <li className={b('menu-item')}>
                            <Button type='link' size='large'>
                                <Link to=''>Мероприятия</Link>
                            </Button>
                        </li>
                        <li className={b('menu-item')}>
                            <Button type='link' size='large'>
                                <Link to=''>Рестораны</Link>
                            </Button>
                        </li>
                    </ul>
                </nav>
                <div className={b('profile')}>
                    <Link to={'/profile'}>
                        <Title level={4}>
                            <UserOutlined style={{ fontSize: 26, marginRight: 16 }}/>
                            Профиль
                        </Title>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header