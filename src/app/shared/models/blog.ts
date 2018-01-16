export class Blog {
  constructor(public id: number,
              public title: string,
              public date: number,
              public firstParagraph: string,
              public leadQuestion: string,
              public imagePath: string,
              public secondParagraph: string,
              public thirdParagraph: string
            ) {}
}
