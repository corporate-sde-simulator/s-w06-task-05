# Beginner Explanatory Guide: FINSERV-4221: Build secure session management with token rotation

> **Task Type**: Service Task  
> **Domain/Focus**: Backend Session Management, TypeScript, Security, Authentication

---

## 1. The Goal (In-Depth Beginner Explanation)

### The Core Problem
In modern web applications, managing user sessions securely is crucial for protecting sensitive user data and ensuring a seamless user experience. The task at hand involves building a `SessionManager` that will handle the lifecycle of user sessions, including their creation, validation, renewal, and expiration. Currently, the application lacks a robust mechanism for managing these sessions, which can lead to security vulnerabilities such as session hijacking or unauthorized access. 

Without a proper session management system, users may remain logged in indefinitely, or their sessions may not be securely validated, allowing malicious actors to exploit these weaknesses. This task is important because it directly impacts user trust and the overall security posture of the application. By implementing a secure session management system with token rotation, we can ensure that user sessions are valid, timely, and protected against common security threats.

### Jargon Buster (Key Terms Explained)
* **Session**: A session is a temporary and interactive information interchange between two or more communicating devices, or between a user and a server. For example, when you log into a website, a session is created to keep you logged in while you navigate through different pages.
  
* **Token**: A token is a piece of data that is used to authenticate a user. It acts like a digital key that allows users to access their sessions without needing to re-enter their credentials. For instance, when you log in, the server generates a token that is sent to your browser, which is then used for subsequent requests.

* **Token Rotation**: This is a security practice where a new token is issued to a user after a certain period or after specific actions. This minimizes the risk of token theft because even if a token is compromised, it will only be valid for a limited time. For example, if a user’s session token is valid for one hour, the system can issue a new token every 30 minutes to ensure ongoing security.

* **Session Expiry**: This refers to the time limit set on a session after which it becomes invalid. For example, if a session is set to expire after 24 hours, the user will need to log in again after that period to continue using the application.

### Expected Outcome
After implementing the `SessionManager`, the system should be able to create, validate, renew, and revoke user sessions effectively. 

**Before**: Users could remain logged in indefinitely without any checks on session validity, leading to potential security risks.

**After**: The system will create sessions with a defined expiry, validate tokens on each request, renew sessions automatically when they are close to expiring, and revoke sessions when necessary. This will enhance security and provide a better user experience.

---

## 2. Related Coding Concepts & Syntax (50% Theory, 50% Practice)

### Concept 1: Object-Oriented Programming (OOP)
#### 📘 Theoretical Overview (50%)
* **Why it exists**: Object-Oriented Programming is a programming paradigm that uses "objects" to represent data and methods to manipulate that data. It helps in organizing code in a way that is modular, reusable, and easier to maintain. Without OOP, code can become tangled and difficult to manage, especially in larger applications.

* **Key Mechanisms**: OOP is built around four main principles: encapsulation (bundling data and methods), inheritance (creating new classes based on existing ones), polymorphism (using a single interface to represent different underlying forms), and abstraction (hiding complex implementation details). These principles help in creating a clear structure in code.

#### 💻 Syntax & Practical Examples (50%)
* **Language Syntax**:
  ```typescript
  class Session {
      sessionId: string;
      token: string;
      userId: string;

      constructor(sessionId: string, token: string, userId: string) {
          this.sessionId = sessionId;
          this.token = token;
          this.userId = userId;
      }
  }
  ```
  In this example, we define a `Session` class with properties and a constructor to initialize them.

* **Real-World Application**:
  ```typescript
  class SessionManager {
      private sessions: Map<string, Session> = new Map();

      createSession(userId: string): Session {
          const sessionId = this.generateSessionId();
          const token = this.generateToken();
          const session = new Session(sessionId, token, userId);
          this.sessions.set(sessionId, session);
          return session;
      }
  }
  ```
  Here, the `SessionManager` class uses the `Session` class to create and manage user sessions.

---

## 3. Step-by-Step Logic & Walkthrough

1. **Step 1: Locate and Analyze the Target File**
   * Navigate to the `s-w06-task-05` folder and open `sessionManager.ts`.
   * Focus on the methods marked with TODO comments, specifically `createSession`, `validateSession`, `renewSession`, and `revokeSession`.

2. **Step 2: Input Verification & Validation**
   * Before implementing the methods, consider edge cases such as:
     - What happens if `userId` is null or undefined?
     - How do we handle cases where the user exceeds the maximum number of concurrent sessions?

3. **Step 3: Core Implementation / Modification**
   * For `createSession`, generate a session ID and token, check for existing sessions, and create a new session object. Store it in the appropriate maps.
   * For `validateSession`, check if the token exists, if the session is revoked, and if it has expired. Update the last accessed time if valid.
   * For `renewSession`, find the session by the current token, generate a new token, and update the session details.
   * For `revokeSession`, mark the session as revoked.

4. **Step 4: Output Verification & Testing**
   * After implementing the methods, run the tests in `sessionManager.test.js` to ensure all functionalities work as expected. Use a testing framework like Jest to validate the implementation.

---

## 4. Detailed Walkthrough of Test Cases

### Test Case 1: Standard / Success Case
* **Description**: This test checks if a valid session can be created successfully.
* **Inputs**:
  ```json
  {
      "userId": "user123",
      "userData": {"name": "John Doe"},
      "ipAddress": "192.168.1.1",
      "userAgent": "Mozilla/5.0"
  }
  ```
* **Step-by-Step Execution Trace**:
  1. The `createSession` method is called with the provided inputs.
  2. A new session ID and token are generated.
  3. The method checks if the user already has the maximum number of concurrent sessions.
  4. A new session object is created and stored in the sessions map.
  5. The method returns the newly created session.
* **Expected Output**: A session object containing the session ID, token, user ID, and other relevant data.

### Test Case 2: Edge Case / Validation Fail
* **Description**: This test checks the behavior when trying to create a session for a user who has reached the maximum number of concurrent sessions.
* **Inputs**:
  ```json
  {
      "userId": "user123",
      "userData": {"name": "John Doe"}
  }
  ```
* **Step-by-Step Execution Trace**:
  1. The `createSession` method is called.
  2. The method checks the number of existing sessions for `user123`.
  3. If the maximum number of sessions is reached, the oldest session is evicted.
  4. A new session is created and returned.
* **Expected Output**: The new session object, or an error message indicating that the maximum number of sessions has been reached if no session can be created.

By following this guide, you should have a clear understanding of how to implement secure session management in your application, ensuring a robust and secure user experience.