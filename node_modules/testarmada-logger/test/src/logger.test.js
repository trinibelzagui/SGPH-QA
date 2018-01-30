import { expect } from "chai";
import logger from "../../lib/logger";

describe("Logger", () => {
  afterEach(()=>{
    logger.prefix = "Testarmada";
  });

  it("default prefix", ()=>{
    logger.log("something");
  });

  it("customized prefix", ()=>{
    logger.prefix = "Logger";

    logger.log("something");  
  });

  it("log level", ()=>{
    logger.log("something");  
  });

  it("warn level", ()=>{
    logger.warn("something");  
  });

  it("debug level", ()=>{
    logger.debug("something");  
  });

  it("err level", ()=>{
    logger.err("something");  
  });

  it("help level", ()=>{
    logger.loghelp("something");  
  });

  it("message spread", ()=>{
    logger.log("something", "is", "here");
  });
});