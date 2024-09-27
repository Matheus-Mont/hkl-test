"use client";
import { Button, Container, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  function toRedirect(redirection: string) {
    router.push(redirection);
  }
  return (
    <>
      <Container
        sx={{
          maxWidth: "60%",
          bgcolor: "#453F3C",
          marginBottom: "20px",
          marginTop: "300px",
          borderRadius: "20px",
          border: "1px solid black",
          minHeight: "200px",
        }}
      >
        <Stack
          sx={{ bgcolor: "#FDF5F1", minHeight: "200px" }}
          alignItems={"center"}
          spacing={2}
        >
          <Stack
            sx={{
              fontSize: "40px",
              marginBottom: "70px",
              marginTop: "20px",
              color: "#453F3C",
              width: "70%",
            }}
            alignItems={"center"}
          >
            {`Welcome to User's Registration Manager!`}{" "}
            {` What would you like do do?`}
          </Stack>
          <Stack
            direction="row"
            sx={{ width: "70%" }}
            spacing={5}
            justifyContent={"center"}
          >
            <Button
              sx={{ bgcolor: "#453F3C", marginTop: "40px", height: "50px" }}
              onClick={() => toRedirect("/registers/new-registration")}
              variant="contained"
            >
              {" "}
              Register a new user
            </Button>

            <Button
              sx={{
                marginTop: "100px",
                color: "#453F3C",
                border: "1px solid #453F3C",
                height: "50px",
              }}
              onClick={() => toRedirect("/registers")}
              variant="outlined"
            >
              {`Go to user's list`}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
