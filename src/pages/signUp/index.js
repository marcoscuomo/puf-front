import * as React from "react";
import styled from "styled-components";

import { th } from '~/components/Theme/styled'

const Input = styled('input')`
  background: transparent;
  border: 1px solid #fff;
  border-radius: 200px;
  padding: ${th.space(2)}px ${th.space(1)}px;
  color: ${th.color('white')};
  font-size: inherit;
`;

export const SignUp = () => {
  return (
    <main>
      <form>
        <label htmlFor="name">Nome</label>
        <Input type="text" id="name" name="name" />
      </form>
    </main>
  )
}
