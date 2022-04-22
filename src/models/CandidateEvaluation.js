import { model, belongsTo, attr } from 'services/model'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  candidateProfile: yup.string().default(null),
  evaluation: yup.string().default(null),
  value: yup.number().default(null)
})

const CandidateEvaluation = model(
  'candidateEvaluation',
  {
    candidateProfile: belongsTo('candidateProfile'),
    evaluation: belongsTo('evaluation'),
    value: attr('number')
  },
  validationSchema
)

export default CandidateEvaluation
