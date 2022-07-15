import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

interface IMeResult {
  ok: boolean;
  findUser: {
    id: number;
    email: string;
    name: string;
  };
}

const useUser = () => {
  const { data } = useSWR<IMeResult>(
    typeof window === "undefined" ? null : "/api/user/me"
  );
  const router = useRouter();

  useEffect(() => {
    if (data && !data.ok) {
      router.replace("/log-in");
    }
  }, [data, router]);

  if (!data) return { user: {} };
  const { id, email, name } = data?.findUser;

  return { user: { id, email, name } };
};

export default useUser;
