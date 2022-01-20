import React, {useState} from "react";
import {Table} from "reactstrap";
import "../../App.css";


function NoteList(props) {

    const notes = props.notes;
    const [searchTerm, setSearchTerm] = useState(" ");

    return (
        <>
            <div className="search-bar">
                <input type="text"
                       style={{fontSize: "19px"}}
                       placeholder="Search for Notes..."
                       className="search-input"
                       onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <Table dark bordered responsive>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Name</th>
                    <th>Course ID</th>
                    <th>Batch</th>
                    <th>Course Instructor</th>
                    <th>Drive link</th>
                </tr>
                </thead>
                <tbody>
                {!notes || notes.length <= 0 ? (
                    <tr>
                        <td colSpan="6" align="center" width="400px">
                            <b>Oops, nothing here yet</b>
                        </td>
                    </tr>
                ) : (
                    notes.filter(val => {
                            if (searchTerm === " ") {
                                return val;
                            } else if (
                                val.course_id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                                val.course_instructor.toString().toLowerCase().includes(searchTerm.toLowerCase())) {

                                return val;
                            }
                        }
                    ).map(note => (
                        <tr key={note.pk}>
                            <td>{note.title}</td>
                            <td>{note.name}</td>
                            <td>{note.course_id}</td>
                            <td>{note.batch}</td>
                            <td>{note.course_instructor}</td>
                            <td>{note.gdrive_link}</td>
                        </tr>
                    ))
                )}
                </tbody>
            </Table>
        </>
    );
}

export default NoteList;
