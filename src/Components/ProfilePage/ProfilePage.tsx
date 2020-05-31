import './ProfilePage.scss'
import React from "react";
import block from "bem-cn";
import { Avatar, Space } from "antd";
import { UserOutlined } from "@ant-design/icons/lib";
import Title from "antd/es/typography/Title";

const b = block('ProfilePage')

const ProfilePage: React.FC = () => {

    return (
        <div className='main-content' style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <span className={b('name')}>
                <Title level={3}>
                    <Space size='middle'>
                        <Avatar size={64} icon={<UserOutlined/>} />
                        Лучший никнейм человечества
                    </Space>
                </Title>
            </span>
            <div style={{ backgroundColor: '#91d5ff', minHeight: 720, minWidth: 1024 }} className={b()}>

            </div>
        </div>
    )
}

export default ProfilePage