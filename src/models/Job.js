import { model, belongsTo, attr, hasMany } from 'services/model'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  rectuiterProfile: yup.string().default(null),
  starus: yup.string().default(null),
  candidateProfiles: yup.array().default(null),
  evalions: yup.array().default(null),
  candidateEvaluations: yup.array().default(null)
})

const Job = model(
  'job',
  {
    rectuiterProfile: belongsTo('rectuiterProfile'),
    starus: attr('string'),
    candidateProfiles: hasMany('candidateProfile'),
    evalions: hasMany('evalion'),
    candidateEvaluations: hasMany('candidateEvaluation')
  },
  validationSchema
)

export default Job
