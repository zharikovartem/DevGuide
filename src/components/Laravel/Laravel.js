import React from 'react'
import { Collapse, message } from 'antd';
import UrlCopyed from '../code/UrlCopyed';
import Tab from '../code/Tab';

const { Panel } = Collapse;

const Laravel = (props) => {

    return (
        <>
            <UrlCopyed value="php artisan make:controller PhotoController --resource" descriptions="Создание ресурсного контроллера" />
            <Collapse defaultActiveKey={[]} >
                <Panel header="Создание модели с контроллером и миграцией" key="4-1">
                    <UrlCopyed value="php artisan make:model Todo -mcr" descriptions="Создание ресурсного контроллера с привязкой к модели и миграцией" />
                    <span>Создается контроллер, модель, миграция</span>
                    <h5>1. Заполнение модели:</h5>
                    <UrlCopyed
                        value="protected $table = 'NameInDB';"
                        descriptions=" - Указать название таблици в базе данных"
                        pre="1.1)"
                    />
                    <UrlCopyed
                        value="protected $fillable = ['name', 'user_id', 'date',];"
                        descriptions=" - Определить, для каких атрибутов разрешить массовое назначение"
                        pre="1.2)"
                    />
                    <UrlCopyed
                        value="protected $primaryKey = 'flight_id';"
                        descriptions=" - Первичные ключи, если id то можно пропустить"
                        pre="1.3)"
                    />
                    <UrlCopyed
                        value="protected $attributes = ['delayed' => false,];"
                        descriptions=" - Значения по умолчанию"
                        pre="1.4) "
                    />
                    <UrlCopyed
                        value="use Illuminate\Database\Eloquent\SoftDeletes;"
                        descriptions=" - Подключаем для мягкого удаления"
                        pre="1.5.1) "
                    />
                    <UrlCopyed
                        value="use SoftDeletes;"
                        descriptions=" - Прописываем в теле класса"
                        pre="1.5.2) "
                    />

                    <h5>2. Заполнение Контроллера:</h5>
                    <UrlCopyed
                        value='use App\Task;'
                        descriptions=" - Подключить модель в контроллер"
                        pre="2.1) "
                    />
                    <UrlCopyed
                        value='return response()->json([
                                        "Tasks"=> Task::all()
                                        ], 200);'
                        descriptions="}"
                        pre="2.2) public function index() {"
                    />
                    <UrlCopyed
                        value='$newTask = new Task;
                                        $newTask->name = "test_to ".$request->get("user_id");
                                        $newTask->user_id = $request->get("user_id");
                                        $newTask->date = now();
                                        $newTask->save();'
                        descriptions="}"
                        pre="2.3) public function store(Request $request) {"
                    />

                    <p>2.4 В методе show() заменить $article на модель и вернуть его</p>
                    <p>2.5) update():</p>
                    <pre>
                        <code>
                            public function update(Request $request, Task $task)<br />
                                        &#123; <br />
                            <Tab i="1" />$fields = $request-&#62;all();<br />
                            <Tab i="1" />foreach ($fields as $field =&#62; $value) &#123;<br />
                            <Tab i="2" />if (isset($task[$field])) &#123; <br />
                            <Tab i="3" />$task[$field] = $value;<br />
                            <Tab i="2" />&#125; else &#123;<br />
                            <Tab i="3" />$message[$field] = 'do not exist';<br />
                            <Tab i="2" />&#125;<br />
                            <Tab i="1" />&#125;<br />
                            <Tab i="1" />$task-&#62;save();<br />
                            <Tab i="1" />if (!isset($message)) &#123;<br />
                            <Tab i="2" />return response()-&#62;json([<br />
                            <Tab i="3" />$task,<br />
                            <Tab i="2" />], 200);<br />
                            <Tab i="1" />&#125; else &#123;<br />
                            <Tab i="2" />return response()-&#62;json(['error'=&#62;true, 'message'=&#62;$message], 401);<br />
                            <Tab i="1" />&#125;<br />
                                        &#125;
                                    </code>
                    </pre>

                                // Авторизация

                                <h5>3. Настройка миграции:</h5>
                    <li>php artisan make:migration create_users_table</li>
                    <li>3.1 Прописать филды</li>
                    <Collapse>
                        <Panel header="Типы полей:" key="4-1-1">
                            <UrlCopyed
                                value="$table->softDeletes();"
                                descriptions=" - Мягкое удаление"
                                pre="1)"
                            />
                            <UrlCopyed
                                value="$table->bigInteger('votes');"
                                descriptions=" - Поле BIGINT"
                                pre="2)"
                            />
                            <UrlCopyed
                                value="$table->binary('data');"
                                descriptions=" - Поле BLOB"
                                pre="3)"
                            />
                            <UrlCopyed
                                value="$table->boolean('confirmed');"
                                descriptions=" - Поле BOOLEAN"
                                pre="4)"
                            />
                            <UrlCopyed
                                value="$table->char('name', 4);"
                                descriptions=" - Поле CHAR с указанной длиной"
                                pre="5)"
                            />
                            <UrlCopyed
                                value="$table->date('created_at');"
                                descriptions=" - Поле DATE"
                                pre="6)"
                            />
                            <UrlCopyed
                                value="$table->dateTime('created_at');"
                                descriptions=" - Поле DATETIME"
                                pre="7)"
                            />
                            <UrlCopyed
                                value="$table->decimal('amount', 5, 2);"
                                descriptions=" - Поле DECIMAL с указанной размерностью и точностью"
                                pre="8)"
                            />
                            <UrlCopyed
                                value="$table->double('column', 15, 8);"
                                descriptions=" - Поле DOUBLE с указанной точностью"
                                pre="9)"
                            />
                            <UrlCopyed
                                value="$table->enum('choices', array('foo', 'bar'));"
                                descriptions=" - Поле ENUM"
                                pre="10)"
                            />
                            <UrlCopyed
                                value="$table->float('amount');"
                                descriptions=" - Поле FLOAT"
                                pre="11)"
                            />
                            <UrlCopyed
                                value="$table->increments('id');"
                                descriptions=" - Первичный последовательный ключ (autoincrement)"
                                pre="12)"
                            />
                            <UrlCopyed
                                value="$table->integer('votes');"
                                descriptions=" - Поле INTEGER"
                                pre="13)"
                            />
                            <UrlCopyed
                                value="$table->longText('description');"
                                descriptions=" - Поле LONGTEXT"
                                pre="14)"
                            />
                            <UrlCopyed
                                value="$table->mediumText('description');"
                                descriptions=" - Поле MEDIUMTEXT"
                                pre="15)"
                            />
                            <UrlCopyed
                                value="$table->morphs('taggable');"
                                descriptions=" - Добавляет INTEGER поле taggable_id и STRING поле taggable_type"
                                pre="16)"
                            />
                            <UrlCopyed
                                value="$table->smallInteger('votes');"
                                descriptions=" - Поле SMALLINT"
                                pre="17)"
                            />
                            <UrlCopyed
                                value="$table->string('email');"
                                descriptions=" - Поле VARCHAR"
                                pre="18)"
                            />
                            <UrlCopyed
                                value="$table->string('name', 100);"
                                descriptions=" - Поле VARCHAR с указанной длиной"
                                pre="19)"
                            />
                            <UrlCopyed
                                value="$table->text('description');"
                                descriptions=" - Поле TEXT"
                                pre="20)"
                            />
                            <UrlCopyed
                                value="$table->time('sunrise');"
                                descriptions=" - Поле TIME"
                                pre="21)"
                            />
                            <UrlCopyed
                                value="$table->timestamp('added_on');"
                                descriptions=" - Поле TIMESTAMP"
                                pre="22)"
                            />
                            <UrlCopyed
                                value="$table->timestamps();"
                                descriptions=" - Добавляет поля created_at и updated_at"
                                pre="23)"
                            />
                            <UrlCopyed
                                value="$table->tinyInteger('numbers');"
                                descriptions=" - Поле TINYINT"
                                pre="24)"
                            />
                            <UrlCopyed
                                value="$table->rememberToken();"
                                descriptions=" - Добавляет поле remember_token с типом VARCHAR(100) NULL"
                                pre="25)"
                            />
                            <UrlCopyed
                                value="$table->nullableTimestamps();"
                                descriptions=" - То же, что и timestamps(), но разрешены значения NULL"
                                pre="26)"
                            />
                        </Panel>
                        <Panel header="Свойства полей:" key="4-1-2">
                            <UrlCopyed
                                value="->nullable()"
                                descriptions=" - Указывает, что поле может быть NULL"
                                pre="1)"
                            />
                            <UrlCopyed
                                value="->default($value)"
                                descriptions=" - Указывает значение по умолчанию для поля"
                                pre="2)"
                            />
                            <UrlCopyed
                                value="->unsigned()"
                                descriptions=" - Обозначает беззнаковое число (UNSIGNED)"
                                pre="3)"
                            />
                        </Panel>
                    </Collapse>

                    <h5>4. Создание сидера:</h5>
                </Panel>
                <Panel header="Изменение модели" key="4-2">
                    Изменение модели
                        </Panel>
                <Panel header="ZMQ" key="4-3">
                    <UrlCopyed value="composer require react/zmq" descriptions="Установка ZMQ на Composer" />
                </Panel>
                <Panel header="Web Soket" key="4-4"></Panel>
                <Panel header="Events" key="4-5"></Panel>
                <Panel header="Auth" key="4-6"></Panel>
            </Collapse>
        </>
    )
}

export default Laravel