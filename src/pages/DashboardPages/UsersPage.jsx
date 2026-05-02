import React from "react";
import { Typography, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "firstName", headerName: "First Name", width: 150 },
  { field: "lastName", headerName: "Last Name", width: 150 },
];

const rows = [
  { id: 1, firstName: "Jon", lastName: "Snow" },
  { id: 2, firstName: "Arya", lastName: "Stark" },
];

function UsersPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </Box>
  );
}

export default UsersPage;