function ListItem(props) {
  return (
    <h2>
      {" "}
      Todo: {props.description} <br />
      DeadLine: {props.deadline}{" "}
    </h2>
  );
}

export default ListItem;
