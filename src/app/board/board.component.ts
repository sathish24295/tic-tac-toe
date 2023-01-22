import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  values: Array<any>;
  isXNext: boolean;
  winner: string;
  isGameStarted: boolean;
  matchingValues: Array<any>;
  constructor() {}

  ngOnInit(): void {
    this.startNewGame();
  }

  onSquareClick(i) {
    if (!this.winner) {
      this.values.splice(i, 1, this.currentPlayer);
      this.isGameStarted = true;
      this.isXNext = !this.isXNext;
      this.matchingValues.forEach((val) => {
        let [a, b, c] = val;
        if (
          this.values[a] != null &&
          this.values[b] != null &&
          this.values[c] != null &&
          this.values[a] == this.values[b] &&
          this.values[a] == this.values[c]
        ) {
          this.winner = this.values[a];
        }
      });
    }
  }

  startNewGame() {
    this.values = Array(9).fill(null);
    this.isXNext = true;
    this.winner = null;
    this.isGameStarted = false;
    this.matchingValues = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }

  checkWinner() {}

  get currentPlayer() {
    return this.isXNext ? 'X' : 'O';
  }

  get styleExp() {
    return this.currentPlayer == 'X' ? '#ff708d' : '#2ce69b';
  }
}
