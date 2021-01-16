import React, {useState} from 'react'
import { Collapse, message } from 'antd'
import  CodeLine  from './../code/CodeLine';
import StoreComponent from './../files/Store';
import ReducerComponent from './../files/Reducer';
import ApiComponent from './../files/ApiComponent';
import UrlCopyed from './../code/UrlCopyed'
import ComponentNameForm from './ComponentNameForm';
import CreatingNewFiles from './CreatingNewFiles';

const { Panel } = Collapse;

const ReactComponent = () => {
    const [state, setState] = useState({
        componentName: 'Test',
        isApi: false,
        isReducer: false,
        isCRUD: false
    })
    const [isApi, setIsApi] = useState(false)
    const [store, setStore] = useState(false)

    const onFinish = (values) => {
        console.log('Success:', values);
        setStore(true)
        setState(values)
    }

    return (
        <>
            <Collapse>
                <Panel header="Подключение Redux" key="6-1">
                    <UrlCopyed
                        value="npm i react-redux redux redux-thunk -s"
                        descriptions=" - Устанавливаем расширения"
                        pre="1)"
                    />
                    <UrlCopyed
                        value="npm i --save-dev @types/react-redux @types/redux @types/redux-thunk"
                        descriptions=" - Получаем типы react-redux"
                        pre="2)"
                    />

                    <ComponentNameForm onFinish={onFinish}/>
                    <CreatingNewFiles {...state}/>
                    
                    {state.isApi ? <ApiComponent collapsed /> : null}
                    {state.isReducer ? <ReducerComponent collapsed isCRUD={state.isCRUD} componentName={state.componentName}/> : null}
                    {store ? <StoreComponent collapsed /> : null}

                    <UrlCopyed
                        value="import { Provider } from 'react-redux';"
                        descriptions=" - Подключаем Provider компонент App.js"
                        pre="4)"
                    />
                    <UrlCopyed
                        value="<Provider store={store}>"
                        descriptions=" - Оборачиваем все в Provider компонент App.js"
                        pre="5)"
                    />

                    <UrlCopyed
                        value="import store from './redux/store';"
                        descriptions=" - Подключаем store"
                        pre="6)"
                    />
                    <UrlCopyed
                        value="CD src; MD redux; CD redux; echo $null >> store.tsx; code store.tsx; CD..; CD.. "
                        descriptions=" - Создаем файл store.tsx"
                        pre="6)"
                    />
                    {/* <UrlCopyed 
                                value="CD src/redux" 
                                descriptions=" - переходим в папку redux"
                                pre="6)"
                            />
                            <UrlCopyed 
                                value="echo $null >> store.tsx" 
                                descriptions=" - Создаем файл"
                                pre="7)"
                            /> */}

                    <StoreComponent collapsed />
                    <ReducerComponent collapsed />
                    <ApiComponent collapsed />

                </Panel>
                <Panel header="Create React App" key="6-2">
                    <UrlCopyed
                        value="npx create-react-app my-app"
                        descriptions=" - Создать приложение"
                        pre="1)"
                    />
                </Panel>
            </Collapse>

        </>
    );
}

export default ReactComponent;