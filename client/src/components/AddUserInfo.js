import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addUser } from "../actions/UserAction";
;
const AddUserInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const dispatch=useDispatch();
  const history=useHistory();
  const onSubmit = (data) => {
        dispatch(addUser(data,history))
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="col-form-label">Name:</label>
          <input
            type="text"
            className={`form-control`}
            {...register("name", {
              required: "Name is Required",
              minLength: {
                value: 7,
                message: "Minimum Required length is 7",
              },
            })}
            onKeyUp={() => {
              trigger("name");
            }}
          />
          {errors.name && (
            <small className="text-danger">{errors.name.message}</small>
          )}
        </div>
        <div className="form-group">
          <label className="col-form-label">Email:</label>
          <input
            type="text"
            className={`form-control`}
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            onKeyUp={() => {
              trigger("email");
            }}
          />
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </div>

        <div className="form-group">
          <label className="col-form-label">Address:</label>
          <input
            type="text"
            className={`form-control`}
            {...register("address", { required: "Address is Required" })}
            onKeyUp={() => {
              trigger("address");
            }}
          />
          {errors.address && (
            <small className="text-danger">{errors.address.message}</small>
          )}
        </div>
        <div className="form-group">
          <label className="col-form-label">Nationality:</label>
          <input
            type="text"
            className={`form-control`}
            {...register("nationality", {
              required: "Nationality is Required",
            })}
            onKeyUp={() => {
              trigger("nationality");
            }}
          />
          {errors.nationality && (
            <small className="text-danger">{errors.nationality.message}</small>
          )}
        </div>
        <div className="form-group">
          <label className="col-form-label">Education:</label>
          <input
            type="text"
            className={`form-control`}
            {...register("education", { required: "Education is Required" })}
            onKeyUp={() => {
              trigger("education");
            }}
          />
          {errors.education && (
            <small className="text-danger">{errors.education.message}</small>
          )}
        </div>
        <div className="form-group">
          <label className="col-form-label">Date of birth</label>
          <input
            type="date"
            className={`form-control`}
            {...register("dob", { required: "Pick up your birthdate" })}
             onKeyUp={() => {
              trigger("dob");
            }}
          />
          {errors.dob && (
            <small className="text-danger">{errors.dob.message}</small>
          )}
        </div>
        <input
          type="submit"
          className="btn btn-primary my-3"
          value="Add info"
        />
      </form>
    </Container>
  );
};

export default AddUserInfo;
