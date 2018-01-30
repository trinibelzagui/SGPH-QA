# logger
[![Build Status](https://travis-ci.org/TestArmada/logger.svg?branch=master)](https://travis-ci.org/TestArmada/logger)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![codecov](https://codecov.io/gh/TestArmada/logger/branch/master/graph/badge.svg)](https://codecov.io/gh/TestArmada/logger)


a simple logger to keep all logs of testarmada repos in the same format

## How to use

```javascript
import logger from "testarmada-logger";

logger.prefix = "SOME_PREFERRED_PREFIX";

logger.log("this", "is", "a", "thing");
// output: [INFO] [SOME_PREFERRED_PREFIX] this, is, a, thing

logger.warn("something");
// output: [WARN] [SOME_PREFERRED_PREFIX] something

logger.err("something");
// output: [ERROR] [SOME_PREFERRED_PREFIX] something

logger.loghelp("print help of your module");
// output: print help of your module

logger.debug("debug infomation");
// output [DEBUG] [SOME_PREFERRED_PREFIX] debug infomation
```

### Enable debug
Debug mode can be enabled by
 1. Add `TESTARMADA_LOGGER_DEBUG=true` as env variable, or
 2. Add `--debug` to your command