import { Programmer} from "./Programmer"

test("todo", () => {
    let coder = new Programmer("Robert Tables", "TypeScript");
    expect(coder.GetName()).toBe("Robert Tables");
})
