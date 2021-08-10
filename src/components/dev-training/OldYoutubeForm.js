import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function OldYoutubeForm() {
   const initialValues = {
      name: '',
      email: '',
      channel: '',
   };

   const onSubmit = (values) => console.log(values);

   const validationSchema = Yup.object({
      name: Yup.string().required('required!'),
      email: Yup.string().required('required').email('Enter valid email mahn'),
      channel: Yup.string().required('required'),
   });

   const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema
   });

   console.log('visited', formik.touched);

   return (
      <div className='youtubeform'>
         <form onSubmit={formik.handleSubmit}>
            <div className='form-control'>
               <label htmlFor='name'>Name</label>
               <input
                  type='text'
                  id='name'
                  name='name'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
               />
               {formik.touched.name && formik.errors.name ? (
                  <div className='errors'>{formik.errors.name}</div>
               ) : null}
            </div>

            <div className='form-control'>
               <label htmlFor='email'>Email</label>
               <input
                  type='email'
                  id='email'
                  name='email'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
               />
               {formik.touched.email && formik.errors.email ? (
                  <div className='errors'>{formik.errors.email}</div>
               ) : null}
            </div>

            <div className='form-control'>
               <label htmlFor='channel'>Channel</label>
               <input
                  type='text'
                  id='channel'
                  name='channel'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.channel}
               />
               {formik.touched.channel && formik.errors.channel ? (
                  <div className='errors'>{formik.errors.channel}</div>
               ) : null}
            </div>

            <button type='submit'>Submit</button>
         </form>
      </div>
   );
}

export default OldYoutubeForm;
