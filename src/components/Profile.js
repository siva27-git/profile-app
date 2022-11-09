import { useRef } from "react";
import 'antd/dist/antd.css';
import { Button, Form } from 'antd';

import Title from './Title';
import FormComponent from './FormComponent';

const Profile = ({dispFunction, phNoFunction}) => {

  const formRef = useRef()

  const onSumbit = () => {
    console.log(formRef.current.getFieldValue())
  }

  const onReset = () => {
    console.log(formRef.current.resetFields())
  }

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onChangeDispName = (e) => {
    dispFunction(e.value)
  }

  const onChangePhNo = (e) => {
    phNoFunction(e.value)
  }

  return (
    <>
      <>
        <Title>My Profile</Title>
      </>

      <Form
        ref={formRef}
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 15 }}
        initialValues={{}}
        autoComplete="off"
      >

        <FormComponent label="First Name" name="firstName" />
        <FormComponent label="Last Name" name="lastName" />
        <FormComponent label="Display Name" name="displayName" eventListen={true} onChange={onChangeDispName} />
        <FormComponent label="Email" name="email" />
        <FormComponent label="Phone Number (work)" name="phoneNo1" eventListen={true} onChange={onChangePhNo} />
        <FormComponent label="Phone Number (work)" name="phoneNo2" required={false} />
        <FormComponent label="Location" name="location" />

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" onClick={onSumbit}>Submit</Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Profile;
