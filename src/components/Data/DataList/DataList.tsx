import { Table } from 'antd'
import React from 'react'

const DataList: React.FC<DataListPropsType> = (props) => {

    console.log(props)

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Parent',
            dataIndex: 'parentIndex',
            key: 'parent',
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