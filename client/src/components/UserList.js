import React, { useEffect, useState } from "react";
import { Container, Table ,Alert} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../actions/UserAction";
import ReactPaginate from "react-paginate";
import {Link} from "react-router-dom";


const UserList = () => {
// *******dispatching action when component loads****************
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

// **** pulling out data from redux stor********************
  const { users, loading } = useSelector((state) => state.UserReducer);


//   *******pagination*******************
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 1;
  const pageVisted = pageNumber * productsPerPage;

  const pageCount = Math.ceil(users.length / productsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
//   **************************************

//   ****render users ***//
  const renderUsers = users
    .slice(pageVisted, pageVisted + productsPerPage)
    .map((user) => {
      return (
        <tr key={user.EMAIL}>
          <td>{user.NAME}</td>
          <td>{user.EMAIL}</td>
          <td>{user.ADDRESS}</td>
        <td><Link
              to={`/get-info/${user.EMAIL}`}>DETAILS</Link></td>
        </tr>
      );
    });
// ********************************************

    return (
    <Container>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Details </th>
          </tr>
        </thead>
        <tbody>{!loading && users.length >0 ? (renderUsers):(
                 <Alert variant="danger">
    No user added till now
  </Alert>
        )}</tbody>
      </Table>
      <br />
      <br />
       <ReactPaginate
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttns"}
              nextLinkClassName={"nextBttns"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              breakLabel={"..."}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
            />
    </Container>
    
  );
};

export default UserList;
