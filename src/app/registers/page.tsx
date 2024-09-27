"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton, Stack } from "@mui/material";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Box } from "@mui/material";
import { useGetRegisters } from "@/services/hooks/useGetRegisters";
import { useUpdateRegister } from "../../services/hooks/useUpdateRegister";
import { useDeleteRegister } from "@/services/hooks/useDeleteRegister";
import { useRouter } from "next/navigation";

type RegisterType = {
  id: number;
  name: string;
  cpf: string;
  email: string;
  number: string;
  address: string;
};
export default function BasicTable() {
  const router = useRouter();
  function toRedirect() {
    router.push("/registers/new-registration");
  }

  const { data, refetch } = useGetRegisters();
  const [rows, setRows] = useState(data ? [...data] : []);
  const [EditableRow, setEditableRow] = useState(-1);
  const [isEditable, setIsEditable] = useState(false);
  const [currentRow, setCurrentRow] = useState<RegisterType>({
    id: 0,
    name: "",
    cpf: "",
    email: "",
    number: "",
    address: "",
  });

  const { mutate: UpdateRegisters } = useUpdateRegister();
  const { mutate: DeleteRegisters } = useDeleteRegister();

  useEffect(() => {
    setRows(data);
    console.log(data);
  }, [data]);

  function handleUpdate() {
    UpdateRegisters(
      { ...currentRow },
      {
        onSuccess() {
          refetch();
        },
      }
    );
  }

  function handleDelete(id: number) {
    DeleteRegisters(id, {
      onSuccess() {
        refetch();
      },
    });
  }
  return (
    <>
      <Stack
        sx={{ width: "100%", marginBottom: "50px", borderRadius: "20px" }}
        alignItems={"center"}
      >
        <Stack
          sx={{
            width: "100%",
            color: "#453F3C",
            fontSize: "100px",
            marginTop: "40px",
          }}
          alignItems={"center"}
        >
          {`User's list`}
        </Stack>
        <Stack
          sx={{ width: "70%", marginBottom: "10px" }}
          alignItems={"flex-end"}
          justifyContent="flex-end"
        >
          <Button
            sx={{ bgcolor: "#453F3C" }}
            onClick={() => toRedirect()}
            variant="contained"
          >
            Create New Registration
          </Button>
        </Stack>
        <TableContainer
          component={Paper}
          sx={{
            maxWidth: "70%",
          }}
        >
          <Table
            sx={{
              minWidth: 650,
              bgcolor: "#FDF5F1",
              border: "1px solid #453F3C",
            }}
            aria-label="simple table"
          >
            <TableHead
              sx={{
                color: "#FDF5F1",
                bgcolor: "#453F3C",
              }}
            >
              <TableRow>
                <TableCell
                  sx={{
                    color: "#FDF5F1",
                  }}
                >
                  Nome
                </TableCell>
                <TableCell
                  sx={{
                    color: "#FDF5F1",
                  }}
                  align="left"
                >
                  CPF
                </TableCell>
                <TableCell
                  sx={{
                    color: "#FDF5F1",
                  }}
                  align="left"
                >
                  Email
                </TableCell>
                <TableCell
                  sx={{
                    color: "#FDF5F1",
                  }}
                  align="left"
                >
                  Telefone
                </TableCell>
                <TableCell
                  sx={{
                    color: "#FDF5F1",
                  }}
                  align="left"
                >
                  Endereço
                </TableCell>
                <TableCell
                  sx={{
                    color: "#FDF5F1",
                  }}
                  align="left"
                >
                  {" "}
                </TableCell>
                <TableCell
                  sx={{
                    color: "#FDF5F1",
                  }}
                  align="left"
                >
                  {" "}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {isEditable && EditableRow === row.id ? (
                    <>
                      <TableCell component="th" scope="row">
                        <TextField
                          size="small"
                          variant="filled"
                          onChange={(e) =>
                            setCurrentRow({
                              ...currentRow,
                              name: e.target.value,
                            })
                          }
                          value={
                            EditableRow === row.id ? currentRow?.name : row.name
                          }
                        />
                      </TableCell>
                      <TableCell align="left">
                        <TextField
                          size="small"
                          variant="filled"
                          onChange={(e) =>
                            setCurrentRow({
                              ...currentRow,
                              cpf: e.target.value,
                            })
                          }
                          value={
                            EditableRow === row.id ? currentRow?.cpf : row.cpf
                          }
                        />
                      </TableCell>
                      <TableCell align="left">
                        <TextField
                          size="small"
                          variant="filled"
                          onChange={(e) =>
                            setCurrentRow({
                              ...currentRow,
                              email: e.target.value,
                            })
                          }
                          value={
                            EditableRow === row.id
                              ? currentRow?.email
                              : row.email
                          }
                        />
                      </TableCell>
                      <TableCell align="left">
                        <TextField
                          size="small"
                          variant="filled"
                          onChange={(e) =>
                            setCurrentRow({
                              ...currentRow,
                              number: e.target.value,
                            })
                          }
                          value={
                            EditableRow === row.id
                              ? currentRow?.number
                              : row.number
                          }
                        />
                      </TableCell>
                      <TableCell align="left">
                        <TextField
                          size="small"
                          variant="filled"
                          onChange={(e) =>
                            setCurrentRow({
                              ...currentRow,
                              address: e.target.value,
                            })
                          }
                          value={
                            EditableRow === row.id
                              ? currentRow?.address
                              : row.address
                          }
                        />
                      </TableCell>
                    </>
                  ) : (
                    <>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.cpf}</TableCell>
                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell align="left">{row.number}</TableCell>
                      <TableCell align="left">{row.address}</TableCell>
                    </>
                  )}

                  <TableCell align="left">
                    {isEditable && EditableRow === row.id ? (
                      <Box>
                        <IconButton
                          onClick={() => {
                            setIsEditable(false);
                            handleUpdate();
                          }}
                        >
                          <CheckOutlinedIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            setCurrentRow({ ...row });
                            setIsEditable(false);
                          }}
                        >
                          <CloseOutlinedIcon />
                        </IconButton>
                      </Box>
                    ) : (
                      <IconButton
                        onClick={() => {
                          setEditableRow(row.id);
                          setCurrentRow({ ...row });
                          setIsEditable(true);
                        }}
                      >
                        <ModeEditOutlineOutlinedIcon />
                      </IconButton>
                    )}
                  </TableCell>
                  <TableCell align="left">
                    <IconButton
                      onClick={() => {
                        handleDelete(row.id);
                      }}
                    >
                      <DeleteOutlineOutlinedIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
}
