import React, { Component } from 'react';
class Counter extends Component { 
    componentDidUpdate(prevProps, prevState){
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
    }
    // state = { 
    //     value: this.props.counter.value
    //     // tags : ['tag1','tag2', 'tag3']
    // }
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    // handleIncrement = () => {
    //     this.setState({value: this.state.value+1});
    // };
    // handleIncrement = (product) => {
    //     console.log(product);
    //     this.setState({count: this.state.value+1});
    // };
    // doHandleIncrement=() => {
    //     this.handleIncrement({id:1});
    // };
    // renderTags(){
    //     if (this.state.tags.length === 0) return <p>There are no Tags!</p>;
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    // }
    render() { 
        // console.log('props', this.props);
        console.log('Counter - Rendered');
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            {/* <button onClick={()=> this.handleIncrement({id:1}) } className='btn btn-secondary btn-sm'>+</button> */}
            <button onClick={() => this.props.onIncrement(this.props.counter)}  className='btn btn-secondary btn-sm m-2'>+</button>
            <button onClick={() => this.props.onDecrement(this.props.counter)} className='btn btn-secondary btn-sm m-2'>-</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
            {/* {this.state.tags.length === 0 && 'Please create a Tag!'} */}
            {/* {this.renderTags()} */}
        </div>
        );
    }
    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }
    formatCount(){
        const {value} = this.props.counter;
        return value=== 0? 'Zero' : value;
    }
}

export default Counter;