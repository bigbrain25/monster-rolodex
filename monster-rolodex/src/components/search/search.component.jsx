import React from 'react';

import SearchBox from '../search-box/search-box.component';


class Search extends React.Component {
    constructor() {
      super();

      this.state = {
        searchfield: ''
      };
    }
    render(){
    return (
        <div>
            <SearchBox
              placeholder='search monsters' 
              handleChange={e => this.setState({searchfield: e.target.value})}
            />        
        </div>
    );
  }
};
export default Search;