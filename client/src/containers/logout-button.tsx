import React from "react";
import styled from "react-emotion";
import { useApolloClient, gql } from "@apollo/client";

import { menuItemClassName } from "../components/menu-item";
import { ReactComponent as ExitIcon } from "../assets/icons/exit.svg";

export default function LogoutButton() {
  const client = useApolloClient();

  const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
      isLoggedIn @client
    }
  `;

  return (
    <StyledButton
      onClick={() => {
        client.writeQuery({
          query: IS_LOGGED_IN,
          data: { isLoggedIn: true },
        });
        localStorage.clear();
      }}
    >
      <ExitIcon />
      Logout
    </StyledButton>
  );
}

const StyledButton = styled("button")(menuItemClassName, {
  background: "none",
  border: "none",
  padding: 0,
});
