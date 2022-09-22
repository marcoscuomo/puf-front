import * as React from "react";
import styled  from 'styled-components'

import { Theme } from './../components/Theme'

const BaseButton = ({className, children}) => (
  <div className={className}>{children}</div>
);

const Button = styled(BaseButton)`
  background: ${(props) => props.theme.colors[props.bg]};
`;

export const App = () => (
  <Theme>
    <Button bg="green">Meu App</Button>
    <Button bg="blue">Meu App</Button>
  </Theme>
)
