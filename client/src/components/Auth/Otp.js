import React from 'react'

const Otp = () => {
    return (
        <div>
            <Form className="otp-form" layout="vertical" hideRequiredMark>
            <h6>OTP sent!</h6>
                <Form.Item
                  name="number"
                  rules={[{ required: true, message: 'Please enter Your OTP' }]}
                >
                  <Input placeholder="Enter Your OTP" />
                </Form.Item>
                <p>One time passcord has been sent to your abc@gmail.com</p>
                <button>Enter</button>
          </Form>
        </div>
    )
}

export default Otp
