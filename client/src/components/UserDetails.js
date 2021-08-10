import React, { useEffect } from "react";

import { Alert, Container, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../actions/UserAction";

const UserDetails = (props) => {
  const email = props.match.params.email;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(email));
  }, [dispatch]);

  const { user, loading } = useSelector((state) => state.UserReducer);
  if (user == undefined && !loading) {
    return (
      <Container>
        <Alert variant="danger">User with that email not found</Alert>
      </Container>
    );
  } else {
    return (
      <Container>
        <Alert variant="dark">
          <Alert.Heading>USER DETAILS</Alert.Heading>
          <hr />
          <ListGroup>
            <ListGroup.Item variant="secondary">Name &nbsp;{user.NAME}</ListGroup.Item>
            <ListGroup.Item variant="secondary">Email &nbsp;{user.EMAIL}</ListGroup.Item>
            <ListGroup.Item variant="secondary">Address &nbsp;{user.ADDRESS}</ListGroup.Item>
            <ListGroup.Item variant="secondary">
              Nationality &nbsp;{user.NATIONALITY}
            </ListGroup.Item>
            <ListGroup.Item variant="secondary">
              Date of birth &nbsp;{user.DATE}
            </ListGroup.Item>
            <ListGroup.Item variant="secondary">
              Education &nbsp;{user.EDUCATION}
            </ListGroup.Item>
          </ListGroup>
        </Alert>
      </Container>
    );
  }
};

export default UserDetails;
