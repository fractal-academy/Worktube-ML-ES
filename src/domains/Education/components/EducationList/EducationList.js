import { Row, Col, Card, Box, Button, Text } from '@qonsoll/react-design'
import { PlusOutlined } from '@ant-design/icons'
import EducationSimpleView from '../EducationSimpleView'
import { Empty } from 'components'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useTranslations } from 'contexts/Translation'

const EducationList = (props) => {
  const history = useHistory()
  const { t } = useTranslations()
  const onCreateButtonClick = () => history.push('/education/create')

  return (
    <Row ml={-16} mr={-16}>
      {props?.educations?.length > 0 ? (
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
                  <Text variant="body1">{t('Add education')}</Text>
                </Col>
              </Row>
            </Box>
          </Col>
          {props?.educations?.map((education, index) => (
            <Col key={education?._id || index} cw={[12, 6, 4]}>
              <Card mb={32}>
                <EducationSimpleView education={education} />
              </Card>
            </Col>
          ))}
        </>
      ) : (
        <Empty
          message={t('No Educations')}
          onCreateButtonClick={onCreateButtonClick}
        />
      )}
    </Row>
  )
}

EducationList.propTypes = {
  educations: PropTypes.array
}

export default EducationList
