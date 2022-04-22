import { model, sting } from 'services/model'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  name: yup.().required()
})

const Education = model(
  'education',
  {
    name: sting('name')
  },
  validationSchema
)

export default Education
