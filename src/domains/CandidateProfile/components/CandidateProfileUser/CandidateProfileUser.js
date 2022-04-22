import { Row, Col, Text } from '@qonsoll/react-design'
import { UserSimpleView } from '../../../User/components'
import { useCandidateProfileUser } from '../../hooks'
import PropTypes from 'prop-types'

export default function CandidateProfileUser(props) {
  const [user, loading, error] = useCandidateProfileUser(props.candidateProfile)
  return (
    <Row noGutters>
      {loading ? (
        <Col>
          <Text>Loading...</Text>
        </Col>
      ) : null}
      {!loading ? (
        <Col>
          <UserSimpleView user={user} />
        </Col>
      ) : null}
      {error ? (
        <Col>
          <Text>{JSON.stringify(error)}</Text>
        </Col>
      ) : null}
    </Row>
  )
}

CandidateProfileUser.propTypes = {
  candidateProfile: PropTypes.object.isRequired
}
