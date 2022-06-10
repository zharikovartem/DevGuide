import {connect} from 'react-redux'
import { AppStateType } from '../../../Redux/store'
import { CredentialsType, checkCreds,  setCredentials } from '../../../Redux/redmineReducer'
import RedmineLoginForm from './RedmineLoginForm'

type MapPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchPropsType = {
    setCredentials: (credentials: CredentialsType) => void
    checkCreds: (credentials: CredentialsType) => void
}

type OwnRedmineLoginFormPropsType = {
    
}

export type RedmineLoginFormPropsType = MapPropsType & MapDispatchPropsType & OwnRedmineLoginFormPropsType

let mapStateToProps = (state: AppStateType) => {
    return {
        
    }
}

export default connect<MapPropsType, MapDispatchPropsType, OwnRedmineLoginFormPropsType, AppStateType>(mapStateToProps,
    { setCredentials, checkCreds }
)
    (RedmineLoginForm)  