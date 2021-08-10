import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import RadioButtons from './RadioButtons';
import CheckBoxGroup from './CheckBoxGroup';
import DatePicker from './DatePicker';

function FormikControl(props) {
   const { control, ...rest } = props;
   switch (control) {
      case 'input':
         return <Input {...rest} />;
      case 'textarea':
         return <TextArea {...rest} />;
      case 'select':
         return <Select {...rest} />;
      case 'radiobox':
         return <RadioButtons {...rest} />;
      case 'checkbox':
         return <CheckBoxGroup {...rest} />;
      case 'date':
         return <DatePicker />;
      default:
         return null;
   }
}

export default FormikControl;