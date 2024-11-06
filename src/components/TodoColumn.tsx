import { Todo } from "../types";
import TodoItem from "./TodoItem";

export default function TodoColumn({
  title,
  todos,
  onTodoBack,
  onTodoNext,
}: {
  title: string;
  todos: Todo[];
  onTodoBack: (id: Todo["id"]) => void;
  onTodoNext: (id: Todo["id"]) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid currentColor",
        padding: "1rem",
        gap: "0.5rem",
      }}
    >
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          data={todo}
          onBack={onTodoBack}
          onNext={onTodoNext}
        />
      ))}
    </div>
  );
}
