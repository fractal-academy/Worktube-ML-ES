import { Form, Button, InputNumber, Input } from 'antd'
import { Title } from '@qonsoll/react-design'
import PropTypes from 'prop-types'
const CandidateProfileSimpleForm = (props) => {
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
      {props?.showTitle && <Title>CandidateProfile</Title>}
      <Form.Item
        label="PostCode"
        name="postCode"
        rules={[{ required: false, message: 'Please input your postCode!' }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="City"
        name="city"
        rules={[{ required: false, message: 'Please input your city!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Country"
        name="country"
        rules={[{ required: false, message: 'Please input your country!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="PhoneNumber"
        name="phoneNumber"
        rules={[{ required: false, message: 'Please input your phoneNumber!' }]}
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

CandidateProfileSimpleForm.propTypes = {
  form: PropTypes.object,
  initialValues: PropTypes.object,
  showTitle: PropTypes.bool
}

export default CandidateProfileSimpleForm
