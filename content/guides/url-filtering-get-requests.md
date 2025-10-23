# URL Filtering GET requests

For simple, readable `GET` requests, Kitledger provides a powerful URL-based filtering system. Instead of a complex JSON object, you use standard URL query parameters.

This method is ideal for quick lookups, simple filtering, and cacheable API calls. For highly complex queries (like nested `OR` groups), use the [Kitledger Query Object](#) with a `POST` request.

-----

## The Basics

The parser works by identifying two types of parameters:

1.  **Reserved Parameters:** Keys like `select`, `orderBy`, `limit`, etc., that control the query structure.
2.  **Filter Parameters:** *All other keys* are automatically treated as `WHERE` clauses.

-----

### Reserved Parameters

Here are the reserved keys and their syntax:

| Parameter | Syntax | Example |
| :--- | :--- | :--- |
| **`select`** | `select=column` <br> `select=column:alias` <br> `select=func(col):alias` | `?select=name&select=id:account_id&select=count(id):total` |
| **`orderBy`** | `orderBy=column.direction` | `?orderBy=name.asc&orderBy=created_at.desc` (direction defaults to `asc`) |
| **`join`** | `join=type:table:onLeft:onRight` <br> `join=type:table:as:onLeft:onRight` | `?join=left:profiles:p:users.id:p.user_id` |
| **`limit`** | `limit=number` | `?limit=25` |
| **`offset`** | `offset=number` | `?offset=50` |
| **`groupBy`** | `groupBy=column` | `?groupBy=type&groupBy=status` |

-----

## Filtering with `where` Clauses

This is the most powerful feature. Any parameter that is **not** one of the reserved keys is automatically converted into a `WHERE` condition.

The syntax is:
`?column=operator:value`

### Common Operators

You must use the full operator name, which maps directly to the Kitledger schema:

| Operator | Value Type | Example |
| :--- | :--- | :--- |
| **`equal`** | `string` / `number` / `boolean` | `?status=equal:active` |
| **`not_equal`**| `string` / `number` / `boolean` | `?status=not_equal:archived` |
| **`gt`** | `number` | `?balance=gt:1000` |
| **`gtequal`** | `number` | `?balance=gtequal:0` |
| **`lt`** | `number` | `?balance=lt:0` |
| **`ltequal`** | `number` | `?balance=ltequal:-100` |
| **`in`** | `array` (comma-separated) | `?id=in:1,2,3` |
| **`not_in`** | `array` (comma-separated) | `?status=not_in:archived,deleted` |
| **`like`** | `string` | `?name=like:%Assets%` (case-sensitive) |
| **`contains`** | `string` | `?name=contains:cash` (case-insensitive) |
| **`starts_with`** | `string` | `?code=starts_with:A-` |
| **`ends_with`** | `string` | `?email=ends_with:@kitledger.com` |
| **`empty`** | `boolean` | `?parent_id=empty:true` (finds `NULL` values) |
| **`not_empty`**| `boolean` | `?parent_id=not_empty:true` (finds non-`NULL` values) |

-----

## Combining Filters (`AND` vs. `OR`)

By default, all filter parameters are combined with **`AND`**.

`?status=equal:active&balance=gt:100`
*Translates to:* `WHERE status = 'active' AND balance > 100`

If you need to combine your main filters with **`OR`**, you can specify the `connector` parameter:

`?status=equal:active&balance=gt:100&connector=or`
*Translates to:* `WHERE status = 'active' OR balance > 100`

**Note:** This "flat" parser only supports a single top-level connector. For nested logic (e.g., `(A AND B) OR (C AND D)`), you must use the full [Kitledger Query Object](#).

-----

## Full Example URL

Here is a `GET` request that uses multiple features of the URL parser:

`/api/accounts?select=id&select=name&status=equal:active&balance=gt:0&orderBy=created_at.desc&limit=10`

This query will:

1.  **Select** the `id` and `name` columns.
2.  **Filter** for records where `status` is 'active' **AND** `balance` is greater than 0.
3.  **Order** the results by `created_at` in descending order.
4.  **Limit** the result to 10 records.