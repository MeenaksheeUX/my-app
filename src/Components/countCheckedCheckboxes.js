// import React, { Component } from "react";
// const data = [
//     { checked: false, value: 'Checkbox-1' },
//     { checked: false, value: 'Checkbox-2' },
//     { checked: false, value: 'Checkbox-3' },
//     { checked: false, value: 'Checkbox-4' },
//     { checked: false, value: 'Checkbox-5' },
// ];

// const Item = props => (
//     <div>
//         <input type="checkbox" checked={props.checked} onChange={props.onCheckChange} />
//         { props.value }
//     </div>
// )
// var CheckboxCount = React.createClass({
//     getInitialState() {
//         return {
//             items: this.props.items.concat(),
//         };
//     },

//     onCheckChange(idx) {
//         return () => {
//             const items = this.state.items.concat();
//             items[idx].checked = !items[idx].checked;
//             this.setState({items});
//         }
//     },

//     totalChecked() {
//         return this.state.items.filter(props => props.checked).length;
//     },

//   render() {
//     return (
//             <div>
//                 { this.state.items.map((props, idx) => (
//                     <Item {...props} key={idx} onCheckChange={this.onCheckChange(idx)} />
//                 )) }
//                 Total Checkbox Checked: { this.totalChecked() }
//             </div>
//         );
//   }
// });

// export default <CheckboxCount items={data} />;

// // https://www.golangprograms.com/reactjs-basic-example-to-count-number-of-check-boxes-are-checked.html