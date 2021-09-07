import React, { useEffect, useState } from "react";
import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../global-style";

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${Colors.brandGreen};
  background-color: ${Colors.inactiveLight};
  text-align: match-parent;
  padding: 1rem;
`;
export const SearchField: FC = () => {
  const [searchStr, setSearchStr] = useState<string | null>("");

  useEffect(() => {
    if (!searchStr) return;
  }, []);
  return (
    <>
      <StyledInput
        placeholder="Search for plant species"
        value={searchStr}
        onChange={(event) => setSearchStr(event.currentTarget.value)}
      />
    </>
  );
};
