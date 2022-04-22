import { Row, Col, Card, Box, Button, Text } from '@qonsoll/react-design'
import { PlusOutlined } from '@ant-design/icons'
import ExperienceSimpleView from '../ExperienceSimpleView'
import { Empty } from 'components'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useTranslations } from 'contexts/Translation'

const ExperienceList = (props) => {
  const history = useHistory()
  const { t } = useTranslations()
  const onCreateButtonClick = () => history.push('/experience/create')

  return (
    <Row ml={-16} mr={-16}>
      {props?.experiences?.length > 0 ? (
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
                  <Text variant="body1">{t('Add experience')}</Text>
                </Col>
              </Row>
            </Box>
          </Col>
          {props?.experiences?.map((experience, index) => (
            <Col key={experience?._id || index} cw={[12, 6, 4]}>
              <Card mb={32}>
                <ExperienceSimpleView experience={experience} />
              </Card>
            </Col>
          ))}
        </>
      ) : (
        <Empty
          message={t('No Experiences')}
          onCreateButtonClick={onCreateButtonClick}
        />
      )}
    </Row>
  )
}

ExperienceList.propTypes = {
  experiences: PropTypes.array
}

export default ExperienceList
