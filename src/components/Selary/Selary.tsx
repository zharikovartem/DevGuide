import { SaveOutlined } from '@ant-design/icons'
import { Button, Checkbox, Col, Divider, Form, Input, InputNumber, List, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import ProjectRow from './ProjectRow/ProjectRow'


export type ProjectType = {
    name: string
    trackedTime?: number
}

const Selary: React.FC<SelaryPropsType> = (props) => {

    const [projects, setProjects] = useState<ProjectType[]>([])
    const [totalTime, setTotalTime] = useState<number>(0)
    const [monthTime, setMonthTime] = useState<number>(0)

    useEffect(() => {
        let total = 0
        projects.forEach( item => total = total+item.trackedTime)
        setTotalTime(total)
    }, [projects]);

    const onFinish = (values: any) => {
        console.log('Success:', values);
        const projectsCopy = [...projects]
        projectsCopy.push({
            name: values.projectName,
            trackedTime: 0
        })
        setProjects(projectsCopy)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    }

    const onTimeChange  = (project: ProjectType, index: number) => {
        const projectsCopy = [...projects]
        projectsCopy[index] = project
        setProjects(projectsCopy)
        // setTotalTime(project.trackedTime)
    }

    const onMonthTimeChange = (value: number) => {
        setMonthTime(value)
    }

    return (
        <>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}

                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Row>
                    <Col span={18}>
                        <Form.Item
                            label="Имя Проекта"
                            name="projectName"
                        // rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            wrapperCol={{ offset: 6, span: 6 }}
                        >
                            <Button type="primary" htmlType="submit">
                                Add
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>

            <Divider orientation="left">
                Список проектов:
                <Button className='ml-3 mr-2' shape="round" type='primary' size='small'icon={<SaveOutlined />} />    
            </Divider>

            {/* {projects.map( item => {
                return (
                    <div>{item.name}</div>
                )
            })} */}

            <List
                size="small"
                header={<div>Часов в месяце: 
                    <InputNumber size='small' className='ml-3' onChange={(value: number) => {onMonthTimeChange(value)}}  />
                </div>}
                footer={<div>ИТОГО: {totalTime} ч. , Разница: {(totalTime-monthTime).toFixed(2)} ч. , $: {((totalTime-monthTime)*12).toFixed(2)}</div>}
                bordered
                dataSource={projects}
                renderItem={ 
                    (item, index) => {
                        return <ProjectRow 
                            project={item} 
                            index={index}
                            onTimeChange={onTimeChange}
                        />
                    }
                }
            />

        </>
    )
}

export default Selary

type SelaryPropsType = {

}