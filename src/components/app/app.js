import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "John Smith",
          salary: 900,
          increase: false,
          rise: true,
        },
        {
          id: 2,
          name: "Jack Daniels",
          salary: 3000,
          increase: true,
          rise: false,
        },
        {
          id: 3,
          name: "James Bond",
          salary: 500,
          increase: false,
          rise: false,
        },
      ],
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };
  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      rise: false,
      increase: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onToggleRise = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id == id) {
          return {...item, rise: !item.rise}
        }
        return item;
      })
    }));
  };

  onToggleIncrease = (id) => {
    // this.setState(({data}) => {
    //   const index = data.findIndex(item => item.id == id);

    //   const old = data[index];
    //   const newItem = {...old, increase: !old.increase};
    //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

    //   return {
    //     data: newArr
    //   }
    // }); 
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id == id) {
          return {...item, increase: !item.increase}
        }
        return item;
      })
    }));
  }

  // totalCount = () => {
  //   let count = this.data.length;
  //   return count;
  // }



  render() {
    const emplouees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    return (
      <div className="app">
        <AppInfo total={emplouees}
        increased={increased}/>
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
