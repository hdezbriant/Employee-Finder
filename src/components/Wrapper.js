import { React, Component } from "react";
import Header from "./Header";
import Search from "./Search";
import EmpTable from "./Table";
import randoAPI from "../utils/randoapi";

class Wrapper extends Component {
  state = {
    search: "",
    searchResults: [],
  };

  componentDidMount() {
    randoAPI
      .search()
      .then((res) => {
        console.log(res);
        this.setState({
          searchResults: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  }

  inputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="bg-secondary">
        <Header />
        <Search />
        <EmpTable
          employees={this.state.searchResults}
          onchange={this.inputChange}
        />
      </div>
    );
  }
}

export default Wrapper;
