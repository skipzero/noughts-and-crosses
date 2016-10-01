class Store {
  getState (id) {
    const square = Array(3).fill(0);
    const gameArray = Array(3).fill(square);

    if (id === 'gameboard') {
      return gameArray;
    }
    if (id === 'message') {
      return '';
    }
  }


}



module.exports = Store;
