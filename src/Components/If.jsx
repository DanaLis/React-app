export function If( {arg} ) {

  const renderTrue = <h1>Передали true</h1>;
  if (arg) {
    return renderTrue;
  }
  else {
    return <h1>Передали false</h1>
  }
}

export function If2( {arg} ) {
  return <h1>{arg ? 'Передали true' : 'Передали false'}</h1>;
}