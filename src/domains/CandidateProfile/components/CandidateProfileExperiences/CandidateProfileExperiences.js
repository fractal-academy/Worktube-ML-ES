import { Container, Row, Col, Text } from '@qonsoll/react-design'
import { ExperienceList } from '../../../Experience/components'
import { useCandidateProfileExperiences } from '../../hooks'
import PropTypes from 'prop-types'

export default function CandidateProfileExperiences(props) {
  const [experience, loading, error] = useCandidateProfileExperiences(
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
        {!loading && experience?.length ? (
          <Col>
            <ExperienceList experience={experience} />
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

CandidateProfileExperiences.propTypes = {
  candidateProfile: PropTypes.object.isRequired
}
