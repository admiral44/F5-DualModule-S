import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import { IssuePanel } from './Components/IssuePanel';
import { AdminPage } from './Components/AdminPage';


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    invoke('getText', { example: 'my-invoke-variable' }).then(setData);
  }, []);

  // console.log("0th Data is here : ", data)
  if (data == null) {
    // console.log("1st Data is here : ", data)
    return "Loading..";
  } else {
    // console.log("2nd Data is here : ", data)
    switch (data) {
      case 'Issue-Panel':
        return <IssuePanel />;
        break;
      case 'Admin-Page':
        return <AdminPage />;
        break;
      default:
        return <div>Data Not Found..</div>;
    }
  }

}

export default App;
