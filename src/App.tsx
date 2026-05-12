import AdminInfo from "./components/AdminInfo";
import Button from "./components/Button";
import Children from "./components/Children";
import Counter from "./components/Counter";
import OldPropType from "./components/OldPropType";
import User from "./components/User";
import type { AdminInfoList, Info } from "./types";
import UserInfo from "./components/UserInfo";
import UserProfile from "./components/UserProfile";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import FocusInput from "./components/FocusInput";
import ContactForm from "./components/ContactForm";
import EventHandling from "./components/EventHandling";
import ZodForm from "./components/ZodForm";
import CounterReducer from "./components/CounterReducer";
import UseEffect from "./components/Product";

const App = () => {
  const user: Info = {
    id: 1,
    name: "Frank",
    email: "frankuccino@example.com",
  };

  const admin: AdminInfoList = {
    id: 2,
    name: "Angelo",
    email: "angelosso@example.com",
    role: "admin",
    lastLogin: new Date(),
  };

  return (
    <div>
      <UseEffect />

      <CounterReducer />

      <ZodForm />

      <Counter />

      <EventHandling />
      <ContactForm />
      <FocusInput />

      <Form />

      <TodoList />

      <UserInfo user={user} />
      <AdminInfo admin={admin} />
      <Counter />

      <UserProfile />
      <User name="frank" age={23} isStudent={true} />
      <Children>
        <h1>Hello I'm passing a children and it uses the ReactNode type</h1>
      </Children>

      <OldPropType name="angelo" age={23} isStudent={false} />

      <Button
        label="Click me i'm available"
        onClick={() => alert("Button Clicked!")}
        disabled={false}
      />
      <Button
        label="You Can't click me"
        onClick={() => alert("Button is hacked?!")}
        disabled={true}
      />
    </div>
  );
};

export default App;
