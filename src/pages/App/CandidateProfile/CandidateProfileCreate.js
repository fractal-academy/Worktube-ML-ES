import { PageWrapper, Container, Row, Col } from '@qonsoll/react-design'
import { CandidateProfileAdvancedForm } from 'domains/CandidateProfile/components'
import { useTranslations } from 'contexts/Translation'
import { HeaderBreadcrumbs } from 'components'
import { useHistory } from 'react-router-dom'

export default function CandidateProfileCreate() {
  const { t } = useTranslations()
  const history = useHistory()
  const headingProps = {
    title: t('Create candidate Profile')
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
            <CandidateProfileAdvancedForm />
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  )
}
