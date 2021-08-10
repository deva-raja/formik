import './App.css';
import YoutubeForm from './components/dev-training/YoutubeForm';
import FormikContainer from './components/production-javascript/FormikContainer';

function App() {
   return (
      <div className='App'>
         <div className='youtubeform'>
            {/* dev training in YoutubeForm component */}
            <FormikContainer />
         </div>
      </div>
   );
}

export default App;
