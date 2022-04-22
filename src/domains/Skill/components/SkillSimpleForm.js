import { Form, Button } from 'antd'
import { Title } from '@qonsoll/react-design'
import PropTypes from 'prop-types'
const SkillSimpleForm = (props) => {
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
      {props?.showTitle && <Title>Skill</Title>}

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

SkillSimpleForm.propTypes = {
  form: PropTypes.object,
  initialValues: PropTypes.object,
  showTitle: PropTypes.bool
}

export default SkillSimpleForm
