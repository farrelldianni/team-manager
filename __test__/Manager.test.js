const Manager = require("../lib/Manager");
describe("Manager", () => {
  let manager;
  beforeEach(() => {
    manager = new Manager("Nate", 1, "natewalchenbach24@gmail.com", "7");
  });
  describe("getRole", () => {
    it("You got the Role", () => {
      const printedRole = manager.getRole();
      expect(printedRole).toBe("Manager");
    });
  });
});