import { Button, Col, List, Pagination, Row } from 'antd'
import React, { useState } from 'react'
import TestComp from '../../typescript/TestComp'
import SchedulingForm from './SchedulingForm/SchedulingForm'
import SchedulingRow from './SchedulingRow/SchedulingRow'

export type ScheduleType = {
    name: string
}

const Scheduling: React.FC = (props: any) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [data, setData] = useState<ScheduleType[]>(JSON.parse(localStorage.getItem('data')))

    const handleOpen = () => {

    }

    const handleOk = () => {
        isOpen && setIsOpen(false)
        setData(JSON.parse(localStorage.getItem('data')))
    }

    return (
        <>
            <List
                size="small"
                header={
                    <Row>
                        <Col span={20}>Scheduling</Col>
                        <Col span={4}><Button onClick={() => { setIsOpen(true) }} type='primary'>Add</Button></Col>

                    </Row>
                }
                footer={<Pagination defaultCurrent={1} total={50} />}
                bordered
                dataSource={data}
                renderItem={(item: ScheduleType, index: number) => <SchedulingRow item={item} index={index} handleOk={handleOk}/>}
            // pagination={true}
            />

            <SchedulingForm
                handleCancel={() => { setIsOpen(false) }}
                handleOk={handleOk}
                isOpen={isOpen}
            />
        </>
    )
}

export default Scheduling