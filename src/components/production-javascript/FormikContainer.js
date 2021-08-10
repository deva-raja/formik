import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

function FormikContainer() {
   const initialValues = {
      email: '',
      description: '',
      selectOption: '',
      radioOption: '',
      checkboxOption: [],
      selectedDate: null,
   };

   const dropDownOptions = [
      { key: 'Select an option ', value: '' },
      { key: 'Option 1', value: 'option1' },
      { key: 'Option 2', value: 'option2' },
      { key: 'Option 3', value: 'option3' },
   ];

   const radioOptions = [
      { key: 'Option 1', value: 'roption1' },
      { key: 'Option 2', value: 'roption2' },
      { key: 'Option 3', value: 'roption3' },
   ];

   const checkboxOptions = [
      { key: 'Option 1', value: 'coption1' },
      { key: 'Option 2', value: 'coption2' },
      { key: 'Option 3', value: 'coption3' },
   ];

   const validationSchema = Yup.object({
      email: Yup.string().required('Required').email('Enter valid email'),
      description: Yup.string().required('Required'),
      selectOption: Yup.string().required('Required'),
      radioOption: Yup.string().required('Required'),
      checkboxOption: Yup.array().min(1, 'Required'),
      selectedDate: Yup.date().required('Required').nullable(),
   });

   const onSubmit = (values) => console.log(values, 'Form Values');

   return (
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
         {(formik) => {
            return (
               <Form>
                  <FormikControl
                     control='input'
                     name='email'
                     type='email'
                     label='Enter Email'
                     showErrorMessage={true}
                  />

                  <FormikControl
                     control='textarea'
                     name='description'
                     label='Description'
                     showErrorMessage={true}
                  />

                  <FormikControl
                     control='select'
                     name='selectOption'
                     label='Select DropDown option'
                     options={dropDownOptions}
                     showErrorMessage={true}
                  />

                  <FormikControl
                     control='radiobox'
                     name='radioOption'
                     label='Select Radio Option'
                     options={radioOptions}
                     showErrorMessage={true}
                  />

                  <FormikControl
                     control='checkbox'
                     name='checkboxOption'
                     label='Select Checkbox Option'
                     options={checkboxOptions}
                     showErrorMessage={true}
                  />

                  <FormikControl
                     control='date'
                     name='selectedDate'
                     label='Select Date'
                     showErrorMessage={true}
                  />
                  <button type='submit'>submit</button>
               </Form>
            );
         }}
      </Formik>
   );
}

export default FormikContainer;
