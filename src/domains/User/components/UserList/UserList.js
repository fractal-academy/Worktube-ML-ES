import { Row, Col, Card, Box, Button, Text } from '@qonsoll/react-design'
import { PlusOutlined } from '@ant-design/icons'
import UserSimpleView from '../UserSimpleView'
import { Empty } from 'components'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useTranslations } from 'contexts/Translation'

const UserList = (props) => {
  const history = useHistory()
  const { t } = useTranslations()
  const onCreateButtonClick = () => history.push('/user/create')

  return (
    <Row ml={-16} mr={-16}>
      {props?.users?.length > 0 ? (
        <>
          <Col pb="30px" v="center" cw={4} display={'flex'}>
            <Box
              display={'flex'}
              v="center"
              h="center"
              justifyContent="center"
              py="12px"
              height="100%"
              onClick={onCreateButtonClick}
              cursor={'pointer'}
              borderRadius="10px"
              border="1px dashed var(--ql-color-dark-t-lighten3)"
            >
              <Row v="center">
                <Col h="center">
                  <Button
                    type="link"
                    onClick={onCreateButtonClick}
                    icon={<PlusOutlined />}
                  />
                  <Text variant="body1">{t('Add user')}</Text>
                </Col>
              </Row>
            </Box>
          </Col>
          {props?.users?.map((user, index) => (
            <Col key={user?._id || index} cw={[12, 6, 4]}>
              <Card mb={32}>
                <UserSimpleView user={user} />
              </Card>
            </Col>
          ))}
        </>
      ) : (
        <Empty
          message={t('No Users')}
          onCreateButtonClick={onCreateButtonClick}
        />
      )}
    </Row>
  )
}

UserList.propTypes = {
  users: PropTypes.array
}

export default UserList
