import React, {useState} from 'react';
import { Button, Input, Row, Col, Form } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {connect} from 'react-redux'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Register = () => {

    return (
      <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password,
            firstNname: values.firstname,
            lastname: values.lastname,
          };

          //dispatch(registerUser(dataToSubmit)).then((response) => {
          //  if (response.payload.success) {
          //    props.history.push('/login');
          ///  } else {
          //    alert(response.payload.err.errmsg);
          //  }
          //});

          setSubmitting(false);
        }, 500);
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <div className='app'>
            <h2> Sign Up </h2>
            <h5>It's easy and free</h5>
            <Form
              style={{ minWidth: '340px' }}
              {...formItemLayout}
              onSubmit={handleSubmit}
            >
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item required label='First Name'>
                <Input
                  id='firstname'
                  placeholder='Enter your First name'
                  type='text'
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.firstName && touched.firstName
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.FirstName && touched.FirstName && (
                  <div className='input-feedback'>{errors.FirstName}</div>
                )}
              </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item required label='Last Name'>
                <Input
                  id='lastName'
                  placeholder='Enter your Last Name'
                  type='text'
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.lastName && touched.lastName
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.lastName && touched.lastName && (
                  <div className='input-feedback'>{errors.lastName}</div>
                )}
              </Form.Item>
                </Col>
              </Row>
              <Form.Item
                required
                label='Email'
                hasFeedback
                validateStatus={
                  errors.email && touched.email ? 'error' : 'success'
                }
              >
                <Input
                  id='email'
                  placeholder='Enter your Email'
                  type='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.email && touched.email && (
                  <div className='input-feedback'>{errors.email}</div>
                )}
              </Form.Item>

              <Form.Item
                required
                label='Password'
                hasFeedback
                validateStatus={
                  errors.password && touched.password ? 'error' : 'success'
                }
              >
                <Input
                  id='password'
                  placeholder='Enter your password'
                  type='password'
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.password && touched.password && (
                  <div className='input-feedback'>{errors.password}</div>
                )}
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button
                  onClick={handleSubmit}
                  type='primary'
                  disabled={isSubmitting}
                  style={{ marginLeft: '130px' }}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        );
      }}
    </Formik>
    );
}

//const mapStateToProps = state = ({
//  isAuthenticated : state.auth.isAuthenticated,
//  error: state.error
//})

export default 
//connect(mapStateToProps, {})
//(
  Register
  //);
