import React from "react";
import { MDBContainer, MDBIcon } from "mdbreact";

const Search = () => {
  return (
    <MDBContainer>
      <div className="input-group md-form form-sm form-1 pl-0">
        <div className="input-group-prepend">
          <span className="input-group-text cyan lighten-2" id="basic-text1">
            <MDBIcon icon="search" className="text-grey" />
          </span>
        </div>
        <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
      </div>
    </MDBContainer>
  );
}

export default Search;