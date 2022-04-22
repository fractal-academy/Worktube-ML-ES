import { model, attr } from 'services/model'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  name: yup.string().required()
})

const Skill = model(
  'skill',
  {
    name: attr('string')
  },
  validationSchema
)

export default Skill
