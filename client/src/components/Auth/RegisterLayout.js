import React, {useState} from 'react';
import { Modal, Button, Input, Row, Col, Form } from 'antd';

import Register from './Register';
import Otp from './Otp';
import ThankYou from './ThankYou';

const RegisterLayout = () => {

  const [RegisterModal, setRegisterModal] = useState(false);
  const [OtpModal, setOtpModal] = useState(false);
  const [ThankyouModal, setThankyouModal] = useState(false)

   const onOkayOne = () => {
    setRegisterModal(false)
    setOtpModal(true);
   }

   const onOkayTwo = () => {
    setOtpModal(false)
    setThankyouModal(true);
   }

   const onOkayThree = () => {
    setThankyouModal(false)
   }

    return (
      <>
        <Button type="primary" onClick={() => setRegisterModal(true)}>
          SignUp
        </Button>
        <Modal
          centered
          visible={RegisterModal}
          onOk={onOkayOne}
          onCancel={() => setRegisterModal(false)}
        >
          <Register />
        </Modal>
        <Modal
          title="Enter OTP"
          centered
          visible={OtpModal}
          onOk={onOkayTwo}
          onCancel={() =>setOtpModal(false)}
        >
          <Otp />
        </Modal>
        <Modal
          title="Thank you"
          centered
          visible={ThankyouModal}
          onOk={onOkayThree}
          onCancel={() => setThankyouModal(false)}
        >
          <ThankYou/>
        </Modal>
      </>
    );
}

export default RegisterLayout;
