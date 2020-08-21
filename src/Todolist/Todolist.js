import React, {Component} from 'react';

import classes from './Todolist.css';

class Todolist extends Component {
    
    state = {
        value: '',
        items: []
    }
    
    itemHandler = (event) => {
        event.preventDefault();
        this.setState({value: event.target.value});    
    }

    addItem = () => {
        let items = this.state.items;
        items.push(this.state.value);
        this.setState({ items });
    }

    listItems() {
        let items = this.state.items;
        return (
            <ul>
                {
                    items.map((val, index) => {
                        return (
                            <li key={index} >
                                {val}
                            </li>
                        );
                    })
                }
            </ul>
        );
    }  

    render() {    
        return (     
            <div className={classes.Main}>
                    <input 
                        className={classes.Input}
                        placeholder="Enter Task"
                        id="input"
                        value={this.state.value}
                        onChange={(event) => this.itemHandler(event)} />
                    <button 
                        type="submit"
                        className={classes.Button}
                        onClick={() => this.addItem()}>
                            ADD ITEM
                    </button>
                    {this.listItems()}
                   
            </div>
        );
    }
}

export default Todolist;