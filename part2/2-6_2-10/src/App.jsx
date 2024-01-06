import { useState } from "react";

const Filter = (props) => (
  <>
    <p>filter shown with</p>
    <input value={props.filterValue} onChange={props.onChangeFilter} />
  </>
);
const PersonForm = (props) => (
  <>
    <form>
      <h2>add a new</h2>
      <div>
        name: <input value={props.nameValue} onChange={props.onChangeName} />
      </div>
      <div>
        number:{" "}
        <input value={props.numberValue} onChange={props.onChangeNumber} />
      </div>
      <div>
        <button onClick={props.submitOnClick} type="submit">
          add
        </button>
      </div>
    </form>
  </>
);

const Persons = ({ persons }) => (
  <>
    <h2>Numbers</h2>
    {persons.map((person) => (
      <p key={person.id}>
        {person.name} {person.number}
      </p>
    ))}
  </>
);

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Aramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [personFilter, setPersonFilter] = useState("");

  const isIn = (person, persons) => {
    for (let i = 0; i < persons.length; i++) {
      if (person.name === persons[i].name) return true;
    }
    return false;
  };

  const handleNewName = (e) => setNewName(e.target.value);
  const handleNewNumber = (e) => setNewNumber(e.target.value);
  const handlePersonFilter = (e) => setPersonFilter(e.target.value);

  const addEntry = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    if (!isIn(personObject, persons)) setPersons(persons.concat(personObject));
    else {
      alert(`${newName} is already added to phonebook`);
    }
    setNewName("");
    setNewNumber("");
  };
  const personsToDisplay = persons.filter((person) =>
    person.name.toLowerCase().includes(personFilter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue={personFilter} onChangeFilter={handlePersonFilter} />
      <PersonForm
        nameValue={newName}
        onChangeName={handleNewName}
        numberValue={newNumber}
        onChangeNumber={handleNewNumber}
        submitOnClick={addEntry}
      />
      <Persons persons={personsToDisplay} />
    </div>
  );
};

export default App;
