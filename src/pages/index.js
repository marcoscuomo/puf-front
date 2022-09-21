import * as React from "react";
import styled  from 'styled-components'

import { Theme } from './../components/Theme'


const Button = styled.a`
  background: ${(props) => props.theme.colors.green};
`;

export const App = () => (
  <Theme>
    <Button bg="green">Meu App</Button>
  </Theme>
)
