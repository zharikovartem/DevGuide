import { Button, Checkbox, Form, Input } from 'antd'
import React from 'react'
import { setCredentials } from '../../../Redux/redmineReducer'
import { useDispatch } from 'react-redux'
import UrlCopyed from '../../code/UrlCopyed'
import { RedmineLoginFormPropsType } from './RedmineLoginFormContainer'

const RedmineLoginForm: React.FC<RedmineLoginFormPropsType> = (props) => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
        props.setCredentials(values)
        props.checkCreds(values)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <UrlCopyed
                value="a.zharikov@smartdesign.by"
                descriptions=" - login"
            />
            <UrlCopyed
                value="gfhjkm4501"
                descriptions=" - password"
            />

            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Login"
                    name="login"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </>
    )
}

export default RedmineLoginForm