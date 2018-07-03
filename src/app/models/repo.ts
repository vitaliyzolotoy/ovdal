export class Repo {
  constructor(
    public name: string,
    public description: string,
    public html_url: string,
    public forks_count: number,
    public watchers_count: number
  ) { }
}
