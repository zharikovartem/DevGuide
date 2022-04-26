import { Button, Col, List, Pagination, Row } from 'antd'
import React, { useState } from 'react'
import TestComp from '../../typescript/TestComp'
import SchedulingForm from './SchedulingForm/SchedulingForm'

export type ScheduleType ={
    name: string
}

const Scheduling: React.FC = (props: any) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [data, setData] = useState<ScheduleType[]>()

    const handleOpen = () => {
        
    }

    return (
        <>
            <List
                size="small"
                header={
                    <Row>
                        <Col span={20}>Scheduling</Col>
                        <Col span={4}><Button onClick={()=>{setIsOpen(true)}} type='primary'>Add</Button></Col>

                    </Row>
                }
                footer={<Pagination defaultCurrent={1} total={50} />}
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item.name}</List.Item>}
            />

            <SchedulingForm
                handleCancel={() => {setIsOpen(false)}}
                handleOk={() => {setIsOpen(false)}}
                isOpen={isOpen}
            />
        </>
    )
}

export default Scheduling