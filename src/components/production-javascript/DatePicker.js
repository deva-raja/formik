import { ErrorMessage, Field } from 'formik';
import TextError from '../dev-training/TextError';
import React from 'react';

function DatePicker({ name, label, showErrorMessage, ...rest }) {
   return (
      <div className='form-control'>
         <Field name={name} {...rest}>
            {({ field, form }) => {
               return (
                  // prettier-ignore
                  <DatePicker
                     selected={field.values}
                     onChange={(date) => form.setFieldValue(name,date)} 
                  />
               );
            }}
         </Field>
         {showErrorMessage && <ErrorMessage name={name} component={TextError} />}
      </div>
   );
}

export default DatePicker;
