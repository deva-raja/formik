import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

function YoutubeForm() {
   const [formValues, setFormValues] = useState(null);
   const initialValues = {
      name: '',
      email: '',
      channel: '',
      comments: '',
      address: '',
      social: {
         facebook: '',
         google: '',
      },
      phoneNumber: ['', ''],
      phone: [''],
   };

   const savedValues = {
      name: 'vinu',
      email: 'vinujam@gmail.com',
      channel: 'vinureact',
      comments: 'great',
      address: 'Maryland St Kochi',
      social: {
         facebook: '',
         google: '',
      },
      phoneNumber: ['', ''],
      phone: [''],
   };
   const onSubmit = (values, { setSubmitting, resetForm }) => {
      setSubmitting(false);
      resetForm();
   };

   const validationSchema = Yup.object({
      name: Yup.string().required('required!'),
      email: Yup.string().required('required').email('Enter valid email mahn'),
      channel: Yup.string().required('required'),
   });

   const validateComments = (value) => {
      let error;
      if (!value) {
         error = 'Required Mister';
      }
      return error;
   };

   return (
      <Formik
         initialValues={formValues || initialValues}
         onSubmit={onSubmit}
         validationSchema={validationSchema}
         enableReinitialize
      >
         {(formik) => {
            console.log('Formik Props', formik);
            return (
               <Form>
                  <div className='form-control'>
                     <label htmlFor='name'>Name</label>
                     <Field type='text' id='name' name='name' />
                     <ErrorMessage name='name' component={TextError} />
                  </div>

                  <div className='form-control'>
                     <label htmlFor='email'>Email</label>
                     <Field type='email' id='email' name='email' />
                     <ErrorMessage name='email' component={TextError} />
                  </div>

                  <div className='form-control'>
                     <label htmlFor='channel'>Channel</label>
                     <Field type='text' id='channel' name='channel' />
                     <ErrorMessage name='channel' component={TextError} />
                  </div>

                  <div className='form-control'>
                     <label htmlFor='comments'>Comments</label>
                     <Field
                        as='textarea'
                        type='text'
                        validate={validateComments}
                        id='comments'
                        name='comments'
                     />
                     <ErrorMessage name='comments' component={TextError} />
                  </div>

                  <div className='form-control'>
                     <label htmlFor='address'>Address</label>

                     <FastField name='address'>
                        {(props) => {
                           console.log('rendered');
                           const { field, meta } = props;
                           return (
                              <>
                                 <input type='text' id='address' {...field} />
                                 {meta.touched && meta.error ? (
                                    <div className='errors'>{meta.error}</div>
                                 ) : null}
                              </>
                           );
                        }}
                     </FastField>
                  </div>

                  <div className='form-control'>
                     <label htmlFor='facebook'>Facebook</label>
                     <Field type='text' id='facebook' name='social.facebook' />
                     <ErrorMessage name='social.facebook' component={TextError} />
                  </div>

                  <div className='form-control'>
                     <label htmlFor='google'>Google</label>
                     <Field type='text' id='google' name='social.google' />
                     <ErrorMessage name='social.google' component={TextError} />
                  </div>

                  <div className='form-control'>
                     <label htmlFor='primary-phone'>primary-phone</label>
                     <Field type='text' id='primary-phone' name='phoneNumber[0]' />
                     <ErrorMessage name='primary-phone' component={TextError} />
                  </div>

                  <div className='form-control'>
                     <label htmlFor='secondary-phone'>secondary-phone</label>
                     <Field type='text' id='secondary-phone' name='phoneNumber[1]' />
                     <ErrorMessage name='secondary-phone' component={TextError} />
                  </div>

                  <div className='form-control'>
                     <label htmlFor='phone'>phone</label>
                     <FieldArray name='phone'>
                        {(fieldArrayProps) => {
                           const { remove, push, form } = fieldArrayProps;
                           const { values } = form;
                           const { phone } = values;
                           return (
                              <div>
                                 {phone.map((phoneNumber, index) => {
                                    return (
                                       <div>
                                          <Field key={index} name={`phone[${index}]`} />
                                          {index > 0 && (
                                             <button onClick={() => remove(index)}>-</button>
                                          )}
                                          <button onClick={() => push('')}>+</button>
                                       </div>
                                    );
                                 })}
                              </div>
                           );
                        }}
                     </FieldArray>
                  </div>

                  {/* <button type='button' onClick={() => formik.validateForm()}>
                     ValidateAll
                  </button>
                  <button type='button' onClick={() => formik.validateField('comments')}>
                     ValidateComments
                  </button>
                  <button type='button' onClick={() => formik.setFieldTouched('comments')}>
                     TouchedComments
                  </button>
                  <button
                     type='button'
                     onClick={() =>
                        formik.setTouched({
                           name: true,
                           email: true,
                           channel: true,
                        })
                     }
                  >
                     TouchedAll
                  </button> */}
                  <button type='button' onClick={() => setFormValues(savedValues)}>
                     Api Call
                  </button>
                  <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>
                     Submit
                  </button>
               </Form>
            );
         }}
      </Formik>
   );
}

export default YoutubeForm;
