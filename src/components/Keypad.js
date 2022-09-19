function Keypad() {
  const passwordHandler = () => {
    console.log("Entering password...");
  };
  return (
    <div>
      <input type="password" onChange={passwordHandler}></input>
    </div>
  );
}

export default Keypad;
