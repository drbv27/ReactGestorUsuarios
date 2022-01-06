import useFormulario from "./hooks/useFormulario";
function App() {
  const [formulario, handleChange] = useFormulario({ name: "" });
  console.log(formulario);
  return (
    <form>
      <input
        name="name"
        placeholder="Nombre"
        value={formulario.name}
        onChange={handleChange}
      />
    </form>
  );
}

export default App;
