import { FormEvent } from "react";

export default function AddTodoForm({
  onSubmit,
}: {
  onSubmit: (text: string) => void;
}) {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const text = formData.get("text") as string;
    onSubmit(text);
  }
  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.5rem" }}>
      <input
        type="text"
        name="text"
        placeholder="Add task"
        required
        style={{ padding: "0.5rem" }}
      />
      <button type="submit">Add</button>
    </form>
  );
}
