import './App.css';
import YoutubeForm from './components/dev-training/YoutubeForm';
import FormikContainer from './components/production-javascript/FormikContainer';
import SimpleLoginForm from './components/real-world-forms/SimpleLoginForm';
import RegistrationForm from './components/real-world-forms/RegistrationForm';

function App() {
   return (
      <div className='App'>
         <div className='youtubeform'>
            {/* dev training in YoutubeForm component */}
            {/* <YoutubeForm /> */}
            {/* <FormikContainer /> */}
            {/* <SimpleLoginForm /> */}
            <RegistrationForm />
         </div>
      </div>
   );
}

export default App;
