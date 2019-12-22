import * as React from 'react'

interface LoadingProps {
    colNumber: number
}

const Loading = (props: LoadingProps) => {
    const colSpan: number = props.colNumber
    const style: React.CSSProperties = {
        textAlign: 'center'
    }
    return <>
        <tr>
            <td colSpan={colSpan} style={style}>Loading......</td>
        </tr>

    </>
}

export default Loading