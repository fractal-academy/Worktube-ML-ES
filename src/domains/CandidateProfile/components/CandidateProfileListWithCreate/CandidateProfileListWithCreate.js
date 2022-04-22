import {
  Button,
  Col,
  Container,
  Divider,
  Row,
  Title
} from '@qonsoll/react-design'
import { Form, InputNumber, Input } from 'antd'

import { useState } from 'react'
import { CandidateProfileList } from 'domains/CandidateProfile/components'
import PropTypes from 'prop-types'

const CandidateProfileListWithCreate = ({
  candidateProfiles,
  setCandidateProfiles
}) => {
  const [isAdded, setIsAdded] = useState(false)
  const [form] = Form.useForm()

  const onAddButtonClick = () => setIsAdded(!isAdded)
  const onSaveButtonClick = () =>
    form.validateFields().then((values) => {
      setCandidateProfiles((prevState) => [...prevState, values])
      form.resetFields()
      setIsAdded(false)
    })
  const onReset = () => form.resetFields()

  return (
    <Container>
      <Row>
        <Col>
          <Title>CandidateProfiles</Title>
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
              label="PostCode"
              name="postCode"
              rules={[{ required: false, message: 'Please input postCode!' }]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="City"
              name="city"
              rules={[{ required: false, message: 'Please input city!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Country"
              name="country"
              rules={[{ required: false, message: 'Please input country!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="PhoneNumber"
              name="phoneNumber"
              rules={[
                { required: false, message: 'Please input phoneNumber!' }
              ]}
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
        <CandidateProfileList candidateProfiles={candidateProfiles} />
      </Col>
    </Container>
  )
}

CandidateProfileListWithCreate.propTypes = {
  candidateProfiles: PropTypes.arrayOf(PropTypes.object),
  setCandidateProfiles: PropTypes.func
}

export default CandidateProfileListWithCreate
