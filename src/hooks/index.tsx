import { useRouter } from "next/navigation";
export const useGoTo = (route: string) => {
  const goTo = useRouter();
  return () => {
    goTo.push(route);
  };
};
