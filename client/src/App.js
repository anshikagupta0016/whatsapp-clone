import { GoogleOAuthProvider } from '@react-oauth/google';

import Messenger from "./components/Messenger";
import AccountProvider from './context/AccountProvider';

function App() {

  const clientId='488872520251-hm8dk3ctsh8mi1ntka9f1pq6qj9nldri.apps.googleusercontent.com'
  
  return (
    <GoogleOAuthProvider clientId={clientId}>
    <AccountProvider>
    <Messenger/>
    </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
