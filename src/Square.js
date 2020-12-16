import React from "react";

// class Square extends React.Component {
//   render() {
//     return (
//       <div className="square" onClick={this.props.onClick}>
//         {this.props.value}
//       </div>
//     );
//   }
// }

const Square = () => {
  return(
    <div className="square" onClick={this.props.onClick}>
        {this.props.value}
      </div>
  )
}

export default Square;
