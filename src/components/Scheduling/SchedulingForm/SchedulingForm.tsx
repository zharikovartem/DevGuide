import { Button, Form, Input, Modal } from 'antd'
import React, { useEffect, useState } from 'react'

const SchedulingForm: React.FC<SchedulingFormPropsType> = (props) => {

    const [isModalVisible, setIsModalVisible] = useState(false)

    useEffect(() => {
        setIsModalVisible(props.isOpen)
    }, [props.isOpen]);

    const onFinish = (values: any) => {
        console.log('Success:', values);
        let str = localStorage.getItem('data')
        let data: any[] = []
        console.log(str)
        if (str) {
            data = JSON.parse(str)
        }

        if (values.parentIndex === '') {
            delete values.parentIndex
        }

        data.push(values)

        console.log('localStorage.setItem', data)
        localStorage.setItem('data', JSON.stringify(data));
        props.handleOk()
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Modal title="Add New Schedul" visible={isModalVisible} onOk={props.handleOk} onCancel={props.handleCancel}>
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
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Parent"
                    name="parentIndex"
                    // rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default SchedulingForm

type SchedulingFormPropsType = {
    handleOk: () => void
    handleCancel: () => void
    isOpen: boolean
}