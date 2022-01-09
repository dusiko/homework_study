class Player {
  static step = true;
  static firstPush = true;
  static winCombination = [[0, 1, 2], [0, 3, 6], [3, 4, 5], [6, 7, 8], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

  constructor(name,type,move){
    this.name = name
    this.type = type
    this.move = []
    this.count = 0
  }
}
