import {
  Button,
  Col,
  Container,
  Divider,
  Row,
  Title
} from '@qonsoll/react-design'
import { Form, Input } from 'antd'

import { useState } from 'react'
import { LanguageList } from 'domains/Language/components'
import PropTypes from 'prop-types'

const LanguageListWithCreate = ({ languages, setLanguages }) => {
  const [isAdded, setIsAdded] = useState(false)
  const [form] = Form.useForm()

  const onAddButtonClick = () => setIsAdded(!isAdded)
  const onSaveButtonClick = () =>
    form.validateFields().then((values) => {
      setLanguages((prevState) => [...prevState, values])
      form.resetFields()
      setIsAdded(false)
    })
  const onReset = () => form.resetFields()

  return (
    <Container>
      <Row>
        <Col>
          <Title>Languages</Title>
        </Col>
        <Col cw={1}>
          <Button type="primary" onClick={onAddButtonClick}>
            Add
          </Button>
        </Col>
      </Row>
      {isAdded ? (
        <Row>
          <Form form={form}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input name!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={onSaveButtonClick}>
                Save
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
            </Form.Item>
          </Form>
          <Divider />
        </Row>
      ) : (
        <></>
      )}
      <Col>
        <LanguageList languages={languages} />
      </Col>
    </Container>
  )
}

LanguageListWithCreate.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.object),
  setLanguages: PropTypes.func
}

export default LanguageListWithCreate
