import { Button, Col, Container, Row, Text, Title } from '@qonsoll/react-design'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { Form } from 'antd'
import { SkillSimpleForm } from '../'
import PropTypes from 'prop-types'
import { useSimpleFormActions } from 'hooks'
import { useState } from 'react'
import { CardDropdown } from 'components'
import { useTranslations } from 'contexts/Translation'

const SkillSimpleView = (props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [form] = Form.useForm()
  const { t } = useTranslations()

  const { handleEdit, handleCancel, handleSave, handleDelete } =
    useSimpleFormActions({
      form,
      changeStateAction: setIsEditing,
      document: props.skill,
      collectionName: 'skills'
    })

  return (
    <Container>
      {!isEditing ? (
        <Row>
          <Col>
            <Row mb="12px" flex="1">
              <Col cw={9}>
                <Title level={2}>
                  {t(props.skill?.title || props.skill?.name)}
                </Title>
              </Col>
              <Col>
                <CardDropdown
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              </Col>
            </Row>
            <Row borderBottom="1px solid black" mb="8px">
              <Col>
                <Title level={5}>{t('name')}</Title>
              </Col>
              <Col h="right">
                <Text>{props.skill?.name}</Text>
              </Col>
            </Row>
            <Row>
              <Col h="left">
                <Title level={5}>
                  {`${t('Created by')}: ${props.skill?._createdBy}`}
                </Title>
              </Col>
              <Col h="right">
                <Text>
                  {`${t('Created at')}: ${props.skill?._createdAt
                    ?.toDate()
                    .toLocaleDateString('en-US')}`}
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col>
            <SkillSimpleForm
              form={form}
              initialValues={props.skill}
              showTitle={false}
            />
          </Col>
          <Col cw={4}>
            <Row>
              <Button
                shape="circle"
                type="primary"
                onClick={handleSave}
                icon={<CheckOutlined />}
              />
              <Button
                ghost
                onClick={handleCancel}
                shape="circle"
                type="primary"
                icon={<CloseOutlined />}
              />
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  )
}

SkillSimpleView.propTypes = {
  skill: PropTypes.object
}

export default SkillSimpleView
