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
import { ExperienceList } from 'domains/Experience/components'
import PropTypes from 'prop-types'

const ExperienceListWithCreate = ({ experiences, setExperiences }) => {
  const [isAdded, setIsAdded] = useState(false)
  const [form] = Form.useForm()

  const onAddButtonClick = () => setIsAdded(!isAdded)
  const onSaveButtonClick = () =>
    form.validateFields().then((values) => {
      setExperiences((prevState) => [...prevState, values])
      form.resetFields()
      setIsAdded(false)
    })
  const onReset = () => form.resetFields()

  return (
    <Container>
      <Row>
        <Col>
          <Title>Experiences</Title>
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
        <ExperienceList experiences={experiences} />
      </Col>
    </Container>
  )
}

ExperienceListWithCreate.propTypes = {
  experiences: PropTypes.arrayOf(PropTypes.object),
  setExperiences: PropTypes.func
}

export default ExperienceListWithCreate
