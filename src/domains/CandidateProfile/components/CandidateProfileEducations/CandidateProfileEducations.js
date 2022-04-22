import { Container, Row, Col, Text } from '@qonsoll/react-design'
import { EducationList } from '../../../Education/components'
import { useCandidateProfileEducations } from '../../hooks'
import PropTypes from 'prop-types'

export default function CandidateProfileEducations(props) {
  const [education, loading, error] = useCandidateProfileEducations(
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
        {!loading && education?.length ? (
          <Col>
            <EducationList education={education} />
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

CandidateProfileEducations.propTypes = {
  candidateProfile: PropTypes.object.isRequired
}
