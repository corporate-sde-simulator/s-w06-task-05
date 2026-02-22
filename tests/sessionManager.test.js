const SessionManager = require("../src/sessionManager.js");
const TimeoutHandler = require("../src/timeoutHandler.js");

describe("Session management and timeout handler", () => {
    test("should process valid input", () => {
        const obj = new SessionManager();
        expect(obj.process({ key: "val" })).not.toBeNull();
    });
    test("should handle null", () => {
        const obj = new SessionManager();
        expect(obj.process(null)).toBeNull();
    });
    test("should track stats", () => {
        const obj = new SessionManager();
        obj.process({ x: 1 });
        expect(obj.getStats().processed).toBe(1);
    });
    test("support should work", () => {
        const obj = new TimeoutHandler();
        expect(obj.process({ data: "test" })).not.toBeNull();
    });
});
