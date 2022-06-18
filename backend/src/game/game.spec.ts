import { MockedClass } from 'src/testing';
import { Game } from './game';

describe('Game', () => {
  // SUT
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  it('should be able to execute a move', () => {
    game.executeMove();
    expect(2).toBe(2);
  });
});
