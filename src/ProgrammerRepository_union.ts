import {Programmer} from "./Programmer"
import {LookupFailed} from "./LookupFailed"

//export type ProgrammerLookupResult = Programmer | LookupFailed;

export class ProgrammerRepository{
    public GetByName(name : String) : Programmer | LookupFailed {
        // stub for more interesting data retrieval
        return new LookupFailed("Entity not found");
    }
}

// Client Code //

export function GetFavoriteLanguage(name : String) : String{
    var repo = new ProgrammerRepository();
    var favLang : String = "";

    let result = repo.GetByName(name);
    
    if(result instanceof Programmer){
        favLang = result.GetFavoriteLanguage();
    } else if (result instanceof LookupFailed) {
        favLang = "Could not be found";
    }
    return favLang;
}