class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    let $li1 = $("li");

    $li1.on("click", event => {
      // debugger
      const currentTarget = event.currentTarget;
      const $currentTarget = $(currentTarget);
      this.makeMove($currentTarget);
      // console.log($currentTarget)
    })
  }

  makeMove($square) {
    debugger 
    let pos = $square.data("pos");
    let mark = this.game.currentPlayer;
    this.game.playMove(pos);
    $square.text(mark);
    $square.addClass("whitebg");
    $square.addClass(mark);
    if (this.game.isOver()) {
      debugger 
      if (this.game.winner() !== null) {
        debugger
        let $li = $(`.${mark}`);
        $li.addClass("winner");
      } else {
        $li.addClass("drawtext");
        debugger
        $li.data(mark);
        let $li = $("li");
      }
    }
  }

  setupBoard() {
    let $newUl = $('<ul>');
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const $li = $('<li>');
        $li.data("pos", [row, col])
        $newUl.append($li);
    }
  }
    this.$el.append($newUl);
  }
}

module.exports = View;
