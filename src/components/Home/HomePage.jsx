import React from 'react'
import PropTypes from 'prop-types'

const HomePage = (restaurants) => {
    const render = () => {
        return (
            <div>
                <h1>HomePage</h1>
                <div className="time"><span>目前時間</span> {this.state.nowTime}</div>
                <input type="text" placeholder="查詢餐廳" />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Site</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Columns />
                    </tbody>
                </Table>
            </div>
        )
    }
}