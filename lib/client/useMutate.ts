import { useState } from "react";

interface useMutateState<T> {
  result?: T;
  loading: boolean;
  error: string;
}

const useMutate = <T = any>(
  url: string
): [(data: T) => void, useMutateState<T>] => {
  const [state, setState] = useState<useMutateState<T>>({
    result: undefined,
    loading: false,
    error: "",
  });

  function mutate(data: T) {
    setState((prev) => ({ ...prev, loading: true }));

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) =>
        setState((prev) => ({ ...prev, result, loading: false }))
      )
      .catch((error) =>
        setState((prev) => ({ ...prev, loading: false, error }))
      );
  }

  return [mutate, { ...state }];
};

export default useMutate;
