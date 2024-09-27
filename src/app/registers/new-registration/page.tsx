"use client";
import { z } from "zod";
import { Button, Container, Stack, TextField } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { usePostRegister } from "@/services/hooks/usePostRegister";
import { NewRegisterInterface } from "@/services/apis/registerApi";
import { useRouter } from "next/navigation";

const newRegisterSchema = z
  .object({
    name: z
      .string({ required_error: "TESTEEEEE" })
      .min(1, { message: "Name is required" }),
    cpf: z
      .string()
      .min(1, { message: "CPF is required" })
      .length(11, { message: "CPF must contain 11 numbers only" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Email must be valid" }),
    number: z.string().min(1, { message: "Phone number is required" }),
    address: z.string(),
  })
  .partial({ address: true });

type NewRegisterSchema = z.infer<typeof newRegisterSchema>;

export default function Registers() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewRegisterSchema>({
    resolver: zodResolver(newRegisterSchema),
  });

  const { mutate: PostRegister } = usePostRegister();
  const router = useRouter();

  function toRedirect() {
    router.push("/registers");
  }

  function handlePost(newRegister: NewRegisterInterface) {
    PostRegister(
      { ...newRegister },
      {
        onSuccess() {
          reset();
        },
      }
    );
  }
  return (
    <>
      <Container
        sx={{
          maxWidth: "60%",
          bgcolor: "#453F3C",
          marginBottom: "20px",
          marginTop: "150px",
          borderRadius: "20px",
          border: "1px solid black",
        }}
      >
        <Stack sx={{ bgcolor: "#FDF5F1" }} alignItems={"center"} spacing={2}>
          <Stack
            sx={{
              fontSize: "40px",
              marginBottom: "20px",
              marginTop: "20px",
              color: "#453F3C",
            }}
          >
            Registration Form
          </Stack>

          <form style={{ width: "500px" }} onSubmit={handleSubmit(handlePost)}>
            <Stack sx={{ width: "100%" }} alignItems="center" spacing={3}>
              <Stack sx={{ color: "red", fontSize: "13px", width: "100%" }}>
                <TextField
                  className="form-input"
                  sx={{ width: "70%" }}
                  label="Name"
                  variant="filled"
                  fullWidth
                  {...register("name")}
                />
                {errors?.name?.message}
              </Stack>

              <Stack sx={{ color: "red", fontSize: "13px", width: "100%" }}>
                <TextField
                  className="form-input"
                  sx={{ width: "70%" }}
                  label="CPF"
                  variant="filled"
                  fullWidth
                  {...register("cpf")}
                />
                {errors?.cpf?.message}
              </Stack>

              <Stack sx={{ color: "red", fontSize: "13px", width: "100%" }}>
                <TextField
                  className="form-input"
                  label="Email "
                  variant="filled"
                  fullWidth
                  {...register("email")}
                />
                {errors?.email?.message}
              </Stack>

              <Stack sx={{ color: "red", fontSize: "13px", width: "100%" }}>
                <TextField
                  className="form-input"
                  label="Phone number"
                  variant="filled"
                  fullWidth
                  {...register("number")}
                />
                {errors?.number?.message}
              </Stack>
              <Stack sx={{ color: "red", fontSize: "13px", width: "100%" }}>
                <TextField
                  className="form-input"
                  label="Address"
                  variant="filled"
                  fullWidth
                  {...register("address")}
                />
              </Stack>
            </Stack>

            <Stack sx={{ marginBottom: "20px", marginTop: "20px" }} spacing={3}>
              <Button
                sx={{ bgcolor: "#453F3C" }}
                type="submit"
                variant="contained"
              >
                {" "}
                Submit
              </Button>

              <Button
                sx={{
                  marginBottom: "20px",
                  color: "#453F3C",
                  border: "1px solid #453F3C",
                }}
                onClick={() => toRedirect()}
                variant="outlined"
              >
                {`Go to user's list`}
              </Button>
            </Stack>
          </form>
        </Stack>
      </Container>
    </>
  );
}
