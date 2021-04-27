import React, { PureComponent } from "react";

{
  /*Navbar : 로고이미지, 제목, totalCount(app->navbar) 보여줌 */
}
class Navbar extends PureComponent {
  render() {
    return (
      <div className="navbar">
        <i className="navbar-logo fas fa-crow"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </div>
    );
  }
}

export default Navbar;
