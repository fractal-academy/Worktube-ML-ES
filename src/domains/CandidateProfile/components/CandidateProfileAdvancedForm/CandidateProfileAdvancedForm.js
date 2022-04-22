import { Button, Form, message } from 'antd'
import {
  createDocument,
  saveBelongsToRelationship,
  saveHasManyRelationship
} from 'services/firestore'

import CandidateProfileSimpleForm from '../CandidateProfileSimpleForm'
import { EducationListWithCreate } from '../../../Education/components'
import { ExperienceListWithCreate } from '../../../Experience/components'
import { LanguageListWithCreate } from '../../../Language/components'
import { SkillListWithCreate } from '../../../Skill/components'
import { UserSimpleForm } from '../../../User/components'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { useTranslations } from 'contexts/Translation'

const CandidateProfileAdvancedForm = (props) => {
  const { t } = useTranslations()
  const history = useHistory()
  const [form] = Form.useForm()
  const [userForm] = Form.useForm()
  const [languages, setLanguages] = useState([])
  const [experiences, setExperiences] = useState([])
  const [educations, setEducations] = useState([])
  const [skills, setSkills] = useState([])

  const onFinish = async () => {
    createDocument('candidateProfiles', {
      ...form.getFieldsValue(),
      user: await saveBelongsToRelationship('users', userForm.getFieldsValue()),
      languages: await saveHasManyRelationship('languages', languages),
      experiences: await saveHasManyRelationship('experiences', experiences),
      educations: await saveHasManyRelationship('educations', educations),
      skills: await saveHasManyRelationship('skills', skills)
    }).then(() => {
      message.success('CandidateProfile created successfully')
      history.push('/candidateProfiles')
    })
  }

  const onReset = () => {
    form.resetFields()
    setLanguages([])
    setExperiences([])
    setEducations([])
    setSkills([])
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <CandidateProfileSimpleForm form={form} />
      <UserSimpleForm form={userForm} />
      <LanguageListWithCreate
        languages={languages}
        setLanguages={setLanguages}
      />
      <ExperienceListWithCreate
        experiences={experiences}
        setExperiences={setExperiences}
      />
      <EducationListWithCreate
        educations={educations}
        setEducations={setEducations}
      />
      <SkillListWithCreate skills={skills} setSkills={setSkills} />
      <Form.Item>
        <Button type="primary" onClick={onFinish}>
          {t('Submit')}
        </Button>
        <Button htmlType="button" onClick={onReset}>
          {t('Reset')}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default CandidateProfileAdvancedForm
