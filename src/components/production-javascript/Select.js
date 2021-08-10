import { ErrorMessage, Field } from 'formik';
import TextError from '../dev-training/TextError';

function Select({ name, label, options, showErrorMessage, ...rest }) {
   return (
      <div className='form-control'>
         <label htmlFor={name}>{label}</label>
         <Field as='select' name={name} id={name} {...rest}>
            {options.map((option) => {
               return (
                  <option key={option.value} value={option.value}>
                     {option.key}
                  </option>
               );
            })}
         </Field>
         {showErrorMessage && <ErrorMessage name={name} component={TextError} />}
      </div>
   );
}

export default Select;
