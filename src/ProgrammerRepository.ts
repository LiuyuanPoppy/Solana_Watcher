import {Programmer} from "./Programmer"

export class ProgrammerRepository{
    public GetByName(name : String) : Programmer{
        // stub for more interesting data retrieval
        return new Programmer("Robert Tables", "TypeScript");
    }
}

// Client Code //

export function GetFavoriteLanguage(name : String) : String{
    var repo = new ProgrammerRepository();
    return repo.GetByName(name).GetFavoriteLanguage();
}