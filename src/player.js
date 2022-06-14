export default class Player {
  constructor(board) {
    this.board = board;
    this.type = null;
    this.name = null;
  }

  setPlayerType(index) {
    const types = ['human', 'computer'];
    this.type = types[index];
  }

  setPlayerName(name) {
    this.name = name;
  }

  // sendAttack()
  //    Takes in opponents' board in as an argument and sends a valid attack 
  //    (i.e. attacks an unattacked coordinate). 

  //    If Player is a 'computer' type, attack coordinate will be chosen 
  //    randomly. NOTE: This  should probably be handled by the gameloop

}