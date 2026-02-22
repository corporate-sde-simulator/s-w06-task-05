# FINSERV-4221: Build secure session management with token rotation

**Status:** In Progress · **Priority:** High
**Sprint:** Sprint 28 · **Story Points:** 5
**Reporter:** Anjali Nair (Security Lead) · **Assignee:** You (Intern)
**Due:** End of sprint (Friday)
**Labels:** `backend`, `typescript`, `security`, `auth`
**Task Type:** Feature Ship

---

## Description

The `TokenGenerator` creates cryptographic tokens. Build the `SessionManager` that handles user session lifecycle — creation, validation, renewal, and expiry. Implement TODOs in `sessionManager.ts`.

## Acceptance Criteria

- [ ] `createSession()` creates a session with token, user data, and expiry
- [ ] `validateSession()` checks token validity and expiry
- [ ] `renewSession()` extends session and rotates token
- [ ] `revokeSession()` invalidates a session immediately
- [ ] Expired sessions are cleaned up automatically
- [ ] All unit tests pass
