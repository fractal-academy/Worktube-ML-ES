import { PageWrapper, Container, Row, Col, Spin } from '@qonsoll/react-design'
import { CandidateProfileList } from 'domains/CandidateProfile/components'
import { useTranslations } from 'contexts/Translation'
import { HeaderBreadcrumbs } from 'components'
import { useCandidateProfiles } from 'domains/CandidateProfile/hooks'
import { useHistory } from 'react-router-dom'

export default function CandidateProfilesAll() {
  const { t } = useTranslations()
  const history = useHistory()
  const headingProps = {
    title: t('Candidate Profiles')
  }
  const [candidateProfiles, loading] = useCandidateProfiles({
    orderBy: 'user'
  })

  return (
    <PageWrapper
      onBack={() => history.push('/dashboard')}
      breadcrumbs={<HeaderBreadcrumbs />}
      headingProps={headingProps}
    >
      <Container>
        <Row marginTop="48px">
          {loading ? (
            <Col>
              <Spin />
            </Col>
          ) : (
            <Col>
              <CandidateProfileList candidateProfiles={candidateProfiles} />
            </Col>
          )}
        </Row>
      </Container>
    </PageWrapper>
  )
}
