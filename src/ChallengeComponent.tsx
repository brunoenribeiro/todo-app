import { useState, useMemo } from "react";
import type { Todo } from "./types";
import AddTodoForm from "./components/AddTodoForm";
import TodoItem from "./components/TodoItem";

export function ChallengeComponent() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const pendingTodos = useMemo(
    () => todos.filter((todo) => todo.status === 0),
    [todos]
  );
  const inProgressTodos = useMemo(
    () => todos.filter((todo) => todo.status === 1),
    [todos]
  );
  const doneTodos = useMemo(
    () => todos.filter((todo) => todo.status === 2),
    [todos]
  );

  function handleAddTodo(newTodoText: string) {
    setTodos([
      ...todos,
      { id: Date.now().toString(), text: newTodoText, status: 0 },
    ]);
  }

  function handleTodoBack(todoId: Todo["id"]) {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === todoId);
    const todo = newTodos[todoIndex];
    if (todo.status === 0) return;
    todo.status -= 1;
    setTodos(newTodos);
  }

  function handleTodoNext(todoId: Todo["id"]) {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === todoId);
    const todo = newTodos[todoIndex];
    if (todo.status === 2) return;
    todo.status += 1;
    setTodos(newTodos);
  }

  return (
    <>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "1rem",
        }}
      >
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
          <h2 style={{ textAlign: "center" }}>To Do</h2>
          {pendingTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              data={todo}
              onBack={handleTodoBack}
              onNext={handleTodoNext}
            />
          ))}
        </div>

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
          <h2 style={{ textAlign: "center" }}>In Progress</h2>
          {inProgressTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              data={todo}
              onBack={handleTodoBack}
              onNext={handleTodoNext}
            />
          ))}
        </div>

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
          <h2 style={{ textAlign: "center" }}>Done</h2>
          {doneTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              data={todo}
              onBack={handleTodoBack}
              onNext={handleTodoNext}
            />
          ))}
        </div>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <AddTodoForm onSubmit={handleAddTodo} />
      </section>
    </>
  );
}
