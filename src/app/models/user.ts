export class User {
  constructor(
    public name: string,
    public company: string,
    public email: string,
    public followers: number,
    public updated_at: string,
    public avatar_url: string
  ) { }
}
