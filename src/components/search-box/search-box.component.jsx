import React, { Component } from "react";
import "./search-box.styles.css";

// class SearchBox extends Component {
//   render() {
//     const { search } = this.props;
//     return (
// <div>
//   <input
//     className={this.props.className}
//     type="search"
//     placeholder={this.props.placeHolder}
//     onChange={search}
//   />
// </div>
//     );
//   }
// }

const SearchBox = ({ search, className, placeHolder }) => {
  return (
    <div>
      <input
        className={className}
        type="search"
        placeholder={placeHolder}
        onChange={search}
      />
    </div>
  );
};

export default SearchBox;
