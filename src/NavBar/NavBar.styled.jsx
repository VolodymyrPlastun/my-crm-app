import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
color: grey;
    &:not(:last-child) {
        margin-right: 10px;
    }
    &:hover {
        text-decoration: none;
        color: aquamarine;
    }
`