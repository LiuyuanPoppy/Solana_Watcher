import { GetFavoriteLanguage } from "./ProgrammerRepository_union"

test("Get favorite language for developer (with exception)", () => {
    let favoriteLanguage = GetFavoriteLanguage("Robert Tables");
    expect(favoriteLanguage).toBe("Could not be found");
})