import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
text-decoration: none;
padding: 10px;
margin-right: 10px;
color: #333;

&.active {
    color: ${p => p.theme.colors.white};
    background-color: #333;
    border-radius: 4px;
}
`;
