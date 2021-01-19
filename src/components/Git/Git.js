import React from 'react'
import { Collapse, message } from 'antd';
import UrlCopyed from '../code/UrlCopyed';
import Tab from '../code/Tab';
import CodeLine from '../code/CodeLine';

const { Panel } = Collapse;

const CodeToPackege = () => {
    return (
        <>
            <CodeLine tab="0" value='"scripts": {' />
            <CodeLine tab="1" value='//...' />
            <CodeLine tab="1" value='"predeploy": "npm run build",' />
            <CodeLine tab="1" value='"deploy": "gh-pages -d build",' />
            <CodeLine tab="0" value='},' />
        </>
    )
}

const Git = (props) => {
    return (
        <>
            <Collapse defaultActiveKey={[]} >
                <Panel header="Загрузка на VDS" key="2-1">
                    <UrlCopyed
                        value="git stash"
                        descriptions=" - Схранение изменений в локальном хранилеще с возможностью дальнейшей работы"
                        pre="1)"
                    />
                    <UrlCopyed
                        value="git pull"
                        descriptions=" - - Схранение изменений в локальном хранилеще с возможностью дальнейшей работы"
                        pre="2)"
                    />
                </Panel>
                <Panel header="Клонирование с git" key="2-2">
                    <UrlCopyed
                        value="git clone  https://github.com/zharikovartem/OnlinerParserApiServis.git project_name"
                        descriptions=" - Клонируем с репозитория"
                        pre="1)"
                    />
                    <UrlCopyed
                        value="cd project_name"
                        descriptions=" - Переходим в корневую папку проекта"
                        pre="2)"
                    />
                    <UrlCopyed
                        value="composer install"
                        descriptions=" - Устанавливаем composer"
                        pre="3)"
                    />
                    <p><Tab i="1" /> Переходим в VsCode</p>
                    <UrlCopyed
                        value="npm install"
                        descriptions=" - Устанавливаем NPM"
                        pre="4)"
                    />
                    <UrlCopyed
                        value="copy .env.example .env"
                        descriptions=" - Заменяем файл настроек"
                        pre="5)"
                    />
                    <p> *)<Tab i="1" /> Для локальной версии: <br />
                        <Tab i="2" /><code>DB_DATABASE=OnlinerParserApiServis</code><br />
                        <Tab i="2" /><code>DB_USERNAME=root</code><br />
                        <Tab i="2" /><code>DB_PASSWORD=</code>
                    </p>
                    <UrlCopyed
                        value="php artisan config:clear"
                        descriptions=" - Чистим конфиг"
                        pre="6)"
                    />
                    <UrlCopyed
                        value="php artisan config:cache"
                        descriptions=" - Чистим кэш"
                        pre="7)"
                    />
                    <UrlCopyed
                        value="php artisan key:generate"
                        descriptions=" - Генерируем ключ"
                        pre="8)"
                    />
                    <UrlCopyed
                        value="php artisan migrate"
                        descriptions=" - Мегрируем БД"
                        pre="9)"
                    />

                </Panel>
                <Panel header="Git pages" key="2-3">
                    <UrlCopyed
                        value="npm install gh-pages --save-dev"
                        descriptions=" - Устанавливаем пакет gh-pages"
                        pre="1)"
                    />
                    <UrlCopyed
                        value='"homepage": "https://zharikovartem.github.io/epam-app/",'
                        descriptions=" - Добавляем адрес сайта в package.json"
                        pre="2)"
                    />
                    3)<br/>
                    <CodeToPackege />
                    
                    <UrlCopyed
                        value='git remote add origin git@github.com/zharikovartem/DevGuide'
                        descriptions=" - add it as remote"
                        pre="4)"
                    />
                    5) npm run deploy
                    <br/>
                    6) commit
                </Panel>
            </Collapse>
        </>

    )
}

export default Git