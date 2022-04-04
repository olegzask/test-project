import React, { Component } from "react";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
import Card from "./components/card/card.component";
import { useSyncExternalStore } from "react/cjs/react.production.min";

const App = () => {
  const [searchField, setSearchfield] = useState(""); //(value, setvalue);
  const [monsters, setMonsters] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((monster) => setMonsters(monster));
  }, []);

  /////
  const filtMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchfield(searchFieldString);
  };

  const onTitleChange = (event) => {
    const titleString = event.target.value;
    setTitle(titleString);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        search={onSearchChange}
        placeHolder="Find a Monster!"
        className="search-box"
      />
      <br />
      <SearchBox
        search={onTitleChange}
        placeHolder="Set the title"
        className="search-box"
      />
      <CardList monsters={filtMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }
//   componentDidMount() {
//     const data = fetch("https://jsonplaceholder.typicode.com/users");
//     const userList = data
//       .then((res) => res.json())
//       .then((user) =>
//         this.setState(() => {
//           return { monsters: user };
//         })
//       );
//     console.log(this.state.monsters);
//   }

//   onSearch = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearch } = this;
//     const filtMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rollodex</h1>
//         <SearchBox
//           search={onSearch}
//           placeHolder="Find a Monster!"
//           className="search-box"
//         />

//         <CardList monsters={filtMonsters} />
//       </div>
//     );
//   }
// }

export default App;
