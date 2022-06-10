import { Col, Input, Row, InputNumber, Select, Space, Button, TreeSelect } from 'antd'
import { Field } from 'formik'
import React from 'react'

const { TreeNode } = TreeSelect

const FormRow: React.FC<FormRowPropsType> = (props) => {

    const getComponent = () => {
        switch (props.type) {
            case 'input':
                return Input

            case 'inputNumber':
                return InputNumber
        
            case 'select':
                return Select

            case 'treeSelect':
                return TreeSelect

            default:
                break;
        }
    }

    const getContent = () => {
        switch (props.type) {
            case 'treeSelect':
                return (
                    <TreeNode value='123' title='example'>
                        {/* {generateTreeNodes(data, item.id)} */}
                    </TreeNode>
                )

            default:
                break;
        }
    }

    return (
        <Row>
            <Col xs={24} span={12}>
                {props.label}:
            </Col>
            <Col xs={props.isButton ? 18 : 24} span={12}>
            <Space direction="vertical" style={{ width: '100%' }}>
                <Field
                    component={getComponent()}
                    name={props.name}
                    placeholder={props.placeholder ? props.placeholder : null}
                    type="text"
                    label={props.label}
                    hasFeedback
                    styled={{ with: '100%' }}
                    onChange={props.onChange}
                >
                    {getContent()}
                </Field>
                </Space>
            </Col>
            {props.isButton && 
                <Col xs={4}>
                    <Button type='primary'>Add</Button>
                </Col>
            }
        </Row>
    )
}

export default FormRow

type FormRowPropsType = {
    label: string
    name: string
    placeholder?: string
    type: 'input' | 'inputNumber' | 'select' | 'switch' | 'textarea' | 'treeSelect'
    submitCount?: any
    isButton?: boolean
    selectOptions?: any[]
    onChange?: (data: any)=>void
}