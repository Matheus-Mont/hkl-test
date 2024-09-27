import { useMutation } from "react-query";
import { RegistersApi } from "../apis/registerApi";

export function usePostRegister() {
  return useMutation(RegistersApi.postRegister);
}
