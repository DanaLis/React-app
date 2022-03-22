function Events() {
  const method = () => alert('Ну я же говорил');

  return (
    <>
      <button onClick={()=> alert('на меня нажали')}>Нажми на меня!</button>
      <button onClick={method}>Не нажимай на меня</button>
      <input onChange={event => console.log(event.target.value)}/>
    </>
  );
}

export default Events