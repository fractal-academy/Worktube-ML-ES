import { Row, Col, Card, Box, Button, Text } from '@qonsoll/react-design'
import { PlusOutlined } from '@ant-design/icons'
import LanguageSimpleView from '../LanguageSimpleView'
import { Empty } from 'components'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useTranslations } from 'contexts/Translation'

const LanguageList = (props) => {
  const history = useHistory()
  const { t } = useTranslations()
  const onCreateButtonClick = () => history.push('/language/create')

  return (
    <Row ml={-16} mr={-16}>
      {props?.languages?.length > 0 ? (
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
                  <Text variant="body1">{t('Add language')}</Text>
                </Col>
              </Row>
            </Box>
          </Col>
          {props?.languages?.map((language, index) => (
            <Col key={language?._id || index} cw={[12, 6, 4]}>
              <Card mb={32}>
                <LanguageSimpleView language={language} />
              </Card>
            </Col>
          ))}
        </>
      ) : (
        <Empty
          message={t('No Languages')}
          onCreateButtonClick={onCreateButtonClick}
        />
      )}
    </Row>
  )
}

LanguageList.propTypes = {
  languages: PropTypes.array
}

export default LanguageList
