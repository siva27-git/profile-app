import { Form, Input } from 'antd';

const FormComponent = ({label, name, required = true}) => {
    console.log(required, label)
    return (
        <Form.Item
            label={label}
            name={name}
            rules={[{ required: required, message: `Please input your ${label} !` }]}
        >
            <Input />
        </Form.Item>
    )
};

export default FormComponent;