import logger from "../../index";

describe("Index", () => {
  it("import", () => {
    logger.log("import something here");
  });

  it("require", () => {
    const rLogger = require("../../index");
    rLogger.log("require something here");
  });
});