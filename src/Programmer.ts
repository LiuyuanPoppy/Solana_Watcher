export class Programmer {
    constructor(public name: string, public favoriteLanguage: string) { }
    public GetName() : String {
        return this.name;
    }
    public GetFavoriteLanguage() : String {
        return this.favoriteLanguage;
    }
}