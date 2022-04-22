import { Form, Button, Input } from 'antd'
import { Title } from '@qonsoll/react-design'
import PropTypes from 'prop-types'
const UserSimpleForm = (props) => {
  const [form] = Form.useForm()

  const usedForm = props?.form || form

  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onSubmitClick = () => {
    console.log(usedForm.getFieldsValue())
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const onReset = () => form.resetFields()

  return (
    <Form
      form={usedForm}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={props?.initialValues}
      autoComplete="off"
    >
      {props?.showTitle && <Title>User</Title>}
      <Form.Item
        label="Role"
        name="role"
        rules={[{ required: true, message: 'Please input your role!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="FirstName"
        name="firstName"
        rules={[{ required: false, message: 'Please input your firstName!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="LastName"
        name="lastName"
        rules={[{ required: true, message: 'Please input your lastName!' }]}
      >
        <Input />
      </Form.Item>

      {!props?.form ? (
        <Form.Item>
          <Button type="primary" onClick={onSubmitClick}>
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      ) : (
        <></>
      )}
    </Form>
  )
}

UserSimpleForm.propTypes = {
  form: PropTypes.object,
  initialValues: PropTypes.object,
  showTitle: PropTypes.bool
}

export default UserSimpleForm
