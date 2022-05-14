import { DownCircleTwoTone, FileAddTwoTone, UpCircleTwoTone } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import React from 'react'
import { ScheduleType } from '../Scheduling';
import { createSchedulingTree } from '../SchedulingHelper';

const ActionsMenu: React.FC<ActionsMenuPropsType> = (props) => {

    const onMenuClick = (e: any) => {
        console.log('click', e);
        console.log('key', e.key);

        // let newData = createSchedulingTree(JSON.parse(localStorage.getItem('data')))
        let newData = JSON.parse(localStorage.getItem('data'))
        console.log('newData', [...newData]);

        switch (e.key) {
            case '1':
                newData.forEach((item, index) => {
                    console.log(index)
                    if (item.index === props.item.index && parseInt(props.item.index) > 0) {
                        newData[index].index = (index - 1).toString()
                        newData[index - 1].index = index.toString()
                    }
                })

                newData.sort(function (a, b) {
                    if (a.index > b.index) {
                        return 1;
                    }
                    if (a.index < b.index) {
                        return -1;
                    }
                    return 0;
                })

                console.log('localStorage.setItem', newData)
                localStorage.setItem('data', JSON.stringify(newData));
                props.onUpdate()
                break;

            case '2':
                console.log(parseInt(props.item.index)-1)
                console.log(newData.length)
                if (parseInt(props.item.index)+1 >= newData.length) {
                    break
                }
                newData[parseInt(props.item.index)].index = (parseInt(props.item.index)+1).toString()
                newData[parseInt(props.item.index)+1].index = (parseInt(props.item.index)).toString()
                // newData.forEach((item, index) => {
                    
                //     if (item.index === props.item.index && parseInt(props.item.index) < newData.length) {
                //         console.log('+++', item.index, props.item.index)
                //         newData[index].index = (index + 1).toString()
                //         newData[index + 1].index = index.toString()
                //     }
                // })

                newData.sort(function (a, b) {
                    if (a.index > b.index) {
                        return 1;
                    }
                    if (a.index < b.index) {
                        return -1;
                    }
                    return 0;
                })

                console.log('localStorage.setItem', newData)

                localStorage.setItem('data', JSON.stringify(newData));
                props.onUpdate()
                break;

            case '3':
                alert('add subtask')
                break;

            default:
                break;
        }
    }

    return (
        <Menu
            onClick={onMenuClick}
            items={[
                {
                    key: '1',
                    // label: '1st item',
                    icon: <UpCircleTwoTone />
                },
                {
                    key: '2',
                    // label: '2nd item',
                    icon: <DownCircleTwoTone />
                },
                {
                    key: '3',
                    // label: '3rd item',
                    icon: <FileAddTwoTone />
                },
            ]}
        />
    )
}

export default ActionsMenu

type ActionsMenuPropsType = {
    item: ScheduleType
    onUpdate: () => void
}