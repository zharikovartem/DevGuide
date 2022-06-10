import { Button } from 'antd'
import React, { useState } from 'react'
import RedmineLogin from './RedmineLogin/RedmineLogin'

const Redmine:React.FC<RedminePropsType> = (props) => {

    const [isRedmineModalOpen, setIsRedmineModalOpen] = useState<boolean>(false)

    const handleCancel = () => {
        setIsRedmineModalOpen(false)
    }

    const handleOk = () => {
        setIsRedmineModalOpen(false)
    }

    return (
        <>
            <Button type='primary' onClick={()=>{setIsRedmineModalOpen(true)}}>
                Settings
            </Button>

            <RedmineLogin 
                handleCancel={handleCancel}
                handleOk={handleOk}
                isOpen={isRedmineModalOpen}
            />
        </>
    )
}

export default  Redmine

type RedminePropsType = {

}