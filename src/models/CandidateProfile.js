import { model, belongsTo, hasMany, attr } from 'services/model'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  user: yup.string().default(null),
  languages: yup.array().default(null),
  experience: yup.array().default(null),
  education: yup.array().default(null),
  skills: yup.array().default(null),
  postCode: yup.number().default(null),
  city: yup.string().default(null),
  country: yup.string().default(null),
  phoneNumber: yup.string().default(null)
})

const CandidateProfile = model(
  'candidateProfile',
  {
    user: belongsTo('user'),
    languages: hasMany('language'),
    experience: hasMany('experience'),
    education: hasMany('education'),
    skills: hasMany('skill'),
    postCode: attr('number'),
    city: attr('string'),
    country: attr('string'),
    phoneNumber: attr('string')
  },
  validationSchema
)

export default CandidateProfile
