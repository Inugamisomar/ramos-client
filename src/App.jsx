import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App!</h1>

        <p>
          Name: Leovik Ramos <br />
          Email: ramosleovik@gmail.com <br />
          Other Personal Info: Education: Bachelor of Science in Information Technology Specialization with Mobile and Web Applications <br />
          Skills: JavaScript, React, Node.js, Python <br />
          Hobbies: Coding, Traveling, Cooking
        </p>

      </header>
    </div>
  )
}

export default App