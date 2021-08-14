import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../production-javascript/FormikControl';

function RegistrationForm() {
   const initialValues = {
      email: '',
      password: '',
      confirmPassword: '',
      selectMoc: '',
      phoneNumber: '',
   };

   const onSubmit = (values) => {
      console.log(values);
   };

   const validationSchema = Yup.object({
      email: Yup.string().email('Enter valid email').required('required'),
      password: Yup.string().required('required').min('2'),
      confirmPassword: Yup.string()
         .oneOf([Yup.ref('password'), ''], 'password should match')
         .required('required'),
      selectMoc: Yup.string().required('required'),
      phoneNumber: Yup.string().when('selectMoc', {
         is: 'phonemoc',
         then: Yup.string().required('required'),
      }),
   });

   const radioOptions = [
      { key: 'Email', value: 'emailmoc' },
      { key: 'Telephone', value: 'phonemoc' },
   ];

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
               <FormikControl
                  control='input'
                  name='confirmPassword'
                  type='password'
                  label='Confirm password'
                  showErrorMessage={true}
               />
               <FormikControl
                  control='radiobox'
                  name='selectMoc'
                  label='Mode of contact'
                  options={radioOptions}
                  showErrorMessage={true}
               />
               <FormikControl
                  control='input'
                  name='phoneNumber'
                  type='text'
                  label='Phone Number'
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

export default RegistrationForm;
