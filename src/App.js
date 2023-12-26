import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chat from './components/Chat';
import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase-config';

function App() {
  const [user, setUser] = useState(null);

  const handleSignIn = () => {
    signInWithPopup(auth, provider).then(result => setUser(result._tokenResponse)).catch(error => console.log(error))
  };

  return (
    <>
      <div className='App'>
        {user ? (
          <Chat user={user} />
        ) : (
          <div className='p-5 text-center'>
            <div>
              <img
                src='https://i.pinimg.com/550x/90/d8/51/90d8514fbdefd85d69b86389e3b6d25d.jpg'
                alt="logo"
                width={400}
                height={400}
                className='pr-5'
                style={{ borderRadius: 200 }}
              />
            </div>
            <div>
              <button className="btn btn-primary" style={{ marginTop: "50px" }} onClick={handleSignIn}>Login</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
