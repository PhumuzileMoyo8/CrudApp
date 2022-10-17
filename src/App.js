import { useState } from 'react';
import './App.css';

const users = [{ name: "Phumuzile", username: "Phumz" },
{ name: "Mallory", username: "Mal" },
{ name: "Kyle", username: "Kyle" },
{ name: "Jackson", username: "Jackson" },
{ name: "Usaid", username: "Usaid" },
];

function App() {
  const [Name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [userList, setUserList] = useState(users);

  const onSubmit = () => {
    setUserList([...users, {name: Name, username: userName},]);
    setName('');
    setUserName('');
};

  return (
    <div className='input'>
      <div className='form'>
        <label>Name: </label>
        <input type="text" name="name" onChange={(e) => {setName(e.target.value)}}/>
        <label>UserName: </label>
        <input type="text" name="username" onChange={(e) => {setUserName(e.target.value)}}/>
        <button onClick={onSubmit}>Submit</button>

        {userList.map((key) => {
            return (<div className='users'>
              <h3>{key.name}</h3>
              <p>
              UserName: {key.username}
              </p>
             </div>
            )
        }
        )}
        </div>
    </div>
  );
}

export default App;
