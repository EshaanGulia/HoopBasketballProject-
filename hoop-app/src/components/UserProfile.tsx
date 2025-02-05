import React, { useState } from "react";
import { Modal, Box, TextField, Button, Typography, Avatar, Menu, MenuItem } from "@mui/material";

interface User {
  username: string;
  password: string;
}

const UserProfileModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isCreatingProfile, setIsCreatingProfile] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null); 
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Mock database for user accounts
  const [users, setUsers] = useState<User[]>([]);

  const handleSignIn = () => {
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      setLoggedInUser(username);
      setIsSignedIn(true);
      setOpen(false);
      setUsername("");
      setPassword("");
    } else {
      alert("Invalid username or password");
    }
  };

  const handleCreateProfile = () => {
    if (!username || !password || !confirmPassword) {
      alert("Please fill out all fields.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const userExists = users.some((u) => u.username === username);
    if (userExists) {
      alert("Username already exists");
      return;
    }
    setUsers((prevUsers) => [...prevUsers, { username, password }]);
    alert(`Profile created for ${username}`);
    setIsCreatingProfile(false); 
    setUsername(""); 
    setPassword("");
    setConfirmPassword("");
  };

  const handleLogout = () => {
    setIsSignedIn(false);
    setLoggedInUser(null);
    setAnchorEl(null);
  };

  return (
    <>
      {!isSignedIn ? (
        <Button
          onClick={() => setOpen(true)}
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
            color: "#000",
            backgroundColor: "#f0f0f0",
            border: "1px solid #ddd",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            padding: "10px 16px",
            "&:hover": { backgroundColor: "#e0e0e0" },
          }}
        >
          Sign In
        </Button>
      ) : (
        <>
          <Avatar
            onClick={(e) => setAnchorEl(e.currentTarget)}
            sx={{
              cursor: "pointer",
              backgroundColor: "#000", 
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {loggedInUser?.charAt(0).toUpperCase()}
          </Avatar>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={handleLogout}>Log Out</MenuItem>
          </Menu>
        </>
      )}

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "300px",
            bgcolor: "white",
            p: 4,
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <Typography
            variant="h6"
            sx={{ marginBottom: "10px", fontWeight: "bold", textAlign: "center" }}
          >
            {isCreatingProfile ? "Create Profile" : "Sign In"}
          </Typography>
          <TextField
            fullWidth
            name="username"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ marginBottom: "10px" }}
          />
          <TextField
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: isCreatingProfile ? "10px" : "20px" }}
          />
          {isCreatingProfile && (
            <TextField
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{ marginBottom: "20px" }}
            />
          )}
          <Button
            onClick={isCreatingProfile ? handleCreateProfile : handleSignIn}
            fullWidth
            sx={{
              textTransform: "none",
              backgroundColor: "#000",
              color: "#fff",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#333" }, 
              marginBottom: "10px",
            }}
          >
            {isCreatingProfile ? "Create Profile" : "Sign In"}
          </Button>
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              color: "#007bff",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
            onClick={() => setIsCreatingProfile(!isCreatingProfile)}
          >
            {isCreatingProfile
              ? "Already have an account? Sign In"
              : "Don't have an account? Create Profile"}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default UserProfileModal;