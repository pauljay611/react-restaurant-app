import * as React from 'react'
import styled from 'styled-components';

interface LoadingProps {
    colNumber: number
}

const Loading = (props: LoadingProps) => {
    const colSpan: number = props.colNumber
    return <>
        <tr>
            <Column colSpan={colSpan} >Loading......</Column>
        </tr>
    </>
}

const Column = styled.td`
  text-align: center;
`


export default Loading