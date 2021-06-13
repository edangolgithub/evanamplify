import { API, graphqlOperation } from "aws-amplify";
import { createTodo, updateTodo, deleteTodo } from "../graphql/mutations";
import { listTodos } from "../graphql/queries";

// export const td=async()=>{
// const todo = { name: "My first todo", description: "Hello world!" };
// }
export const list = async () => {
  const todos = await API.graphql(graphqlOperation(listTodos));
  return todos;
};
//data.listTodos.items[0]
export const create = async (todo) => {
  console.log(todo);
  await API.graphql(graphqlOperation(createTodo, { input: todo }));
};
export const update = async (todo) => {
  await API.graphql(
    graphqlOperation(updateTodo, {
      input: { id: todo.id, name: todo.name, description: todo.description },
    })
  );
};
export const delete1 = async (todoid) => {
  await API.graphql(graphqlOperation(deleteTodo, { input: { id: todoid } }));
};
