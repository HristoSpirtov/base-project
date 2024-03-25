export class User {
  accessToken: String = ''
  username: String = ''

  constructor() {
  }

  public isDefined() : boolean {
    return this.accessToken != '' && this.username != ''
  }

}
