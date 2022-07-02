import styled from "styled-components";
import { ReactComponent as Avatar } from "../../assets/pyramid.svg";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 10em;
  border-right: 1px solid whitesmoke;
`;

export const IconContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 15px 10px 10px;
  margin: 0;
  border-bottom: 1px solid whitesmoke;
`;

export const AvatarIcon = styled(Avatar)`
  height: 35px;
  width: 35px;
  
  &:hover {
    cursor: pointer;
    transform: translateX(1px) translateY(-2px);
    transition: transform 75ms linear;
  }
`;

export const LinksContainer = styled.div`
  height: 100%;
`;
