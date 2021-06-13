// import { withAuthenticator } from '@aws-amplify/ui-react'
// import {  AmplifySignOut } from '@aws-amplify/ui-react';
// import Amplify from 'aws-amplify';
// import awsConfig from './aws-exports';
// Amplify.configure(awsConfig);
//import Login from './Login'
import Auth4 from "./auths/Auth4";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Auth4 />
      </header>
    </div>
  );
}
export default App;
//export default withAuthenticator(App)
