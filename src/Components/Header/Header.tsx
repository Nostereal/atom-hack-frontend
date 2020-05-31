import block from "bem-cn";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons/lib";
import './Header.scss'
import Paragraph from "antd/es/typography/Paragraph";
import * as Cookies from 'es-cookie';


const b = block('Header')

interface NavButton {
    title: string
    path: string
}

const Header: React.FC = () => {
    const routeMatch = useRouteMatch('/profile')

    const navButtons: NavButton[] = [
        {
            title: 'Главная',
            path: '/'
        },
        {
            title: 'Развелечения',
            path: ''
        },
        {
            title: 'Кино',
            path: '/movies'
        },
        {
            title: 'Мероприятия',
            path: '/events'
        },
        {
            title: 'Рестораны',
            path: '/restaurants'
        },
    ]

    const isLoggedIn: boolean = !!Cookies.get('JWT')
    return (
        <div className='container'>
            <div className={b()}>
                <nav className={b('nav')}>
                    <ul className={b('menu')}>
                        {navButtons.map(({ title, path }) =>
                            <li key={title} className={b('menu-item')}>
                                <Button type='link' size='large'>
                                    <Link to={path}>{title}</Link>
                                </Button>
                            </li>
                        )}
                    </ul>
                </nav>
                <div
                    className={b('profile')}
                    style={{ visibility: routeMatch?.isExact ? "hidden" : "visible" }}
                >
                    <Link to={isLoggedIn ? '/profile' : '/passport/register'}>
                        <Paragraph strong style={{ fontSize: 16 }} >
                            <Avatar
                                icon={<UserOutlined />}
                                shape='circle'
                                size='default'
                                style={{ marginRight: 12 }}
                            />
                            Профиль
                        </Paragraph>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header