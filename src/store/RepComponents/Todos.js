import React from "react";
import { List, FlexboxGrid, IconButton } from "rsuite";
import { connect } from "react-redux";
import { removeTodo } from "../todos";

const Todos = ({ removeTodo, todos }) => {
  const remove = (todo) => {
    removeTodo(todo);
  };

  return (
    <section>
      <List>
        {todos.map((todo, i) => (
          <List.Item key={i} index={i}>
            <FlexboxGrid justify="space-around">
              <FlexboxGrid.Item colspan={12}>
                <h3>{todo.text}</h3>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={10}></FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={2}>
                <IconButton
                  icon="minus"
                  color="red"
                  circle
                  onClick={() => remove(todo)}
                />
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </List.Item>
        ))}
      </List>
    </section>
  );
};



// export default connect(({ todos }) => {
//   return { todos };
// })(Todos);

export default Todos;
