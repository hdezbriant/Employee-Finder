import React from "react";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Search from "./components/Search";
import EmpTable from "./components/Table";

function App() {
  return (
    <Wrapper>
      <Header />
      <Search />
      <EmpTable />
    </Wrapper>
  );
}

export default App;
