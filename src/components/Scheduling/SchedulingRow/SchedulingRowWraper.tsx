import { SettingOutlined } from '@ant-design/icons';
import { Collapse } from 'antd'
import CollapsePanel from 'antd/lib/collapse/CollapsePanel'
import React from 'react'
import SchedulingRow, { SchedulingRowPropsType } from './SchedulingRow'

const genExtra = () => (
    <SettingOutlined
      onClick={event => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
)

const SchedulingRowWraper:React.FC<SchedulingRowPropsType> = (props) => {

    // if (props.item.childs) return (
    //     <Collapse 
    //         className='m-0 p-0' 
    //         defaultActiveKey={[]} 
    //         onChange={() => { }} 
    //         bordered={false}
    //         accordion={true}
    //     >
    //         <CollapsePanel 
    //             className='m-0 p-0' 
    //             extra={genExtra()}
    //             // showArrow={false}
    //             header={
    //                 <div className='m-0 p-0 w-100'>
    //                     <SchedulingRow {...props}/>
    //                 </div>
    //             } 
    //             key="1"
    //             // collapsible="disabled"
    //         >
    //             <p>?????????????</p>
    //         </CollapsePanel>
    //     </Collapse>
    // )

    return (
        <SchedulingRow {...props}/>
    )
}

export default  SchedulingRowWraper