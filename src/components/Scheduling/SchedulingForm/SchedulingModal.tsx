import { Modal } from 'antd'
import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
// import SchedulingCRUDForm from './SchedulingCRUDFormContainer'
import SchedulingCRUDForm from './SchedulingCRUDForm'

const SchedulingModal:React.FC<SchedulingModalPropsType> = (props) => {

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [value, setValue] = useState(undefined);
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        setIsModalVisible(props.isOpen)
    }, [props.isOpen])

    const handleSubmit = () => {

    }

    return (
        <Modal 
            title="Add New Schedul" 
            visible={isModalVisible} 
            onOk={props.handleOk} 
            onCancel={props.handleCancel}
        >
            <Formik
                initialValues={{
                    // name: 'test'
                }}
                onSubmit={handleSubmit}
                enableReinitialize={true}
            >
                {SchedulingCRUDForm}
            </Formik>
        </Modal>
    )
}

export default  SchedulingModal

type SchedulingModalPropsType = {
    handleOk: () => void
    handleCancel: () => void
    isOpen: boolean
}