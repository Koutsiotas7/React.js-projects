import UserGreeting from "./UserGreeting"

function App() {
  return (
   <div>
    <UserGreeting isLoggedIn={true} username="Koutsi" />
    <UserGreeting isLoggedIn={true} />
   </div>
  )
}

export default App
