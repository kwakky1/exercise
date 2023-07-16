import { atom } from "recoil";

export default atom<string>({
  key: "authState",
  default: "",
});
