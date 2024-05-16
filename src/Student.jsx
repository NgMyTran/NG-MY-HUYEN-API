import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
// import Pagination from "react-bootstrap/Pagination";
import { Pagination } from "@mui/material";

export default function Student({
  students2,
  handleDelete,
  show,
  handleShow,
  handleClose,
  handleSubmitAdd,
  handleEdit,
  showEdit,
  handleCloseEdit,
  student,
  handleSubmitEdit,
  handleSort,
  handleFilter,
  searchValue,
  pageActive,
  totalPage,
  handleChangePage,
}) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitAdd}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>student name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email </Form.Label>
              <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter address" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="text" placeholder="Enter phone number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              {/* <Form.Check type="checkbox" label="Check me out" /> */}
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitEdit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>student name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                defaultValue={student.studentsName}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                defaultValue={student.mail}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                defaultValue={student.address}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                defaultValue={student.phone}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              {/* <Form.Check type="checkbox" label="Check me out" /> */}
            </Form.Group>
            <Button variant="secondary" onClick={handleCloseEdit}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Change
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <div id="div-all">
        <header className="header">
          <h4>Quan ly sinh vien</h4>
          <button className="btn-header" onClick={handleShow}>
            Add new student
          </button>

          <form onSubmit={handleFilter}>
            <input type="text" name="" value={searchValue} />
            <button type="submit" className="btn-header">
              Search
            </button>
          </form>

          <button className="btn-header" onClick={handleSort}>
            Sort
          </button>
        </header>

        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>#</th>
              <th>Student Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students2.map((student, index) => (
              <tr className="tr-of-td" key={student.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{index + 1}</td>
                <td>{student.studentsName}</td>
                <td>{student.mail}</td>
                <td>{student.address}</td>
                <td>{student.phone}</td>
                <td>
                  <span>
                    <DriveFileRenameOutlineIcon
                      className="btn-edit"
                      style={{
                        color: "#e9e90e",
                        fontSize: "40px",
                        paddingRight: "20px",
                      }}
                      onClick={() => handleEdit(student)}
                    />
                    <DeleteForeverIcon
                      className="btn-edit"
                      style={{ color: "red" }}
                      onClick={() => handleDelete(student.id)}
                    />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination> */}
        <Pagination
          count={totalPage} // tong page
          size="large"
          page={pageActive ?? 1} //trang hien tai
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => handleChangePage(e, value)}
        />
      </div>
    </>
  );
}
