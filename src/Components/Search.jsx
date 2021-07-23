import React, { Component } from 'react';
class Search extends Component {
    state = { 
        content_search : ""
     }
    constructor(props){
        super(props);
        this.onHandSearch = this.onHandSearch.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }
    onHandSearch(event){
       var value = event.target.value;
        this.setState({
            content_search: value
        });

    }
    onSearch(){
        this.props.sendSearch(this.state.content_search);
    }
    render() { 
        return ( 
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="form-group">
                    
                    <div className="row">
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <input type="text" className="form-control" name="search" onChange={this.onHandSearch}  placeholder="Nội dung tìm kiếm"/>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <button type="submit" className="btn btn-warning" onClick={this.onSearch}>Search</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        
         );
    }
}
 
export default Search;