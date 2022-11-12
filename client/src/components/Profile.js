import { useRef } from "react";
import 'antd/dist/antd.css';
import { Button, Form } from 'antd';
import axios from "axios";

import Title from './Title';
import FormComponent from './FormComponent';

const Profile = ({ displayNameFunction, mobileNoFunction, getUserDetails, userData = {} }) => {

  const formRef = useRef();
  const { firstName = "", lastName = "", displayName = "", email = "", mobileNo = "", location = "" } = userData;


  const onSumbit = async () => {
    var data = JSON.stringify(formRef.current.getFieldValue());
    var config = {
      method: 'post',
      url: 'http://localhost:8000/updateUser',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    let res = await axios(config);
    window.location.reload(false)
    console.log(res)
  }

  const onReset = () => {
    getUserDetails()
    window.location.reload(false)
  }

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onChangeDispName = (e) => {
    displayNameFunction(e.value)
  }

  const onChangePhNo = (e) => {
    mobileNoFunction(e.value)
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
        initialValues={{ firstName, lastName, displayName, email, mobileNo, location }}
        autoComplete="off"
      >

        <FormComponent label="First Name" name="firstName" />
        <FormComponent label="Last Name" name="lastName" />
        <FormComponent label="Display Name" name="displayName" eventListen={true} onChange={onChangeDispName} />
        <FormComponent label="Email" name="email" />
        <FormComponent label="Phone Number (work)" name="mobileNo" eventListen={true} onChange={onChangePhNo} />
        <FormComponent label="Location" name="location" />

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" onClick={onSumbit}>Submit</Button>
          <Button htmlType="button" onClick={onReset}>Reset</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Profile;
