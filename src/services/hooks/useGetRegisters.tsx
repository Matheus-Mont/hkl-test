import { useQuery } from "react-query";
import { RegistersApi } from "../apis/registerApi";

export function useGetRegisters() {
  return useQuery(["useGetRegisters"], () => RegistersApi.getRegisters());
}
