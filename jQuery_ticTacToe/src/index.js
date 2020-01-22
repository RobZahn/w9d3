const View = require('./ttt-view')
const Game = require('./game')

  $(document).ready(() => {
    let newGame = new Game();
    let $view = $('.ttt');
    new View(newGame, $view);
  });

  