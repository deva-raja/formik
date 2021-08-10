import { ErrorMessage, Field } from 'formik';
import TextError from '../dev-training/TextError';

function TextArea({ name, label, showErrorMessage, ...rest }) {
   return (
      <div className='form-control'>
         <label htmlFor={name}>{label}</label>
         <Field as='textarea' name={name} id={name} {...rest} />
         {showErrorMessage && <ErrorMessage name={name} component={TextError} />}
      </div>
   );
}

export default TextArea;
