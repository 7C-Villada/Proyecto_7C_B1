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