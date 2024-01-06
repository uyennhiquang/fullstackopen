import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "382-999-2931" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const isIn = (person, persons) => {
    for (let i = 0; i < persons.length; i++) {
      if (person.name === persons[i].name) return true;
    }
    return false;
  };

  const handleNewName = (e) => setNewName(e.target.value);
  const handleNewNumber = (e) => setNewNumber(e.target.value);

  const addEntry = (e) => {
    e.preventDefault();
    const personObject = { name: newName, number: newNumber};
    if (!isIn(personObject, persons)) setPersons(persons.concat(personObject));
    else {
      alert(`${newName} is already added to phonebook`);
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <section>
        <h2>Phonebook</h2>
        <form>
          <div>
            name: <input value={newName} onChange={handleNewName} />
          </div>
          <div>
            number: <input value={newNumber} onChange={handleNewNumber} />
          </div>
          <div>
            <button onClick={addEntry} type="submit">
              add
            </button>
          </div>
        </form>
      </section>

      <section>
        <h2>Numbers</h2>
        {persons.map((person) => (
          <p key={person.name}>{person.name} {person.number}</p>
        ))}
      </section>
    </div>
  );
};

export default App;
