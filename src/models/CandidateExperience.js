import { model, attr, belongsTo } from 'services/model'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  start: yup.date().required(),
  end: yup.date().default(null),
  isCurrent: yup.boolean().default(null),
  name: yup.string().required(),
  candidateId: yup.string().default(null)
})

const CandidateExperience = model(
  'candidateExperience',
  {
    start: attr('date'),
    end: attr('date'),
    isCurrent: attr('boolean'),
    name: attr('string'),
    candidateId: belongsTo('candidate')
  },
  validationSchema
)

export default CandidateExperience
