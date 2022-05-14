import { Table } from 'antd'
import React, { useState } from 'react'

const DataList: React.FC<DataListPropsType> = (props) => {

    const [data, setData] = useState<any>(JSON.parse(localStorage.getItem('data')))

    console.log(props)

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        // {
        //     title: 'Id',
        //     dataIndex: 'id',
        //     key: 'id',
        //     render: text => <a>{text}</a>,
        // },
        {
            title: 'Parent',
            dataIndex: 'parentIndex',
            key: 'parent',
            // render: text => <a>{text}</a>,
            render: (text: any) => {
                const target = data.filter(item => item.id === text)
                return (
                    <a>
                        {target[0] ? target[0].name : ''}
                    </a>
                )
            },
        },
        {
            title: 'PP',
            dataIndex: 'pp',
            key: 'pp',
            render: text => <a>{text}</a>,
            
        }
    ]

    return (
        <>
            {props.data.map((item) => {
                return (
                    <li>{item.name}</li>
                )
            })}

            <Table columns={columns} dataSource={props.data} />
        </>
    )
}

export default DataList

type DataListPropsType = {
    data: any[]
}