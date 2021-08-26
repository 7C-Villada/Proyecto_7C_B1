import styled from 'styled-components';

import bg from '../bg.jpg'

export const IMGBackground = styled.div.attrs({
  className: "bg-image",
})`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg});
    height: 35rem;
    // width:100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
`;

export const Divider = styled.div.attrs({
  className: "b-example-divider"
})`
  height: 3.5rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
`;