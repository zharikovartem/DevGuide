import {connect} from 'react-redux'
import { AppStateType } from '../../../Redux/store'
//import { AppStateType } from './../Redux/store'
import SchedulingCRUDForm from './SchedulingCRUDForm'

type MapPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchPropsType = {
    
}

type OwnSchedulingCRUDFormPropsType = {
    
}

export type SchedulingCRUDFormPropsType = MapPropsType & MapDispatchPropsType & OwnSchedulingCRUDFormPropsType

let mapStateToProps = (state: AppStateType) => {
    return {
        // data: state.dataReducer.data
    }
}

export default connect<MapPropsType, MapDispatchPropsType, OwnSchedulingCRUDFormPropsType, AppStateType>(mapStateToProps,
    {}
)
    (SchedulingCRUDForm)