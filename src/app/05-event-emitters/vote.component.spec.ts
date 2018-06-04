import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('Should raise both voteChanged event when upvoted', () => {
    let totalVotes = null;
    component.voteChanged.subscribe(tv => (totalVotes = tv));

    component.upVote();

    // expect(totalVotes).not.toBe(null);
    expect(totalVotes).toBe(1);
  });
});
