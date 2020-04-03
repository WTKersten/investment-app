import styled from 'styled-components';
import {Table} from 'reactstrap';

export const TableX = styled(Table)`
    color: ${props => props.theme.colors.light};
`;

export const TableHead = styled.thead`
    background-color: ${props => props.theme.colors.secondary};
`;

export const TableHeader = styled.th`
    text-align: left;
    padding-top: 16px;
    padding-bottom: 12px;
`;
