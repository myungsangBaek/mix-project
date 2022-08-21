import { profile } from "console";
import { atom } from "recoil";

interface IMemberProps {
  id: number;
  pwd: string;
  name: string;
}

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const MemberState = atom<IMemberProps[]>({
  key: "memberState",

  default: [
    {
      id: 1,
      pwd: "test",
      name: "test",
    },
    {
      id: 2,
      pwd: "test",
      name: "test",
    },
    {
      id: 3,
      pwd: "test",
      name: "test",
    },
  ],
});
