type VotationOption = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  private _votationsOptions: VotationOption[] = [];
  // Frases => qual sua linguagem de programação favorita...
  constructor(public details: string) {}
  addVotationOption(votationOption: VotationOption): void {
    this._votationsOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationsOptions[votationIndex]) return;
    this._votationsOptions[votationIndex].numberOfVotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationsOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
    }
  }
}

const votation1 = new Votation('Qual a sua linguagem de programação favorita?');
votation1.addVotationOption({ option: 'Js', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'py', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'type', numberOfVotes: 0 });

const votationApp = new VotationApp();
votationApp.addVotation(votation1);

votationApp.showVotations();
