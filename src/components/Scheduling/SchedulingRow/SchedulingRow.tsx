import { DeleteTwoTone, DownCircleTwoTone, RightCircleTwoTone } from '@ant-design/icons'
import { Button, Col, Collapse, Dropdown, List, Row } from 'antd'
import React, { useState } from 'react'
import { ScheduleType } from '../Scheduling'
import ActionsMenu from './ActionsMenu'

import useCollapse from 'react-collapsed'
import SchedulingList from '../SchedulingList/SchedulingList'

const { Panel } = Collapse

const SchedulingRow: React.FC<SchedulingRowPropsType> = (props) => {

    const [show, setShow] = useState<boolean>(true)

    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    const handleDelete = (index: string) => {
        console.log(index)
        let data: ScheduleType[] = JSON.parse(localStorage.getItem('data')) ? JSON.parse(localStorage.getItem('data')) : []
        console.log(data)
        data.splice(parseInt(index), 1)
        console.log('localStorage.setItem', data)
        localStorage.setItem('data', JSON.stringify(data));
        props.handleOk()
    }

    const onShow = () => {
        setShow(!show)
    }

    return (
        <>
            <List.Item className='w-100'>
                <Row className='w-100'>
                    <Col span={2}>
                        {props.item.childs ?
                            <Row >
                                <Col span={6}>
                                    <span className='pt-2'>{parseInt(props.item.pp) + 1}.</span>
                                </Col>
                                <Col span={6}>
                                    {props.item.childs &&
                                        <Button
                                            {...getToggleProps()}
                                            shape="circle"
                                            // @ts-ignore
                                            type='text'
                                            className='p-0 mr-1'
                                            style={{top: -8}}
                                        >
                                            {isExpanded ?   
                                                <DownCircleTwoTone 
                                                    // style={{ fontSize: 14 }} 
                                                /> 
                                                : 
                                                <RightCircleTwoTone />
                                            }
                                        </Button>
                                    }
                                </Col>
                            </Row>
                            :
                            <span className='pt-2'>{parseInt(props.item.pp) + 1}.</span>
                        }
                    </Col>
                    <Col className='ml-2' span={16}>
                        <span className='pt-2'>{props.item.name}</span>
                    </Col>
                    <Col span={4}>
                        <Row >
                            <Col span={6}>
                                <Button onClick={() => { handleDelete(props.item.id) }} shape="circle" icon={<DeleteTwoTone />} />
                            </Col>
                            <Col span={6}>
                                <Dropdown.Button 
                                    overlay={
                                        <ActionsMenu 
                                            onUpdate={() => {
                                                console.log('onAction!!!')
                                                props.handleOk() 
                                            }} 
                                            item={props.item} />
                                    } >
                                </Dropdown.Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </List.Item>

            {props.item.childs &&
                <section
                    // style={{ transition: "all .2s" }}
                    // hidden={show}
                    {...getCollapseProps()}
                >
                    {/* <ReactCSSTransitionGroup
                        transitionName="toggle"
                        transitionEnterTimeout={300}
                        transitionLeaveTimeout={300}
                    > */}

                    <SchedulingList
                        data={props.item.childs}
                        handleOk={props.handleOk}
                    />

                    {/* </ReactCSSTransitionGroup> */}

                </section>
            }

            {/* <div>
                <button {...getToggleProps()}>
                    {isExpanded ? 'Collapse' : 'Expand'}
                </button>
                <section {...getCollapseProps()}>Collapsed content 🙈</section>
            </div> */}

        </>
    )
}

export default SchedulingRow

export type SchedulingRowPropsType = {
    item: ScheduleType
    index: number
    handleOk: () => void
}
