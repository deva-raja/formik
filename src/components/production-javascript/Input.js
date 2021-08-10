import { ErrorMessage, Field } from 'formik';
import TextError from '../dev-training/TextError';

function Input({ name, label, type,showErrorMessage, ...rest }) {
   return (
      <div className='form-control'>
         <label htmlFor={name}>{label}</label>
         <Field id={name} name={name} type={type} {...rest} />
         {showErrorMessage && <ErrorMessage name={name} component={TextError} />}
      </div>
   );
}

export default Input;
