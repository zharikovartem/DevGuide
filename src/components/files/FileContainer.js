import React, { useRef } from 'react';
import CodeLine from '../code/CodeLine';
import { Collapse, Button, message } from 'antd';

const { Panel } = Collapse;

const blockHeader = (name, onCopy) => {
    return (
        <>
            {name}
            <div className="float-right">
                <Button size="small" onClick={onCopy}>Copy</Button>
            </div>
        </>
    )
}

const FileContainer = (props) => {

    const targ = useRef();

    const onCopy = () => {
        navigator.clipboard.writeText(targ.current.innerText)
        message.success(props.name + ' скопирован!')
    }

    if (props.collapsed) {
        return (
            <Collapse defaultActiveKey={[]} >
                <Panel
                    // header={blockHeader(props.name, onCopy)} 
                    header={props.name}
                >
                    <div className="float-right">
                        <Button size="small" onClick={onCopy}>Copy</Button>
                    </div>
                    <div
                        className="test"
                        ref={targ}
                    >
                        {props.body}
                    </div>

                </Panel>
            </Collapse>
        )
    } else {
        return props.body
    }
}

export default FileContainer;
