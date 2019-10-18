import React, { Component } from "react";
import Cell from './Cell';
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/


class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
  }
  
  constructor(props) {
    super(props);

    this.state = {
      hasWon: false,
      board: this.createBoard()
    }
  }

  createBoard() {
    let board = [];

    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      
      for (let x = 0; x < this.props.ncols; x++) {
        row.push(Math.random() < this.props.chanceLightStartsOn)
      }
      board.push(row);
    }
    return board;
  }

  flipCellsAround(coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {

      if ( x >= 0 && x < ncols && y >=0 && y < nrows ) {
        board[y][x] = !board[y][x];
      }
    }
  }


	render() {
    let tblBoard = [];

    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      
      for (let x = 0; x < this.props.ncols; x++) {
        row.push(<Cell isLit={this.state.board[y][x]} />)
      }
      tblBoard.push(<tr>{row}</tr>)
    }

		return (
        <table className="Board">
          <tbody>
            {tblBoard}
          </tbody>
        </table>
		);
	}
}

export default Board;
