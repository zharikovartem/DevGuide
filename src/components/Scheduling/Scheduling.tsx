import { Button, Col, List, Pagination, Popconfirm, Row } from 'antd'
import React, { useState } from 'react'
import TestComp from '../../typescript/TestComp'
import SchedulingForm from './SchedulingForm/SchedulingForm'
import SchedulingModal from './SchedulingForm/SchedulingModal'
import { createSchedulingTree } from './SchedulingHelper'
import SchedulingRow from './SchedulingRow/SchedulingRow'
import SchedulingRowWraper from './SchedulingRow/SchedulingRowWraper'

export type ScheduleType = {
    name: string
    id: string
    // index?: string
    parentIndex?: string
    childs?: ScheduleType[]
    pp?: string
}

const Scheduling: React.FC = (props: any) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    // const [data, setData] = useState<ScheduleType[]>(JSON.parse(localStorage.getItem('data')) ? JSON.parse(localStorage.getItem('data')) : [])
    const [data, setData] = useState<ScheduleType[]>(createSchedulingTree(JSON.parse(localStorage.getItem('data'))))

    createSchedulingTree(JSON.parse(localStorage.getItem('data')))

    const handleOpen = () => {

    }

    const handleOk = () => {

        isOpen && setIsOpen(false)
        const updatedData = createSchedulingTree(JSON.parse(localStorage.getItem('data')))

        // createSchedulingTree(updatedData)

        console.log(updatedData)
        setData(updatedData)
    }

    return (
        <>
            <Row className='my-3'>
                <Col span={12}><h3>Scheduling</h3></Col>
                <Col span={12}>
                    <Button className='mx-2' onClick={() => { setIsOpen(true) }} type='primary'>Add</Button>
                    <Popconfirm
                        title="Are you sure to delete all tasks?"
                        onConfirm={()=>{localStorage.removeItem('data')}}
                        onCancel={()=>{}}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button 
                            // className='mx-1' 
                            // onClick={()=>{localStorage.removeItem('data')}} 
                            danger
                        >
                            Clear
                        </Button>
                    </Popconfirm>
                </Col>
            </Row>

            <List
                size="small"
                // header={

                // }
                // footer={<Pagination defaultCurrent={1} total={50} />}
                bordered
                dataSource={data}
                renderItem={(item: ScheduleType, index: number) => <SchedulingRowWraper item={item} index={index} handleOk={handleOk} />}
            />

            <SchedulingModal
                handleCancel={() => { setIsOpen(false) }}
                handleOk={handleOk}
                isOpen={isOpen}
            />
        </>
    )
}

export default Scheduling