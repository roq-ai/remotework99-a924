import * as yup from 'yup';

export const jobValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  key_skills: yup.string().required(),
  company_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
