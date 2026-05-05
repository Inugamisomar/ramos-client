import { useState } from "react";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
  FormControlLabel,
  Switch,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";
import usersSeed from "../../data/user.json?raw";

const roles = ["admin", "editor", "viewer"];
const genders = ["male", "female", "other"];

const blankForm = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  contactNumber: "",
  email: "",
  role: "editor",
  username: "",
  password: "",
  address: "",
  isActive: true,
};

const labelize = (value) =>
  value ? value.charAt(0).toUpperCase() + value.slice(1) : "";

const loadUsers = () => {
  try {
    return {
      users: JSON.parse(usersSeed).map((u, i) => ({
        id: i + 1,
        ...u,
      })),
      error: "",
    };
  } catch {
    return { users: [], error: "Failed to load users" };
  }
};

const seed = loadUsers();

export default function UsersPage() {
  const [users, setUsers] = useState(seed.users);
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState(blankForm);
  const [errors, setErrors] = useState({});

  // 🔍 SEARCH + FILTER STATES
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // 🔍 FILTER LOGIC
  const filteredUsers = users.filter((user) => {
    const text = search.toLowerCase();

    return (
      (user.firstName.toLowerCase().includes(text) ||
        user.lastName.toLowerCase().includes(text) ||
        user.email.toLowerCase().includes(text) ||
        user.username.toLowerCase().includes(text)) &&
      (!roleFilter || user.role === roleFilter) &&
      (!genderFilter || user.gender === genderFilter) &&
      (statusFilter === ""
        ? true
        : statusFilter === "active"
          ? user.isActive
          : !user.isActive)
    );
  });

  const validate = () => {
    const e = {};

    if (!form.firstName) e.firstName = "Required";
    if (!form.lastName) e.lastName = "Required";

    if (!form.age) e.age = "Required";
    else if (!/^\d+$/.test(form.age)) e.age = "Numbers only";

    if (!form.contactNumber) e.contactNumber = "Required";
    else if (!/^\d{11}$/.test(form.contactNumber))
      e.contactNumber = "Must be 11 digits";

    if (!form.email) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Invalid email";

    if (!form.username) e.username = "Required";
    else if (/\s/.test(form.username)) e.username = "No spaces allowed";

    if (!form.password) e.password = "Required";
    else if (form.password.length < 8) e.password = "Minimum 8 characters";

    if (!form.address) e.address = "Required";

    return e;
  };

  const openModal = (user) => {
    setModal({ open: true, id: user?.id ?? null });
    setForm(user || blankForm);
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    setForm(blankForm);
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();

    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }

    if (modal.id) {
      setUsers((prev) =>
        prev.map((u) => (u.id === modal.id ? { ...form, id: modal.id } : u)),
      );
    } else {
      setUsers((prev) => [...prev, { ...form, id: prev.length + 1 }]);
    }

    closeModal();
  };

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, isActive: !u.isActive } : u)),
    );
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "fullName",
      headerName: "Full Name",
      flex: 1,
      valueGetter: (_, row) => `${row.firstName} ${row.lastName}`,
    },
    { field: "username", headerName: "Username", width: 150 },
    { field: "age", headerName: "Age", width: 80 },
    {
      field: "gender",
      headerName: "Gender",
      width: 120,
      valueGetter: (_, row) => labelize(row.gender),
    },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "role",
      headerName: "Role",
      width: 120,
      valueGetter: (_, row) => labelize(row.role),
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => (
        <Chip
          label={params.row.isActive ? "Active" : "Inactive"}
          color={params.row.isActive ? "success" : "default"}
          size="small"
        />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <Button size="small" onClick={() => openModal(params.row)}>
            Edit
          </Button>
          <Button size="small" onClick={() => toggleStatus(params.row.id)}>
            {params.row.isActive ? "Disable" : "Activate"}
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <Box>
      <Typography variant="h4">Users</Typography>

      <Button variant="contained" onClick={() => openModal()}>
        ADD USER
      </Button>

      {/* 🔍 SEARCH + FILTER */}
      <Stack
  direction={{ xs: "column", md: "row" }}
  spacing={2}
  sx={{ mt: 2 }}
  alignItems="center"
>
  {/* SEARCH */}
  <TextField
    label="Search"
    variant="outlined"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    sx={{ flex: 2 }} // bigger space
    fullWidth
  />

  {/* ROLE */}
  <TextField
    select
    label="Role"
    value={roleFilter}
    onChange={(e) => setRoleFilter(e.target.value)}
    sx={{ minWidth: 140 }}
  >
    <MenuItem value="">All</MenuItem>
    {roles.map((r) => (
      <MenuItem key={r} value={r}>
        {labelize(r)}
      </MenuItem>
    ))}
  </TextField>

  {/* GENDER */}
  <TextField
    select
    label="Gender"
    value={genderFilter}
    onChange={(e) => setGenderFilter(e.target.value)}
    sx={{ minWidth: 140 }}
  >
    <MenuItem value="">All</MenuItem>
    {genders.map((g) => (
      <MenuItem key={g} value={g}>
        {labelize(g)}
      </MenuItem>
    ))}
  </TextField>

  {/* STATUS */}
  <TextField
    select
    label="Status"
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
    sx={{ minWidth: 140 }}
  >
    <MenuItem value="">All</MenuItem>
    <MenuItem value="active">Active</MenuItem>
    <MenuItem value="inactive">Inactive</MenuItem>
  </TextField>
</Stack>

      <Paper sx={{ mt: 2 }}>
        <DataGrid rows={filteredUsers} columns={columns} autoHeight />
      </Paper>

      {/* MODAL FORM */}
      <Dialog open={modal.open} onClose={closeModal} fullWidth maxWidth="md">
        <DialogTitle sx={{ color: "#e6fefe" }}>➕ Add User</DialogTitle>

        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Stack spacing={3}>
              <Typography variant="subtitle2">Personal Information</Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                  label="First Name"
                  fullWidth
                  value={form.firstName}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  onChange={(e) =>
                    setForm({ ...form, firstName: e.target.value })
                  }
                />
                <TextField
                  label="Last Name"
                  fullWidth
                  value={form.lastName}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  onChange={(e) =>
                    setForm({ ...form, lastName: e.target.value })
                  }
                />
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                  label="Age"
                  fullWidth
                  value={form.age}
                  error={!!errors.age}
                  helperText={errors.age}
                  onChange={(e) => setForm({ ...form, age: e.target.value })}
                />
                <TextField
                  label="Contact Number"
                  fullWidth
                  value={form.contactNumber}
                  error={!!errors.contactNumber}
                  helperText={errors.contactNumber}
                  onChange={(e) =>
                    setForm({ ...form, contactNumber: e.target.value })
                  }
                />
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                  select
                  label="Gender"
                  fullWidth
                  value={form.gender}
                  onChange={(e) => setForm({ ...form, gender: e.target.value })}
                >
                  {genders.map((g) => (
                    <MenuItem key={g} value={g}>
                      {labelize(g)}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  label="Email"
                  fullWidth
                  value={form.email}
                  error={!!errors.email}
                  helperText={errors.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </Stack>

              <Typography variant="subtitle2">Account Information</Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                  label="Username"
                  fullWidth
                  value={form.username}
                  error={!!errors.username}
                  helperText={errors.username}
                  onChange={(e) =>
                    setForm({ ...form, username: e.target.value })
                  }
                />
                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  value={form.password}
                  error={!!errors.password}
                  helperText={errors.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
              </Stack>

                <TextField
                  select
                  label="Role"
                  fullWidth
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                >
                  {roles.map((r) => (
                    <MenuItem key={r} value={r}>
                      {labelize(r)}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  label="Address"
                  rows={2}
                  fullWidth
                  value={form.address}
                  error={!!errors.address}
                  helperText={errors.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                />
              <FormControlLabel
                control={
                  <Switch
                    checked={form.isActive}
                    onChange={(e) =>
                      setForm({ ...form, isActive: e.target.checked })
                    }
                  />
                }
                label={`User status: ${form.isActive ? "Active" : "Inactive"}`}
              />
            </Stack>
          </DialogContent>

          <DialogActions>
            <Button onClick={closeModal}>Cancel</Button>
            <Button type="submit" variant="contained">
              {modal.id ? "Update" : "Save"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}
