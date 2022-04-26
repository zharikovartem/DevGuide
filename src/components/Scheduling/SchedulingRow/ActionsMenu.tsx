import { DownCircleTwoTone, UpCircleTwoTone } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import React from 'react'

const ActionsMenu: React.FC<ActionsMenuPropsType> = (props) => {

    const onMenuClick = (e: any) => {
        console.log('click', e);
        console.log('key', e.key);
        switch (e.key) {
            case '1':
                alert('up')
                break;

            case '2':
                alert('down')
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
                // {
                //     key: '3',
                //     label: '3rd item',
                // },
            ]}
        />
    )
}

export default ActionsMenu

type ActionsMenuPropsType = {

}