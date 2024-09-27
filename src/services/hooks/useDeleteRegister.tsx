import { useMutation } from "react-query";
import { RegistersApi } from "../apis/registerApi";

export function useDeleteRegister() {
  return useMutation(RegistersApi.deleteRegister);
}
