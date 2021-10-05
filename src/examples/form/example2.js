// with atribute "name"

export const LoginForm = () => {
  // from props we will take method as onFormSignUp
  const [form, setForm] = useState({
    login: "",
    email: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value, // вычисляемые свойства объекта js /динамическое формирования имени объекта js
    }));
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
        value={form.login}
        name="login"
        onChange={handleChange}
      />
      <input
        type="email"
        value={form.email}
        name="email"
        onChange={handleChange}
      />
      <button type="submit">Send</button>
    </form>
  );
};
