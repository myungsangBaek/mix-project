import type { NextPage } from "next";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { MemberState } from "store/boardState";
import styled from "styled-components";

const Home: NextPage = () => {
  const [content, setContent] = useRecoilState(MemberState);

  useEffect(() => {
    console.log("recoil", content);
  });
  return <Container>Main</Container>;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default Home;
