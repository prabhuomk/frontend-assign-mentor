import { useState, useEffect } from "react";

export function HomePage() {
  const [mentors, setMentors] = useState([]);
  const [students, setStudents] = useState([]);
  const [allStudents, setAllStudents] = useState([]);

  function loadUsers() {
    fetch("https://guvi-assign-mentor.herokuapp.com/user/mentorData", {
      method: "GET"
    })
      .then((data) => data.json())
      .then((result) => setMentors(result));

    fetch("https://guvi-assign-mentor.herokuapp.com/user/studentData", {
      method: "GET"
    })
      .then((data) => data.json())
      .then((result) => setStudents(result));

    fetch("https://guvi-assign-mentor.herokuapp.com/user/studentList", {
      method: "GET"
    })
      .then((data) => data.json())
      .then((result) => setAllStudents(result));
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="TableList">
      <div className="MentorList">
        <h4>MENTOR LIST</h4>
        <table className="Table1">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Mentor Name</th>
              <th scope="col">Mentor_id</th>
              <th scope="col">No: of students</th>
              <th scope="col">Students_id</th>
            </tr>
          </thead>
          <tbody>
            {mentors.length ? (
              mentors.map((mentors, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{mentors.Mentor_name}</td>
                  <td>{mentors.Mentor_id}</td>
                  <td>{mentors.Student_id?.length || "-"}</td>
                  <td>
                    {mentors?.Student_id?.map((student, index) => (
                      <>
                        <h6>{student || "Loading..."}</h6>
                      </>
                    )) || "-"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>
                  <h2 className="text-center">Loading...</h2>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="AllStudentList">
        <h4>STUDENT LIST </h4>
        <table className="Table2">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Student Name</th>
              <th scope="col">Students_id</th>
              <th scope="col">Mentor_id</th>
            </tr>
          </thead>
          <tbody>
            {allStudents.length ? (
              allStudents.map((students, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{students.Student_name}</td>
                  <td>{students.Student_id}</td>
                  <td>{students.Mentor_id || "-"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>
                  <h2 className="text-center">Loading...</h2>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="StudentList">
        <h4>STUDENT WITHOUT MENTOR </h4>
        <table className="Table3">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Student Name</th>
              <th scope="col">Students_id</th>
            </tr>
          </thead>
          <tbody>
            {students.length ? (
              students.map((students, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{students.Student_name}</td>
                  <td>{students.Student_id}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>
                  <h2 className="text-center">Loading...</h2>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
