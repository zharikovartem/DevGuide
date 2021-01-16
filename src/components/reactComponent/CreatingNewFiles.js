import React from 'react'

const CreatingNewFiles = (props) => {

    const getComandLine = () => {
        let comandLine = 'CD src; MD redux; CD redux; echo $null >> store.js; code store.js; CD..;';
        if (props.isApi) {
            comandLine = comandLine+'MD api; CD api; echo $null >> api.js;; code api.js; CD..;'
        }
        if (props.isReducer) {
            comandLine = comandLine+'CD redux; echo $null >> '+props.componentName+'Reducer.js; code '+props.componentName+'Reducer.js; CD..;'
        }

        comandLine = comandLine+'CD..'// CD.. 
        return comandLine
    }
    return (
        <>
            CreatingNewFiles to: {props.componentName}
            <br/>
            {getComandLine()}
        </>
    )
}

export default CreatingNewFiles
