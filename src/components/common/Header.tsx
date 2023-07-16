"use client";

import React, { useEffect } from "react";
import { Avatar, Box, Container, IconButton, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import authAtom from "@/state/atoms/authAtom";
import { getCookie } from "cookies-next";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/apple-touch-icon.png";

const Header = () => {
  const [auth, setAuth] = useRecoilState(authAtom);
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const cookieAuth = getCookie("auth");
    if (cookieAuth) {
      setAuth(cookieAuth as string);
    }
  }, [setAuth]);
  return (
    <Container disableGutters={true} maxWidth={"sm"}>
      <Box
        py={3}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box display={"flex"} alignItems={"center"}>
          <IconButton
            onClick={() => router.push("/")}
            sx={{ ":hover": { backgroundColor: "#ffffff" } }}
          >
            <Image src={logo} alt={"logo"} width={50} height={50} />
          </IconButton>
          <Typography variant={"h5"}>매드게르만 훈련 프로그램</Typography>
        </Box>
        {pathname !== "/" && (
          <Avatar sx={{ width: 60, height: 60 }}>{auth || ""}</Avatar>
        )}
      </Box>
    </Container>
  );
};

export default Header;
