import { model, sting, belongsTo, attr } from 'services/model'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  name: yup.().required(),
  candidateProfile: yup.string().default(null),
  value: yup.number().default(null)
})

const CandidateSkill = model(
  'candidateSkill',
  {
    name: sting('name'),
    candidateProfile: belongsTo('candidateProfile'),
    value: attr('number')
  },
  validationSchema
)

export default CandidateSkill
