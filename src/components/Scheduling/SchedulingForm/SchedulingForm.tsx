import { Modal } from 'antd'
import React, { useEffect, useState } from 'react'

const SchedulingForm: React.FC<SchedulingFormPropsType> = (props) => {

    const [isModalVisible, setIsModalVisible] = useState(false)

    useEffect(() => {
        setIsModalVisible(props.isOpen)
    }, [props.isOpen]);

    return (
        <Modal title="Add New Schedul" visible={isModalVisible} onOk={props.handleOk} onCancel={props.handleCancel}>
            need to add form!!!
        </Modal>
    )
}

export default SchedulingForm

type SchedulingFormPropsType = {
    handleOk: () => void
    handleCancel: () => void
    isOpen: boolean
}