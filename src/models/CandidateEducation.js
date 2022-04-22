import { model, belongsTo, attr } from 'services/model'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  education: yup.string().default(null),
  degree: yup.string().default(null),
  isCurrent: yup.boolean().default(null),
  start: yup.date().default(null),
  end: yup.date().default(null)
})

const CandidateEducation = model(
  'candidateEducation',
  {
    education: belongsTo('education'),
    degree: attr('string'),
    isCurrent: attr('boolean'),
    start: attr('date'),
    end: attr('date')
  },
  validationSchema
)

export default CandidateEducation
