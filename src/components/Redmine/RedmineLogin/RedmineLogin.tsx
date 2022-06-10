import { Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import RedmineLoginForm from './RedmineLoginFormContainer'

const RedmineLogin:React.FC<RedmineLoginPropsType> = (props) => {

    const [isModalVisible, setIsModalVisible] = useState<boolean>(props.isOpen)

    useEffect(() => {
        setIsModalVisible(props.isOpen)
    }, [props.isOpen]);

    const handleSubmit = (values: any, actions: any) => {
        console.log(values)
        console.log(actions)
    }

    const handleOk = () => {
        console.log('props.handleOk')
        props.handleOk()
    }

    return (
        <Modal
            title="Add New Schedul" 
            visible={isModalVisible} 
            onOk={handleOk} 
            onCancel={props.handleCancel}
        >
            <RedmineLoginForm />
        </Modal>
    )
}

export default  RedmineLogin

type RedmineLoginPropsType = {
    handleOk: ()=>void
    handleCancel: ()=>void
    isOpen: boolean
}