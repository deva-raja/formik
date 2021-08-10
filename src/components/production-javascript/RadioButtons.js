import { ErrorMessage, Field } from 'formik';
import TextError from '../dev-training/TextError';
import React from 'react';

function RadioButtons({ name, label, options, showErrorMessage, ...rest }) {
   return (
      <div className='form-control'>
         <label htmlFor={name}>{label}</label>
         <Field name={name} id={name} {...rest}>
            {({ field }) => {
               return options.map((option) => (
                  <React.Fragment key={option.value}>
                     <input
                        type='radio'
                        id={option.value}
                        {...field}
                        value={option.value}
                        checked={field.value === option.value}
                     />
                     <label htmlFor={option.value}>{option.key}</label>
                  </React.Fragment>
               ));
            }}
         </Field>
         {showErrorMessage && <ErrorMessage name={name} component={TextError} />}
      </div>
   );
}

export default RadioButtons;
