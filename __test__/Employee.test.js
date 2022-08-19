const Employee = require("../lib/Employee");
describe("Employee", () => {
  let employee;

  beforeEach(() => {
    employee = new Employee(
      "Farrell",
      1,
      "farrell.d.dianni@gmail.com",
      "Employee"
    );
  });

  describe("getName", () => {
    it("you got the name!", () => {
      const printedName = employee.getName();
      expect(printedName).toBe("Nate");
    });
  });
  describe("getId", () => {
    it("You got the ID", () => {
      const printedId = employee.getId();
      expect(printedId).toBe(1);
    });
  });
  describe("getEmail", () => {
    it("You got the email!", () => {
      const printedEmail = employee.getEmail();
      expect(printedEmail).toBe("farrell.d.dianni@gmail.com");
    });
  });
  describe("getRole", () => {
    it("You got the Role", () => {
      const printedRole = employee.getRole();
      expect(printedRole).toBe("Employee");
    });
  });
});