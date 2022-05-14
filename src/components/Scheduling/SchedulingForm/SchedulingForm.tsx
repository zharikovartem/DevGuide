import { Button, Form, Input, Modal, TreeSelect } from 'antd'
import React, { useEffect, useState } from 'react'

const { TreeNode } = TreeSelect

const SchedulingForm: React.FC<SchedulingFormPropsType> = (props) => {

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [value, setValue] = useState(undefined);
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('data')))
    }, []);

    useEffect(() => {
        setIsModalVisible(props.isOpen)
    }, [props.isOpen]);

    const onSelectChange = (getedValue: any, labelList: React.ReactNode[]) => {
        setValue(getedValue)
    }

    const uuidv4 = () => {
        // @ts-ignore
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    const onFinish = (values: any) => {
        console.log('Success:', values);
        values.id = uuidv4()
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

    const generateTreeNodes = (data: any[], parentId?: string) => {
        const rowData = data.map((item) => {
            if (item.parentIndex === parentId) {
                return <TreeNode value={item.id} title={item.name}>
                    {generateTreeNodes(data, item.id)}
                </TreeNode>
            }
        })

        return rowData
    }

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
                >
                    {/* <Input /> */}
                    {data &&
                        <TreeSelect
                            showSearch
                            style={{ width: '100%' }}
                            value={value}
                            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                            placeholder="Please select parent task"
                            allowClear
                            treeDefaultExpandAll
                            onChange={onSelectChange}
                        >
                            {generateTreeNodes(data)}
                        </TreeSelect>
                    }
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