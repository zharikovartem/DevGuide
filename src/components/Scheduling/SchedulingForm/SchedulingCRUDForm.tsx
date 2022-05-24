import React from 'react'
import { Form, FormikProps } from 'formik'
import FormRow from '../../../utils/FormRow/FormRow'
import { SchedulingCRUDFormPropsType } from './SchedulingCRUDFormContainer'

const SchedulingCRUDForm: React.FC<FormikProps<SchedulingCRUDFormPropsType>> = (props) => {

    console.log(props)
    return (
        <Form
            className="form-container"
            onSubmit={props.handleSubmit}
        >
            <FormRow
                label='Name'
                name='name'
                type='input'
            />

            <FormRow
                label='Parent'
                name='parentId'
                type='treeSelect'
                placeholder='Please, choise parent task'
            />

        </Form>
    )
}

export default SchedulingCRUDForm