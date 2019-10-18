import React, { Component } from "react";
import Cell from './Cell';

class Board extends Component {
	render() {
		return (
      <table>
        <tbody>
          <tr>
            <Cell isLit={false} />
            <Cell isLit={true} />
            <Cell isLit={false} />
          </tr>
        </tbody>
      </table>
		);
	}
}

export default Board;
