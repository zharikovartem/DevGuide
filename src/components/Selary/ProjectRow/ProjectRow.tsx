import { Col, InputNumber, List, Row } from 'antd'
import React from 'react'
import { ProjectType } from '../Selary'

type ProjectRowPropsType = {
    project: ProjectType
    index: number
    onTimeChange: (project: ProjectType, index: number) => void
}

const ProjectRow:React.FC<ProjectRowPropsType> = (props) => {

    const onChange = (value: number) => {
        props.onTimeChange({
            ...props.project,
            trackedTime: value
        }, props.index)
    }

    return (
        <List.Item>
            <Row className='w-100'>
                <Col className='w-100' span={12}>
                    {props.project.name}
                </Col>
                <Col span={6}>
                    <InputNumber onChange={onChange} className='w-100' />
                </Col>
                <Col span={6}>
                    {/* Actions */}
                </Col>
            </Row>
            
        </List.Item>
    )
}

export default  ProjectRow

