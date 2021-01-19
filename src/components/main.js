import React, { useState } from 'react';
import { Collapse, message } from 'antd';
import { CopyOutlined} from '@ant-design/icons';
import  CodeLine  from './code/CodeLine';
import StoreComponent from './files/Store';
import ReducerComponent from './files/Reducer';
import ApiComponent from './files/ApiComponent';
import ReactComponent from './reactComponent/ReactComponent';
import Laravel from './Laravel/Laravel';
import Git from './Git/Git';

const { Panel } = Collapse;

const Tab = (props) => {
    let res = [];
    for (let index = 0; index < props.i; index++) {
        res.push(<span key={props.i}>&#160;&#160;&#160;&#160;</span>)
    }
    return res;
}

const UrlCopyed = (props) => {
    // const [copyed, setCopyed] = useState(null);
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

const ReadMe = () => {
    const copy = (value) => {
        // console.log(e.target.parentNode)
        navigator.clipboard.writeText(value)
        message.success(value + '- скопирован');
    }
    return (
        <div>
            <h3>Данные для SSH:</h3>
            <p>
                <b>ssh root@81.90.181.175</b> : 74NWWkFFhrGM
                <br />
                <b>ssh testadmin@81.90.181.175</b> : gfhjkm4501
                <br />
                <b>cd ../../var/www/www-root/data/www/crmapiserver.h1n.ru</b> - Перейти в директорию проекта
                <br />
                <b>ls</b> - Показать содержимое каталога (список названий файлов)
            </p>

            <h3>Данные для VDS:</h3>
            <a href="https://artcrmvds.h1n.ru/">Сайт продакшен</a> - админка
            <br />
            <a href="https://81.90.181.175:1500">https://81.90.181.175:1500</a> - админка
            <br />
            <a href="http://81.90.181.175/phpmyadmin/index.php">http://81.90.181.175/phpmyadmin/index.php</a>
            - База данных
            <br />
            <a href="https://81.90.181.175:1500/ispmgr#/list/file/4?path=%2Fvar%2Fwww%2Fwww-root%2Fdata%2Fwww%2Fcrmapiserver.h1n.ru&p_num=1">Менеджер файлов</a>

            <h3>Обраить внимание</h3>
            https://ant.design/components/steps/
            <br />
            php artisan make:controller Api/Auth/AuthController

            <Collapse defaultActiveKey={[]} >
                <Panel header="Endpoints" key="1">
                    <UrlCopyed value="http://127.0.0.1:8000/api/getCatalogParts" descriptions="получить спаршенное дерево категорий" />
                    <UrlCopyed value="http://127.0.0.1:8000/api/startCatalogParsing" descriptions="получить список категорий" />
                    <UrlCopyed value="http://127.0.0.1:8000/api/startCatalogItem/hoods" descriptions="получить список товаров выбранной категории" />
                    <UrlCopyed value="http://127.0.0.1:8000/api/startProductParamParsing/hoods" descriptions="Начать парсинг описаний выбранной категории " />
                    <UrlCopyed value="http://127.0.0.1:8000/api/startProductParamParsing/hoods/1" descriptions="Парсинг описаний выбранного по id товара" />
                    <UrlCopyed value="http://127.0.0.1:8000/api/getProductDescriptions/hoods" descriptions="Получить готовые описания для выбранной группы товаров" />
                </Panel>
                <Panel header="Git" key="2">
                    < Git />
                </Panel>
                <Panel header="Artisan" key="3">
                    <p>
                        <b>php artisan migrate:fresh</b>
                        <CopyOutlined
                            onClick={() => { copy('php artisan migrate:fresh') }}
                        />
                    </p>
                    <p>
                        <b>php artisan queue:work</b>
                        <CopyOutlined
                            onClick={() => { copy('php artisan queue:work') }}
                        />
                    </p>
                    <p>
                        <b>php artisan queue:work --tries=10</b>
                        <CopyOutlined
                            onClick={() => { copy('php artisan queue:work --tries=10') }}
                        />
                    </p>
                    <p>
                        <b>php artisan queue:restart</b>
                        <CopyOutlined
                            onClick={() => { copy('php artisan queue:restart') }}
                        />
                    </p>
                    <UrlCopyed value="php artisan queue:work --sleep=5" descriptions="Ждем 5 секунд ???" />
                    <p>Migrations:</p>
                    <UrlCopyed value="php artisan make:migration create_users_table --create=users" descriptions="Создание новой миграции" />
                    <UrlCopyed value="php artisan migrate" descriptions="" />
                    <p>Controllers:</p>
                    <UrlCopyed value="php artisan make:controller Api/Auth/AuthController" descriptions="Создание нового контроллера" />
                    <p>Models:</p>

                    <UrlCopyed
                        value="php artisan make:model User --migration"
                        descriptions="Создать миграцию БД при создании модели"
                    />
                    <p>Siders:</p>
                </Panel>
                
                <Panel header="Laravel" key="4">
                    <Laravel />
                </Panel>
                <Panel header="Данные для SSH и VDS" key="5"></Panel>
                <Panel header="React" key="6">
                    <ReactComponent />
                </Panel>
            </Collapse>


            jwt-auth secret [INk0XG6ac7zgH2zp1w7Q5EDYqOvKuYVYFmzyhE3TjQr3IowHyDj4uMLop1a11qNb] set successfully.
        </div>
    );
};

export default ReadMe;