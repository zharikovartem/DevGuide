import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const ComponentNameForm = (props) => {

    const onFinish = (values) => {
        // switch
        props.onFinish(values)
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={props.onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Название компонента"
                name="componentName"
                rules={[{ required: true, message: 'Введите название компонента!' }]}
            >
                <Input />
            </Form.Item>

            {/* <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item> */}

            <Form.Item {...tailLayout} name="isApi" valuePropName="checked">
                <Checkbox>Подключить <b>api.js</b></Checkbox>
            </Form.Item>
            <Form.Item {...tailLayout} name="isReducer" valuePropName="checked">
                <Checkbox>Создать <b>testReducer.js</b></Checkbox>
            </Form.Item>
            <Form.Item {...tailLayout} name="isCRUD" valuePropName="checked">
                <Checkbox>Добавить CRUD</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default ComponentNameForm;