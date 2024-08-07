
import './App.css';
// import { useState } from 'react';

function App() {

  // const[ email, setEmail ] = useState("");
  // const[ subject, setSubject ] = useState("");
  // const[ message, setMessage ] = useState("");
  // const [ master, setMaster] = useState([]);

  // const sendEmail=async () => {
  //     let dataSend = [
  //       email, subject, message
  //     ]

  //     setMaster([...dataSend, master]);
  // }

    return (
    <div className="App">
      <header className="App-header">
        {/* <form>
            <div>
              <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="email" />
            </div>
            <div>
              <input type="text" onChange={(e) => setSubject(e.target.value)} name="subject" placeholder="subject" />
            </div>
            <div>
              <input type="text" onChange={(e) => setMessage(e.target.value)} name="message" placeholder='message' />
            </div>
            <button type="button" onClick={() => sendEmail()}>submit</button>
        </form>
        <div>{master && master.map((data, index) => {
          return (
            <div className="">
              <span key={index}>{data}</span>
            </div>
          )
        })}</div> */}
        <div class="absolute inset-0 bg-black opacity-15"></div>
        <h1 className="border px-12 py-3 rounded-lg animate-pulse mb-24">Coming Soon....</h1>
      </header>
    </div>
  );
}

export default App;
