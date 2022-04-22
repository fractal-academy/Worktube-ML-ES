import { Form, Button, Input } from 'antd'
import { Title } from '@qonsoll/react-design'
import PropTypes from 'prop-types'
const LanguageSimpleForm = (props) => {
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
      {props?.showTitle && <Title>Language</Title>}
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
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

LanguageSimpleForm.propTypes = {
  form: PropTypes.object,
  initialValues: PropTypes.object,
  showTitle: PropTypes.bool
}

export default LanguageSimpleForm
