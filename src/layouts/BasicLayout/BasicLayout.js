import React from "react";
import styles from "./BasicLayout.module.scss";
import { Container } from "semantic-ui-react";

export function BasicLayout(props) {
  const { children } = props;

  return (
    <>
      <Container fluid>{children}</Container>
    </>
  );
}
