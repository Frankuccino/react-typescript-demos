import type { FC } from "react";

interface UserProp {
  name: string;
  age: number;
  isStudent: boolean;
}

const OldPropType: FC<UserProp> = ({ name, age, isStudent }) => {
  return (
    <div>
      <h1>
        {name} is {isStudent === true ? " a student" : " not a student"} and
        current age is {age} years old
      </h1>
    </div>
  );
};

export default OldPropType;
