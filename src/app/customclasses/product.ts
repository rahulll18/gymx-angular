export class Product {
  constructor(
    public productId: Number = 0,
    public productHeading: string = '',
    public productDescription: string = '',
    public productPrice: string = '',
    public productStrike: string = '',
    public productOffer: string = '' ,
    public productImage: string = ''
  ) {}
}
