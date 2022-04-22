import { Tabs } from 'antd'
import { StickyContainer, Sticky } from 'react-sticky'
import { Container, Row, Col, Text } from '@qonsoll/react-design'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import useDocument from 'hooks/useDocument'
import PropTypes from 'prop-types'
import CandidateProfileUser from '../CandidateProfileUser'
import CandidateProfileLanguages from '../CandidateProfileLanguages'
import CandidateProfileExperiences from '../CandidateProfileExperiences'
import CandidateProfileEducations from '../CandidateProfileEducations'
import CandidateProfileSkills from '../CandidateProfileSkills'

const TabPane = Tabs.TabPane

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar
        {...props}
        className="site-custom-tab-bar"
        style={{ ...style, zIndex: 1000, backgroundColor: '#faf8ff' }}
      />
    )}
  </Sticky>
)

const CandidateProfileAdvancedView = (props) => {
  const params = useParams()
  const history = useHistory()
  const location = useLocation()
  const { candidateProfileId } = params
  const [candidateProfile, loading] = useDocument({
    ref: `candidateProfiles/${candidateProfileId}`
  })

  const changeTab = (key) => {
    if (params) {
      const urlContext =
        candidateProfileId && `/candidateProfiles/${candidateProfileId}`
      history.push(`${urlContext}${key}`)
    }
  }

  return (
    <Container>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <Row>
          <Col>
            <Text>postCode:{candidateProfile?.postCode}</Text>
          </Col>
          <Col>
            <Text>city:{candidateProfile?.city}</Text>
          </Col>
          <Col>
            <Text>country:{candidateProfile?.country}</Text>
          </Col>
          <Col>
            <Text>phoneNumber:{candidateProfile?.phoneNumber}</Text>
          </Col>
        </Row>
      )}
      <Row>
        <Col>
          <StickyContainer>
            <Tabs
              defaultActiveKey={location.hash}
              onChange={changeTab}
              renderTabBar={renderTabBar}
            >
              <TabPane tab="User" key="#user">
                <CandidateProfileUser candidateProfile={candidateProfile} />
              </TabPane>
              <TabPane tab="Languages" key="#languages">
                <CandidateProfileLanguages
                  candidateProfile={candidateProfile}
                />
              </TabPane>
              <TabPane tab="Experiences" key="#experience">
                <CandidateProfileExperiences
                  candidateProfile={candidateProfile}
                />
              </TabPane>
              <TabPane tab="Educations" key="#education">
                <CandidateProfileEducations
                  candidateProfile={candidateProfile}
                />
              </TabPane>
              <TabPane tab="Skills" key="#skills">
                <CandidateProfileSkills candidateProfile={candidateProfile} />
              </TabPane>
            </Tabs>
          </StickyContainer>
        </Col>
      </Row>
    </Container>
  )
}

CandidateProfileAdvancedView.propTypes = {
  candidateProfile: PropTypes.object
}

export default CandidateProfileAdvancedView
