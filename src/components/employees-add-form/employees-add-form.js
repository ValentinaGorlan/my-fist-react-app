import { Component } from "react";
import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Add new employee</h3>
        <form className="add-form d-flex">
          <input
            name="name"
            onChange={this.onValueChange}
            type="text"
            className="form-control new post-label"
            placeholder="Name"
            value={name}
          />
          <input
            name="salary"
            onChange={this.onValueChange}
            type="number"
            className="form-control new post-label"
            placeholder="Salary ($)"
            value={salary}
          />
          <button type="submit" className="btn btn-outline-light">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
