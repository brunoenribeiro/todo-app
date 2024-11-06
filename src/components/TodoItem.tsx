import { useMemo } from "react";
import { Todo } from "../types";

export default function TodoItem({
  data,
  onBack,
  onNext,
}: {
  data: Todo;
  onBack: (todoId: Todo["id"]) => void;
  onNext: (todoId: Todo["id"]) => void;
}) {
  const isFirstStatus = useMemo(() => data.status === 0, [data.status]);
  const isLastStatus = useMemo(() => data.status === 2, [data.status]);

  return (
    <div
      style={{
        border: "1px solid currentColor",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          padding: "1rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button disabled={isFirstStatus} onClick={() => onBack(data.id)}>
          &#8592;
        </button>
        <span>{data.text}</span>
        <button disabled={isLastStatus} onClick={() => onNext(data.id)}>
          &#8594;
        </button>
      </div>
    </div>
  );
}
