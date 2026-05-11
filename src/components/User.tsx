interface UserProps {
  name: string;
  age: number;
  isStudent: boolean;
}

const User = ({ name, age, isStudent }: UserProps) => {
  return (
    <div>
      <h1>
        {name} is {isStudent === true ? " a student" : " not a student"} and
        current age is {age} years old
      </h1>
    </div>
  );
};

export default User;
