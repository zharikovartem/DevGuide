import { Spin } from 'antd';
import React, { useEffect, useState } from 'react'
import DataList from './DataList/DataList';

const Data:React.FC<DataPropsType> = (props) => {

    const [data, setData] = useState<any>(null)

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('data')))
    }, []);

    if(!data) return (
        <Spin />
    )

    return (
        <>
            <DataList
                data={data}
            />
        </>
    )
}

export default  Data

type DataPropsType = {

}