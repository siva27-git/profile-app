import { Form, Input } from 'antd';

const FormComponent = ({ label, name, required = true, eventListen = false, onChange }) => {

    const onChangeEvent = (event) => {
        onChange({ key: event.target.id, value: event.target.value })
    }
    return (
        <Form.Item
            label={label}
            name={name}
            onChange={eventListen ? onChangeEvent : null}
            rules={[{ required: required, message: `Please input your ${label} !` }]}
        >
            <Input />
        </Form.Item>
    )
};

export default FormComponent;