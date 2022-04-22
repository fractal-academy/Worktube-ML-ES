import { model, attr } from 'services/model'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  name: yup.string().default(null),
  value: yup.number().default(null)
})

const Evaluation = model(
  'evaluation',
  {
    name: attr('string'),
    value: attr('number')
  },
  validationSchema
)

export default Evaluation
