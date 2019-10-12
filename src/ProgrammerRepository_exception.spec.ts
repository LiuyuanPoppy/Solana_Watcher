import { GetFavoriteLanguage } from "./ProgrammerRepository_exception"

test("Get favorite language for developer (with exception)", () => {
    let favoriteLanguage = GetFavoriteLanguage("Robert Tables");
    expect(favoriteLanguage).toBe("Could not be found");
})