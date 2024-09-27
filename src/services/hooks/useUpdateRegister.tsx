import { useMutation } from "react-query";
import { RegistersApi } from "../apis/registerApi";

export function useUpdateRegister() {
  return useMutation(RegistersApi.updateRegister);
}
