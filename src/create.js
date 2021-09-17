import { useState } from "react";
import { useHistory } from "react-router-dom";

export function Create() {
  const [mentorName, setMentorName] = useState("");
  const [mentorId, setMentorId] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [change, setChange] = useState(true);

  const history = useHistory();

  function CreateMentor(event) {
    event.preventDefault();
    fetch("https://guvi-assign-mentor.herokuapp.com/user/mentor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ Mentor_name: mentorName, Mentor_id: mentorId })
    })
      .then((data) => data.json())
      .then((data) => {
        alert(data.message);
        setMentorName("");
        setMentorId("");
        history.push("/");
      });
  }
  function CreateStudent(event) {
    event.preventDefault();
    fetch("https://guvi-assign-mentor.herokuapp.com/user/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ Student_name: studentName, Student_id: studentId })
    })
      .then((data) => data.json())
      .then((data) => {
        alert(data.message);
        setStudentName("");
        setStudentId("");
        history.push("/");
      });
  }
  return (
    <div>
      <br />
      <br />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setChange(true)}
      >
        Create Mentor
      </button>
      <span> </span>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setChange(false)}
      >
        Create Student
      </button>

      {change === true ? (
        <form className="Myform">
          <div className="form-group">
            <label for="exampleInputEmail1">Mentor Name</label>
            <input
              type="text"
              onChange={(event) => setMentorName(event.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Mentor Id</label>
            <input
              type="text"
              onChange={(event) => setMentorId(event.target.value)}
              className="form-control"
              id="exampleInputPassword1"
            />
            <small id="emailHelp" className="form-text text-muted">
              eg: Guvi_1
            </small>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={CreateMentor}
          >
            Submit
          </button>
        </form>
      ) : (
        <form className="Myform">
          <div className="form-group">
            <label for="exampleInputEmail1">Student Name</label>
            <input
              type="text"
              onChange={(event) => setStudentName(event.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Student Id</label>
            <input
              type="text"
              onChange={(event) => setStudentId(event.target.value)}
              className="form-control"
              id="exampleInputPassword1"
            />
            <small id="emailHelp" className="form-text text-muted">
              eg: Zen_1
            </small>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={CreateStudent}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
