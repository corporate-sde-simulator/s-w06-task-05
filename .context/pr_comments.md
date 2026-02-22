# PR Review - Session management and timeout handler (by Deepak Gupta)

## Reviewer: Neha Sharma
---

**Overall:** Good foundation but critical bugs need fixing before merge.

### `sessionManager.js`

> **Bug #1:** Session extension on activity uses absolute timeout instead of sliding and extends past max lifetime
> This is the higher priority fix. Check the logic carefully and compare against the design doc.

### `timeoutHandler.js`

> **Bug #2:** Concurrent session limit check counts expired sessions as active and blocks valid new logins
> This is more subtle but will cause issues in production. Make sure to add a test case for this.

---

**Deepak Gupta**
> Acknowledged. I have documented the issues for whoever picks this up.
