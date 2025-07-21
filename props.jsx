import React, { useState } from 'react'
function App() {
  const [nickname, setNickname] = useState('Dear')
  const user = {
    name: "Bhavneet",
    info: "MCA from KUK"
  }
  let age = 22
  function greet() {
    console.log("hello")
  }
  return (
    <>
      <UserDetails userDetails={user} data2={age} fun={greet}
        name={nickname} setname={setNickname} />
    </>
  )
}
export default App
function UserDetails({ userDetails, data2, fun, name, setname }) {
  return (
    <div>
      <h1>Hello {name}</h1>
      <UserCard data={userDetails} setname={setname} />
      <h3>My age: {data2}</h3>
      <button onClick={() => fun()}>Say Hello</button>
    </div>
  )
}
function UserCard({ data, setname }) {
  function updateName() {
    setname("Bhavneet")
  }
  return (
    <>
      <h2>Name: {data.name}</h2>
      <h2>Bio: {data.info}</h2>
      <button onClick={updateName}>Click Me</button>
    </>
  )
}
