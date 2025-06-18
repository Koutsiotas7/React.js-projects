import Student from "./Student.jsx";

function App() {
  return (
    <div>
      <Student
      name="Spongebob"
      age={27} // Not string with {}
      isStudent={true}
      />

      <Student
      name="Patrick"
      age={50}
      isStudent={false}
      />

      <Student
      name="Squidward"
      age={32}
      isStudent={false}
      />

      <Student
      name="Sandy"
      age={27}
      isStudent={true}
      />

      <Student/>
    </div>
  );
}

export default App
