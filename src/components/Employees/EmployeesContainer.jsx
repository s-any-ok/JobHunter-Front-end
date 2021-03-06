import React from "react";
import { connect } from "react-redux";
import { getIsFetching, getEmployees } from "../../redux/empSelectors";
import Preloader from "../common/Preloader/Preloader";
import Employee from "./Employee/Employee";
import s from "./Employees.module.css";

class EmployeesContainer extends React.Component {
  render() {
    return (
      <Employees
        employees={this.props.employees}
        isFetching={this.props.isFetching}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employees: getEmployees(state),
    isFetching: getIsFetching(state),
  };
};

//-----------------------------------------------//
const Employees = ({ employees, isFetching }) => {
  return (
    <div className={s.container}>
      <div className={"title"}>Employees</div>

      {isFetching ? <Preloader /> : null}
      <div className={s.employeeContainer}>
        {employees.map((e) => (
          <div key={e.EmployeeID}>
            <Employee employee={e} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(EmployeesContainer);
