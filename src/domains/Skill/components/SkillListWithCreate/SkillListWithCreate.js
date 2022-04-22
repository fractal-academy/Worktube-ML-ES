import {
  Button,
  Col,
  Container,
  Divider,
  Row,
  Title
} from '@qonsoll/react-design'
import { Form, Input } from 'antd'

import PropTypes from 'prop-types'
import { SkillList } from 'domains/Skill/components'
import { useState } from 'react'

const SkillListWithCreate = ({ skills, setSkills }) => {
  const [isAdded, setIsAdded] = useState(false)
  const [form] = Form.useForm()

  const onAddButtonClick = () => setIsAdded(!isAdded)
  const onSaveButtonClick = () =>
    form.validateFields().then((values) => {
      setSkills((prevState) => [...prevState, values])
      form.resetFields()
      setIsAdded(false)
    })
  const onReset = () => form.resetFields()

  return (
    <Container>
      <Row>
        <Col>
          <Title>Skills</Title>
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
        <SkillList skills={skills} />
      </Col>
    </Container>
  )
}

SkillListWithCreate.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.object),
  setSkills: PropTypes.func
}

export default SkillListWithCreate
