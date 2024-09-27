import api from "./axiosConfig";

interface RegisterInterface {
  id: number;
  name: string;
  cpf: string;
  email: string;
  number: string;
  address?: string;
}

export interface NewRegisterInterface {
  name: string;
  cpf: string;
  email: string;
  number: string;
  address?: string;
}
export const RegistersApi = {
  getRegisters: async () => {
    const { data } = await api.get("/registers");

    return data;
  },
  updateRegister: async (register: RegisterInterface) => {
    const { data } = await api.put("/registers/" + register.id, {
      ...register,
    });
    return data;
  },
  deleteRegister: async (id: number) => {
    const { data } = await api.delete("/registers/" + id);
    return data;
  },
  postRegister: async (register: NewRegisterInterface) => {
    const { data } = await api.post("/registers", {
      ...register,
    });
    return data;
  },
};
