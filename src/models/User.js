import { model, attr, belongsTo } from 'services/model'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  role: yup.string().required(),
  email: yup.string().required(),
  firstName: yup.string().default(null),
  lastName: yup.string().required(),
  candidateProfile: yup.string().default(null),
  recruiterProfile: yup.string().default(null)
})

const User = model(
  'user',
  {
    role: attr('string'),
    email: attr('string'),
    firstName: attr('string'),
    lastName: attr('string'),
    candidateProfile: belongsTo('candidateProfile'),
    recruiterProfile: belongsTo('recruiterProfile')
  },
  validationSchema
)

export default User
