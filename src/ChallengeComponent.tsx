import { useState, useMemo } from "react";
import type { Todo } from "./types";
import AddTodoForm from "./components/AddTodoForm";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoColumn from "./components/TodoColumn";

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
      {todos.length === 0 ? (
        <WelcomeMessage />
      ) : (
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1rem",
          }}
        >
          <TodoColumn
            title="To Do"
            todos={pendingTodos}
            onTodoBack={handleTodoBack}
            onTodoNext={handleTodoNext}
          />
          <TodoColumn
            title="In Progress"
            todos={inProgressTodos}
            onTodoBack={handleTodoBack}
            onTodoNext={handleTodoNext}
          />
          <TodoColumn
            title="Done"
            todos={doneTodos}
            onTodoBack={handleTodoBack}
            onTodoNext={handleTodoNext}
          />
        </section>
      )}

      <section style={{ marginTop: "2rem" }}>
        <AddTodoForm onSubmit={handleAddTodo} />
      </section>
    </>
  );
}
