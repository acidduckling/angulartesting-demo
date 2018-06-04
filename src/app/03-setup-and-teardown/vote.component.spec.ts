import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  // Arrange - initialise the system under test
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('Should increment total votes when upvoted', () => {
    // Act
    component.upVote();

    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it('Should decrement total votes when downvoted', () => {
    // Act
    component.downVote();

    // Assert
    expect(component.totalVotes).toBe(-1);
  });
});
