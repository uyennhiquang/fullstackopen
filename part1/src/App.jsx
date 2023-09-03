const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      {/* Factory function */}
      {/* <p> */}
      {/* {props.part2Name} {props.part2Exercises} */}
      {/* </p> */}
      {/* <p> */}
      {/* {props.part3Name} {props.part3Exercises} */}
      {/* </p> */}

      {/* Variable-based */}
      {/* <p>{props.part1} {props.exercise1}</p> */}
      {/* <p>{props.part2} {props.exercise2}</p> */}
      {/* <p>{props.part3} {props.exercise3}</p> */}
      
      {/* Component-based */}
      <Part name={props.part1} exercises={props.exercises1} />
      <Part name={props.part2} exercises={props.exercises2} />
      <Part name={props.part3} exercises={props.exercises3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Total number of exercises: {props.totalExercises}</p>
    </div>
  );
};

//
const App = () => {
  const course = "Half Stack application development";

  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  const partCreation = (name, exercises) => ({ name, exercises });
  const part1 = partCreation("Fundamentals of React", 10);
  const part2 = partCreation("Using props to pass data", 7);
  const part3 = partCreation("State of a component", 14);

  return (
    <div>
      <Header course={course} />

      {/* Variable-based */}
      {/* <Content part1={part1} exercise1={exercises1} part2={part2} exercise2={exercises2} part3={part3} exercise3={exercises3}/> */}

      {/* Factory function */}
      {/* <Content part1Name={part1.name} part1Exercises={part1.exercises} part2Name={part2.name} part2Exercises={part2.exercises} part3Name={part3.name} part3Exercises={part3.exercises}/> */}

      {/* Component-based */}
      { /* The Content tag's attribute pairs contain data for the Content component to have access to */}
      <Content
        part1={part1.name}
        exercises1={part1.exercises}
        part2={part2.name}
        exercises2={part2.exercises}
        part3={part3.name}
        exercises3={part3.exercises}
      />

      <Total
        totalExercises={part1.exercises + part2.exercises + part3.exercises}
      />
    </div>
  );
};

export default App;
