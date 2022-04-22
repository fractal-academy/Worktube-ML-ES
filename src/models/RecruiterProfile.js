import { model, belongsTo } from 'services/model'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  user: yup.string().default(null)
})

const RecruiterProfile = model(
  'recruiterProfile',
  {
    user: belongsTo('user')
  },
  validationSchema
)

export default RecruiterProfile
