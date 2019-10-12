import { GetFavoriteLanguage } from "./ProgrammerRepository"

test("Get favorite language for developer", () => {
    let favoriteLanguage = GetFavoriteLanguage("Robert Tables");
    expect(favoriteLanguage).toBe("TypeScript");
})
