import ListItem from "./ListItem";

function TodoList(props) {
  return (
    <div>
      {props.listItems.map((item) => {
        return (
          <ListItem description={item.Description} deadline={item.Deadline} />
        );
      })}
    </div>
  );
}

export default TodoList;
