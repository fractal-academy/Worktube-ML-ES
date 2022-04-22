import { Container, Row, Col, Text } from '@qonsoll/react-design'
import { LanguageList } from '../../../Language/components'
import { useCandidateProfileLanguages } from '../../hooks'
import PropTypes from 'prop-types'

export default function CandidateProfileLanguages(props) {
  const [languages, loading, error] = useCandidateProfileLanguages(
    props.candidateProfile
  )
  return (
    <Container>
      <Row noGutters>
        {loading ? (
          <Col>
            <Text>Loading...</Text>
          </Col>
        ) : null}
        {!loading && languages?.length ? (
          <Col>
            <LanguageList languages={languages} />
          </Col>
        ) : null}
        {error ? (
          <Col>
            <Text>{JSON.stringify(error)}</Text>
          </Col>
        ) : null}
      </Row>
    </Container>
  )
}

CandidateProfileLanguages.propTypes = {
  candidateProfile: PropTypes.object.isRequired
}
