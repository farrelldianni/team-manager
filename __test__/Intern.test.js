const Intern = require("../lib/Intern");
describe("Intern", () => {
  let intern;
  beforeEach(() => {
    intern = new Intern("Nate", 1, "natewalchenbach24@gmail.com", "uw");
  });
  describe("getSchool", () => {
    it("you got the github username!", () => {
      const result = intern.getSchool();
      expect(result).toBe("uw");
    });
  });
  describe("getRole", () => {
    it("You got the Role", () => {
      const printedRole = intern.getRole();
      expect(printedRole).toBe("Intern");
    });
  });
});

