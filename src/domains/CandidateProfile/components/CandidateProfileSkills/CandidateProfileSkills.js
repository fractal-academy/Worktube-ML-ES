import { Container, Row, Col, Text } from '@qonsoll/react-design'
import { SkillList } from '../../../Skill/components'
import { useCandidateProfileSkills } from '../../hooks'
import PropTypes from 'prop-types'

export default function CandidateProfileSkills(props) {
  const [skills, loading, error] = useCandidateProfileSkills(
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
        {!loading && skills?.length ? (
          <Col>
            <SkillList skills={skills} />
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

CandidateProfileSkills.propTypes = {
  candidateProfile: PropTypes.object.isRequired
}
