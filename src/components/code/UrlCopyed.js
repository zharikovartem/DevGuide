import React from 'react'
import { message } from 'antd';
import Tab from './Tab';
import {CopyOutlined} from '@ant-design/icons';

const UrlCopyed = (props) => {
    const copy = (value) => {
        navigator.clipboard.writeText(value)
        message.success(value + '- скопирован');
    }

    return (
        <p>
            { props.pre ? <span>{props.pre} <Tab i="1" /></span> : null}
            <b>{props.value}</b>
            <Tab i="1" />
            <CopyOutlined
                onClick={() => { copy(props.value) }}
            />
            {props.descriptions ?
                <span> {props.descriptions}</span>
                :
                null
            }
        </p>
    )
}

export default UrlCopyed;