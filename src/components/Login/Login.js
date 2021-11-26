import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from "./firebase.config";
import firebase from "firebase/compat/app";
import { useDispatch } from "react-redux";
import {
  getLoggedInUser,
  loggedInUser,
} from "../../redux/UserLogin/UserLoginSlice";
import { Container, Box, Avatar, Typography, Button } from "@mui/material";
import { AiFillLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const isLogged = useSelector(getLoggedInUser);
  const dispatch = useDispatch();
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      const newUser = {
        email: user.email,
        username: user.displayName,
        userImg: user.photoURL,
      };
      dispatch(loggedInUser(newUser));
    });
  };

  return (
    <>
      {isLogged.email && <Navigate to={-1} />}
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AiFillLock />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Button
            variant="outlined"
            sx={{ marginTop: 3 }}
            onClick={googleSignIn}
          >
            <FcGoogle className="text-4xl mr-2" />
            Sign In With Google
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Login;
