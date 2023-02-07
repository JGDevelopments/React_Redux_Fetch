import "rsuite/dist/rsuite.min.css";

import { connect } from "react-redux";
import { addTodo, ToDo, removeTodo, fetchPosts } from "../store";
import {
  Container,
  Header,
  Content,
  Form,
  ButtonToolbar,
  Button,
  Navbar,
  Panel,
  FlexboxGrid,
  Divider,
} from "rsuite";
import { useState } from "react";
import generate from "shortid";
import Todos from "../store/RepComponents/Todos";

function App({ addTodo, todos, removeTodo, getPosts }) {
  const [state, setState] = useState({ txt: "" });
  const updateTxt = (txt) => setState({ txt });
  console.log(state);

  const createTodo = () => {
    addTodo(state.txt); //here we are assinging our id to generate and text to state.txt  //find updated success alert for rsuite //
    setState({ txt: "" });
  };

  return (
    <div className="main">
      <Container>
        <Header>
          <Navbar appearance="inverse">
            <Navbar.Brand>
              <a style={{ color: "#fff" }}>Brand</a>
            </Navbar.Brand>
          </Navbar>
        </Header>
        <Content>
          <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={12}>
              <Panel header={<h3>Add ToDo</h3>} bordered>
                <Form fluid>
                  <Form.Group>
                    <Form.ControlLabel></Form.ControlLabel>
                    What would you like to do?
                    <Form.Control
                      name="name"
                      value={state.txt}
                      onChange={updateTxt}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.ControlLabel></Form.ControlLabel>
                    Url Goes Here
                    <Form.Control name="name" value={""} />
                  </Form.Group>
                  <Form.Group>
                    <ButtonToolbar>
                      <Button appearance="primary" onClick={createTodo}>
                        Create-ToDo
                      </Button>
                      <Button appearance="primary" onClick={getPosts}>
                        Log Data
                      </Button>
                    </ButtonToolbar>
                  </Form.Group>
                </Form>
              </Panel>
              <Divider />
              <Todos todos={todos} removeTodo={removeTodo} />
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Content>
      </Container>
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"));
// const container = document.getElementById("root");
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render();

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return { todos: state.todos };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeTodo: (todo) => dispatch(removeTodo(todo)),
    addTodo: (txt) => dispatch(addTodo(new ToDo(generate(), txt))),
    getPosts: (url) => dispatch(fetchPosts(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
