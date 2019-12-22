import styled from 'styled-components';

export const Input = styled.input`
    border:none;
    border: 2px solid #FF8888;
    font-size: 18px;
    margin: 5px 0;
    padding: 5px;
`

export const Table = styled.table`
    width: 100%;
    height: 50px;
    padding: 5px;
    border: 1px solid #ddd;
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 14px;
    line-height: 50px;
    th, td {
        text-align: center;
    }
    thead>tr {
        background-color: #f2f2f2;
    }
    tr:nth-child(even){
        background-color: #f2f2f2;
    }
` 