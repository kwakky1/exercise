"use client";

import { Avatar, Box, Container, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { useSetRecoilState } from "recoil";
import authAtom from "@/state/atoms/authAtom";

export default function Home() {
  const router = useRouter();
  const membersObj = [
    { name: "Ted", color: "#221f3a" },
    { name: "Jacob", color: "#e50914" },
    { name: "Andy", color: "#84bd00" },
  ];
  const setAuth = useSetRecoilState(authAtom);

  const handleClick = async (member: string) => {
    setCookie("auth", member);
    setAuth(member);
    router.push(`/exercise/${member}`);
  };

  return (
    <Container disableGutters={true} maxWidth={"sm"}>
      <Box p={1} display={"flex"} justifyContent={"space-around"}>
        {membersObj.map((member, index) => {
          const { name, color } = member;
          return (
            <Avatar
              sx={{
                width: 100,
                height: 100,
                cursor: "pointer",
                bgcolor: color,
              }}
              key={index}
              onClick={() => handleClick(name.toLowerCase())}
            >
              <Typography fontSize={24}>{name}</Typography>
            </Avatar>
          );
        })}
      </Box>
    </Container>
  );
}
