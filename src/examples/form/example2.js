import { useState } from "react";

// with atribute "name"

export const LoginForm = () => {
  // from props we will take method as onFormSignUp
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: '',
    age:''
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setForm((prevState) =>{
      return {
        ...prevState,
        [name]: value, // вычисляемые свойства объекта js /динамическое формирования имени объекта js
      }});
  };

  const onSend = (e) => {
    e.preventDefault();

    // VALIDATION shoud be here

    //  if(valid){
    // onFormSignUp(...) or Api.send(form)
    //  }
  };

  return (
    <form onSubmit={onSend}>
      <input
        type="text"
        value={form.name}
        name="name"
        onChange={handleChange}
        placeholder="name"
      />
      <input
        type="password"
        value={form.password}
        name="password"
        onChange={handleChange}
        placeholder="password"
      />
      <input
        type="number"
        value={form.age}
        name="age"
        onChange={handleChange}
        placeholder="age"
      />
      <input
        type="email"
        value={form.email}
        name="email"
        onChange={handleChange}
        placeholder="email"
      />
      <button type="submit">Send</button>
    </form>
  );
};
