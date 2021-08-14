import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../production-javascript/FormikControl';

function SimpleLoginForm() {
   const initialValues = {
      email: '',
      password: '',
   };

   const onSubmit = (values) => {
      console.log(values);
   };

   const validationSchema = Yup.object({
      email: Yup.string().email('Enter valid email').required('required'),
      password: Yup.string().required('required').min('2'),
   });

   return (
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
         {({ isValid }) => (
            <Form>
               <FormikControl
                  control='input'
                  name='email'
                  type='email'
                  label='Enter Email'
                  showErrorMessage={true}
               />
               <FormikControl
                  control='input'
                  name='password'
                  type='password'
                  label='Enter password'
                  showErrorMessage={true}
               />
               <button type='submit' disabled={!isValid}>
                  Submit
               </button>
            </Form>
         )}
      </Formik>
   );
}

export default SimpleLoginForm;
