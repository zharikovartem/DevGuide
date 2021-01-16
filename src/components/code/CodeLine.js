import React from 'react'

const Tab = (props) => {
    let res = [];
    for (let index = 0; index < props.i; index++) {
        res.push(<span key={props.i}>&#160;&#160;&#160;&#160;</span>)
    }
    return res;
}

// <CodeLine tab="0" />
const CodeLine = (props) => {
    return (
        <>
            {props.tab ? <Tab i={props.tab}></Tab> : null}
            <code>{props.value}</code>
            <br/>
        </>
    )
}

export default CodeLine;