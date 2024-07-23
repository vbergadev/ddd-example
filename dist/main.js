"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expressApp_1 = require("./infrastructure/http/expressApp");
const PORT = 3000;
expressApp_1.app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
