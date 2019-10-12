import {Programmer} from "./Programmer"

export class ProgrammerRepository{
    public GetByName(name : String) : Programmer{
        // stub for more interesting data retrieval
        throw new Error("data storage error");
    }
}

// Client Code //

export function GetFavoriteLanguage(name : String) : String{
    var repo = new ProgrammerRepository();
    var favLang : String;

    try{
        favLang = repo.GetByName(name).GetFavoriteLanguage();
    } catch {
        favLang = "Could not be found"
    }
    return favLang;
}