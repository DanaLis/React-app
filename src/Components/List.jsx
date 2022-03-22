function List ( {arr} ) {
  return arr.map(current => <li key={current}>{current}</li>)
}

export default List