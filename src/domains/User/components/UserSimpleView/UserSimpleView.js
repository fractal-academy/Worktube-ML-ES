import { Button, Col, Container, Row, Text, Title } from '@qonsoll/react-design'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { Form } from 'antd'
import { UserSimpleForm } from '../'
import PropTypes from 'prop-types'
import { useSimpleFormActions } from 'hooks'
import { useState } from 'react'
import { CardDropdown } from 'components'
import { useTranslations } from 'contexts/Translation'

const UserSimpleView = (props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [form] = Form.useForm()
  const { t } = useTranslations()

  const { handleEdit, handleCancel, handleSave, handleDelete } =
    useSimpleFormActions({
      form,
      changeStateAction: setIsEditing,
      document: props.user,
      collectionName: 'users'
    })

  return (
    <Container>
      {!isEditing ? (
        <Row>
          <Col>
            <Row mb="12px" flex="1">
              <Col cw={9}>
                <Title level={2}>
                  {t(props.user?.title || props.user?.name)}
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
                <Title level={5}>{t('role')}</Title>
              </Col>
              <Col h="right">
                <Text>{props.user?.role}</Text>
              </Col>
            </Row>
            <Row borderBottom="1px solid black" mb="8px">
              <Col>
                <Title level={5}>{t('email')}</Title>
              </Col>
              <Col h="right">
                <Text>{props.user?.email}</Text>
              </Col>
            </Row>
            <Row borderBottom="1px solid black" mb="8px">
              <Col>
                <Title level={5}>{t('firstName')}</Title>
              </Col>
              <Col h="right">
                <Text>{props.user?.firstName}</Text>
              </Col>
            </Row>
            <Row borderBottom="1px solid black" mb="8px">
              <Col>
                <Title level={5}>{t('lastName')}</Title>
              </Col>
              <Col h="right">
                <Text>{props.user?.lastName}</Text>
              </Col>
            </Row>
            <Row>
              <Col h="left">
                <Title level={5}>
                  {`${t('Created by')}: ${props.user?._createdBy}`}
                </Title>
              </Col>
              <Col h="right">
                <Text>
                  {`${t('Created at')}: ${props.user?._createdAt
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
            <UserSimpleForm
              form={form}
              initialValues={props.user}
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

UserSimpleView.propTypes = {
  user: PropTypes.object
}

export default UserSimpleView
