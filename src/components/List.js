import React from 'react';

class List extends React.Component {
    render() {
        return (
            <div>
                <ListProfile id={this.props.id} name={this.props.name}/>
                <ListInfo password={this.props.password} email={this.props.email} gender={this.props.gender} job={this.props.job}/>
            </div>
        )
    }
}

class ListProfile extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
        }
}
    
class ListInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.password}</p>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default List;