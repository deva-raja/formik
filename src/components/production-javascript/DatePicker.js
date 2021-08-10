import { ErrorMessage, Field } from 'formik';
import TextError from '../dev-training/TextError';
import React from 'react';

import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePicker({ name, label, showErrorMessage, ...rest }) {
   return (
      <div className='form-control'>
         <Field name={name}>
            {({ field, form }) => {
               const { value } = field;
               const { setFieldValue } = form;
               return (
                  <DateView
                     id={name}
                     {...field}
                     {...rest}
                     selected={value}
                     onChange={(date) => setFieldValue(name, date)}
                  />
               );
            }}
         </Field>
         {showErrorMessage && <ErrorMessage name={name} component={TextError} />}
      </div>
   );
}

export default DatePicker;
