import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "70px",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <TestLink to="/" name="메인" />
      <TestLink to="/form" name="작성" />
      <TestLink to="/gift" name="선물화면" />
    </div>
  );
};

interface TestLinkProps {
  to: string; // 이동할 경로
  name: string; // 메뉴명
  [key: string]: unknown; // 나머지 속성
}
const TestLink = (props: TestLinkProps) => {
  const { name = "" } = props;
  return (
    <Link
      {...props}
      style={{
        marginRight: "10px",
      }}
    >
      {name}
    </Link>
  );
};

export default Header;
