var React = require('react/addons');
var ReactDOM = require('react-dom');
var action = require('./../actions/GroceryItemActionCreator.jsx')

module.exports = React.createClass({
    getInitialState: function() {
        return {value: ''};
    },
    handleChange: function(e) {
        this.setState({value: e.target.value});
    },
    addItem:function(e) {
        e.preventDefault();
        action.add({
            name:this.state.value
        });
        this.setState({
            value:''
        })
    },
    render: function() {
        return (
            <div className='grocery-addItem'>
                <form onSubmit={this.addItem}>
                    <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    />
                        <button> Add Item </button>
                </form>
            </div>
        )
    }
})
