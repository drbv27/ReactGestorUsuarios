import Input from "./Input";
import Button from "./Button";
import useFormulario from "../hooks/useFormulario";

const UserForm = ({ submit }) => {
  const [formulario, handleChange, reset] = useFormulario({
    name: "",
    lastname: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventdefault();
    submit(formulario);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Nombre: "
        name="name"
        value={formulario.name}
        onChange={handleChange}
        placeholder="Nombre"
      />
      <Input
        label="Apellido: "
        name="lastname"
        value={formulario.lastname}
        onChange={handleChange}
        placeholder="Apellido"
      />
      <Input
        label="email: "
        name="email"
        value={formulario.email}
        onChange={handleChange}
        placeholder="e-mail"
      />
      <Button>Enviar</Button>
    </form>
  );
};

export default UserForm;
