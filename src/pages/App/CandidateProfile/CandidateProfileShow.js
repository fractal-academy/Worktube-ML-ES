import { PageWrapper, Container, Row, Col } from '@qonsoll/react-design'
import { CandidateProfileAdvancedView } from 'domains/CandidateProfile/components'
import { useTranslations } from 'contexts/Translation'
import { HeaderBreadcrumbs } from 'components'
import { useParams, useHistory } from 'react-router-dom'

export default function CandidateProfileShow() {
  const { t } = useTranslations()
  const history = useHistory()
  const params = useParams()
  const { candidateProfileId } = params
  const headingProps = {
    title: t(candidateProfileId)
  }

  return (
    <PageWrapper
      onBack={() => history.push('/dashboard')}
      breadcrumbs={<HeaderBreadcrumbs />}
      headingProps={headingProps}
    >
      <Container>
        <Row marginTop="48px">
          <Col>
            <CandidateProfileAdvancedView />
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  )
}
