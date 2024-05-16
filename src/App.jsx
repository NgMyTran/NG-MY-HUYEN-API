import axios from "axios";
import "./test.scss";
import Student from "./Student.jsx";
import { useEffect, useState } from "react";

export default function App() {
  //Get all students: ueState + useEffect
  const [students2, setStudents2] = useState([]);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  const handleSort = () => {
    setSort("studentsName");
  };

  const handleFilter = (event) => {
    event.preventDefault();
    const inputFilter = event.target[0].value;

    setFilter(inputFilter.trim());
    // setFilter(JSON.parse(localStorage.getItem("filter")));
  };

  // pagination
  const [page, setPage] = useState(1);
  const limit = 3;
  const [totalStudent, setTotalStudent] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const getAllStudents = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/students2`);
        setTotalStudent(response.data.length);

        // console.log(response.data.length, "response");
      } catch (err) {
        console.log("failed to fetch data", err);
      }
    };
    getAllStudents(); // Call getAllStudents inside useEffect
  }, []);

  useEffect(() => {
    const getAllStudents = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/students2?_page=${page}&_limit=${limit}`
        );
        setStudents2(response.data);
        setTotalPage(Math.ceil(totalStudent / limit));
      } catch (err) {
        console.log("failed to fetch data", err);
      }
    };
    getAllStudents(); // Call getAllStudents inside useEffect
  }, [page, totalPage, totalStudent]);

  // useEffect(() => {
  //   const getAllStudents = () => {
  //     let url = `http://localhost:3000/students2?_sort=${sort}`;
  //     if (filter !== "") url += `&studentsName=${filter}`;
  //     axios
  //       .get(url)
  //       .then((res) => setStudents2(res.data))
  //       .catch((err) => console.log(err));
  //   };

  //   getAllStudents(); // Call getAllStudents inside useEffect
  // }, [sort, filter]);

  const DeleteStudent = (id) => {
    console.log(id, "sss");
    axios.delete(`http://localhost:3000/students2/${id}`);
    const index = students2.findIndex((item) => item.id == id);
    students2.splice(index, 1);

    setStudents2([...students2]);

    //
    setTotalStudent(totalStudent - 1);
    setTotalPage(Math.ceil(totalStudent / limit));
  };
  console.log(totalStudent, "totalStudent");
  console.log(totalPage, "totalPage");

  //modal add new student
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmitAdd = (event) => {
    event.preventDefault();
    console.log("dhdjsd");
    console.dir(event.target, "target");
    const newStudent = {
      id: Math.floor(Math.random() * 1000),
      studentsName: event.target[0].value,
      mail: event.target[1].value,
      address: event.target[2].value,
      phone: event.target[3].value,
      status: false,
    };
    axios
      .post("http://localhost:3000/students2", newStudent)
      .then(() => {
        console.log(newStudent, "resdata");
        setStudents2([...students2, newStudent]);

        setTotalStudent(totalStudent + 1);
        setTotalPage(Math.ceil(totalStudent / limit));

        handleClose();
        alert("Successfully added a new student!");
      })
      .catch((err) => console.log(err));
  };

  //modal edit student
  const [showEdit, setShowEdit] = useState(false);
  const student = JSON.parse(localStorage.getItem("student")) || {};
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const handleEdit = (student) => {
    setShowEdit(true);
    console.log(student, "student");
    localStorage.setItem("student", JSON.stringify(student));
  };
  const handleSubmitEdit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    axios
      .patch(`http://localhost:3000/students2/${student.id}`, {
        studentsName: event.target[0].value,
        mail: event.target[1].value,
        address: event.target[2].value,
        phone: event.target[3].value,
      })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          const index = students2.findIndex((item) => item.id == student.id);
          students2[index].studentsName = event.target[0].value;
          students2[index].mail = event.target[1].value;
          students2[index].address = event.target[2].value;
          students2[index].phone = event.target[3].value;
          setStudents2([...students2]);
          handleCloseEdit();
          alert("Successfully edited student!");
        }
      });
  };

  //pagination

  const handleChangePage = (e, value) => {
    console.log(value);
    setPage(value);
    console.log(e, "e?");
    // setPage(parseInt(e.target.innerText));
    //ham xu ly chuyen page
  };

  return (
    <>
      <div id="app-table">
        {/* <Students /> */}
        <Student
          students2={students2}
          handleDelete={DeleteStudent}
          show={show}
          handleShow={handleShow}
          handleClose={handleClose}
          handleSubmitAdd={handleSubmitAdd}
          handleEdit={handleEdit}
          showEdit={showEdit}
          handleCloseEdit={handleCloseEdit}
          handleShowEdit={handleShowEdit}
          student={student}
          handleSubmitEdit={handleSubmitEdit}
          handleSort={handleSort}
          handleFilter={handleFilter}
          pageActive={page}
          totalPage={totalPage}
          handleChangePage={handleChangePage}
        />
      </div>
      {/* <div id="app-form">
        {toggleAdd && <Addstudent handleSubmit={handleSubmit} />}
        {toggleEdit == true && (
          <EditStudent handleSubmitEdit={handleEdited} student={student} />
        )}
      </div> */}
    </>
  );
}
