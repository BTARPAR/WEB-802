import React from "react";
import HandleList from "./HandleList";

const Lists = (props) => {
    const {alldata = [], handleChange, updateList, deleteList} = props
    const listrows = []
    alldata.forEach((element, index) => {
        console.log({element})
        const {title, author, _id: id} = element
        listrows.push(
            <tr key={id}>
                <td>{index + 1}</td>
                <td>{title}</td>
                <td>{author}</td>
                <td>
                    <HandleList singledata={{title, author, index}}
                                handleChange={handleChange}
                                listHandler={updateList}
                                label={'Update List'}
                                id={id}
                    />
                </td>
                <td>
                    <HandleList singledata={{title, author, index}}
                                handleChange={handleChange}
                                listHandler={deleteList}
                                label={'Delete List'}
                                id={id}
                    />
                </td>
            </tr>
        )
    })
    return (
        <table className="table table-stripped">
            <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {listrows}
            </tbody>
        </table>
    )
}

export default Lists