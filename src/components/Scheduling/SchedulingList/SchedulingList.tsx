import { List } from 'antd'
import React from 'react'
import { ScheduleType } from '../Scheduling'
import SchedulingRowWraper from '../SchedulingRow/SchedulingRowWraper'

const SchedulingList: React.FC<SchedulingListPropsType> = (props) => {

    return (
        <List
            size="small"
            bordered
            dataSource={props.data}
            renderItem={(item: ScheduleType, index: number) => <SchedulingRowWraper item={item} index={index} handleOk={props.handleOk} />}
        />
    )
}

export default SchedulingList

type SchedulingListPropsType = {
    data: ScheduleType[]
    handleOk: () => void
}