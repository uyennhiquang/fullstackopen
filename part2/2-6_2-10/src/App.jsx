import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNewInput = e => setNewName(e.target.value)
  const addName = (e) => {
    e.preventDefault()
    const personObject = { name: newName}
    setPersons(persons.concat(personObject))
    setNewName("")
  }

  return (
    <div>
      <section>
        <h2>Phonebook</h2>
        <form>
          <div>
            name: <input value={newName} onChange={handleNewInput}/>
          </div>
          <div>
            <button onClick={addName} type="submit">add</button>
            <div>debug: {newName}</div>
          </div>
        </form>
      </section>

      <section>
        <h2>Numbers</h2>
        {persons.map(person => <p key={person.name} >{person.name}</p>)}
      </section>
      
    </div>
  );
};

export default App;
