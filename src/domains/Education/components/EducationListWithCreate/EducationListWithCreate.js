import {
  Button,
  Col,
  Container,
  Divider,
  Row,
  Title
} from '@qonsoll/react-design'
import { Form } from 'antd'

import { useState } from 'react'
import { EducationList } from 'domains/Education/components'
import PropTypes from 'prop-types'

const EducationListWithCreate = ({ educations, setEducations }) => {
  const [isAdded, setIsAdded] = useState(false)
  const [form] = Form.useForm()

  const onAddButtonClick = () => setIsAdded(!isAdded)
  const onSaveButtonClick = () =>
    form.validateFields().then((values) => {
      setEducations((prevState) => [...prevState, values])
      form.resetFields()
      setIsAdded(false)
    })
  const onReset = () => form.resetFields()

  return (
    <Container>
      <Row>
        <Col>
          <Title>Educations</Title>
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
        <EducationList educations={educations} />
      </Col>
    </Container>
  )
}

EducationListWithCreate.propTypes = {
  educations: PropTypes.arrayOf(PropTypes.object),
  setEducations: PropTypes.func
}

export default EducationListWithCreate
