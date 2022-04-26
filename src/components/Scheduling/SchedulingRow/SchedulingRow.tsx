import { DeleteTwoTone } from '@ant-design/icons'
import { Button, Col, Dropdown, List, Row } from 'antd'
import React from 'react'
import { ScheduleType } from '../Scheduling'
import ActionsMenu from './ActionsMenu'

const SchedulingRow: React.FC<SchedulingRowPropsType> = (props) => {

    const handleDelete = (index: number) => {
        console.log(index)
        let data: ScheduleType[] = JSON.parse(localStorage.getItem('data')) ? JSON.parse(localStorage.getItem('data')) : []
        data.splice(index, 1)
        localStorage.setItem('data', JSON.stringify(data));
        props.handleOk()
    }

    return (
        <List.Item>
            <Row className='w-100'>
                <Col span={2}>{props.index+1}.</Col>
                <Col span={16}>{props.item.name}</Col>
                <Col span={4}>
                    <Row >
                        <Col span={6}>
                            <Button onClick={() => { handleDelete(props.index) }} shape="circle" icon={<DeleteTwoTone />} />
                        </Col>
                        <Col span={6}>
                            <Dropdown.Button overlay={<ActionsMenu />} ></Dropdown.Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </List.Item>
    )
}

export default SchedulingRow

type SchedulingRowPropsType = {
    item: ScheduleType
    index: number
    handleOk: () => void
}