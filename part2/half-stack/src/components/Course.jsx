const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </>
  );
};

const Header = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <strong>
        total of {parts.reduce((total, part) => total + part.exercises, 0)}{" "}
        exercises
      </strong>
    </div>
  );
};

export default Course