import './RegistrationForm.scss'
import React from "react";
import { useHistory } from "react-router";
import { Button, Form, Input, InputNumber, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone, PlusOutlined } from "@ant-design/icons/lib";
import block from "bem-cn";
import Title from "antd/es/typography/Title";

const b = block('RegistrationForm')

const RegistrationForm: React.FC = () => {
    const history = useHistory();
    const [form] = Form.useForm();

    const onFinish = async (values: any) => {
        try {
            // await createStrategy({
            //     type: StrategyType.INSTANT,
            //     title: values.title,
            //     settings: {
            //         intervals: intervals.map(i => ({ ...i, key: undefined })),
            //         mcc_list: mссList,
            //         max_bonus: values.max,
            //         min_bonus: values.min,
            //     },
            // });
            // history.push('/strategies/create/success');
        } catch (error) {
            // history.push('/strategies/create/error');
        }
    };

    const formItemLayout = {
        labelCol: {
            xs: { span: 8 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 26 },
            sm: { span: 8 },
        },
    };

    const labelStyle = {
        fontSize: 16
    }
    return (
        <div className={b()}>
            <Form
                {...formItemLayout}
                onFinish={onFinish}
            >
                <Title level={2} style={{ marginBottom: 32 }}>Регистрация</Title>
                <Form.Item
                    name="title"
                    required
                    label={<span style={labelStyle}>Имя</span>}
                >
                    <Input placeholder={'Иван'} size='large'/>
                </Form.Item>
                <Form.Item name="username" required label={<span style={labelStyle}>Никнейм</span>}>
                    <Input placeholder={'xIVAN666x'} size='large'/>
                </Form.Item>
                <Form.Item name="email" required label={<span style={labelStyle}>Email</span>}>
                    <Input type='email' placeholder={'vanyok@tsar.rus'} size='large'/>
                </Form.Item>
                <Form.Item name="password" required label={<span style={labelStyle}>Пароль</span>}>
                    <Input.Password visibilityToggle placeholder='Введите пароль' size='large'/>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8 }}>
                    <Space size={14} style={{ display: "flex" }}>
                        <Button htmlType={'submit'} type="primary" size='large'>
                            Зарегистрироваться
                        </Button>
                        <Button type="dashed" size='large'>
                            Ещё кнопка <PlusOutlined/>
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    );
};

export default RegistrationForm
