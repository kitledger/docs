# Writing Queries

Kitledger uses a structured JSON object to define complex queries. This object format provides full control over data retrieval and is typically used in `POST` requests (e.g., `/api/accounts/search`) or internal scripts.

Here are the basic properties of a Kitledger Query Object:

## `select`

An array that specifies which columns to return. It accepts three formats:

* **Simple string:** `"column_name"`
* **Object with alias:** `{ "column": "accounts.id", "as": "account_id" }`
* **Aggregate function:** `{ "func": "count", "column": "id", "as": "total_count" }`
  * Valid functions are: `count`, `sum`, `avg`, `min`, `max`.

<!-- end list -->

```json
"select": [
  "accounts.name",
  { "column": "accounts.code", "as": "account_code" },
  { "func": "sum", "column": "transactions.amount", "as": "total_spent" }
]
```

## `joins`

An optional array of objects defining how to join other tables.

* **`type`**: The SQL join type (`inner`, `left`, `right`, `full_outer`).
* **`table`**: The table to join.
* **`as`**: (Optional) An alias for the joined table.
* **`onLeft`**: The "left" side of the `ON` clause (e.g., `primary_table.foreign_key`).
* **`onRight`**: The "right" side of the `ON` clause (e.g., `alias.id`).

<!-- end list -->

```json
"joins": [
  {
    "type": "left",
    "table": "accounts",
    "as": "parent",
    "onLeft": "accounts.parent_id",
    "onRight": "parent.id"
  }
]
```

## `where`

An array of `ConditionGroup` objects. This allows for building complex `AND`/`OR` logic. A `ConditionGroup` has two properties:

* **`connector`**: How the conditions are joined (`and` or `or`).
* **`conditions`**: An array of `Condition` objects or nested `ConditionGroup` objects.

A `Condition` object has three properties:

* **`column`**: The column to filter on.
* **`operator`**: The comparison operator (e.g., `equal`, `gt`, `like`, `in`, `not_empty`).
* **`value`**: The value to compare against.

<!-- end list -->

```json
"where": [
  {
    "connector": "and",
    "conditions": [
      { "column": "accounts.balance_type", "operator": "equal", "value": "debit" },
      { "column": "accounts.balance", "operator": "gt", "value": 1000 },
      {
        "connector": "or",
        "conditions": [
          { "column": "accounts.status", "operator": "equal", "value": "active" },
          { "column": "accounts.status", "operator": "equal", "value": "pending" }
        ]
      }
    ]
  }
]
```

## `orderBy`

An optional array of objects to sort the results.

* **`column`**: The column to sort by.
* **`direction`**: `asc` (ascending) or `desc` (descending).

<!-- end list -->

```json
"orderBy": [
  { "column": "accounts.created_at", "direction": "desc" },
  { "column": "accounts.name", "direction": "asc" }
]
```

## `groupBy`

An optional array of column names to group results by, typically used with aggregate functions.

```json
"groupBy": ["accounts.type"]
```

## `limit` & `offset`

Optional numbers used for pagination.

* **`limit`**: The maximum number of records to return.
* **`offset`**: The number of records to skip.

<!-- end list -->

```json
"limit": 50,
"offset": 0
```

## Full Example

Here is a complete Query Object combining these elements:

```json
{
  "select": [
    { "column": "accounts.id", "as": "account_id" },
    { "column": "parent.name", "as": "parent_name" }
  ],
  "joins": [
    {
      "type": "left",
      "table": "accounts",
      "as": "parent",
      "onLeft": "accounts.parent_id",
      "onRight": "parent.id"
    }
  ],
  "where": [
    {
      "connector": "and",
      "conditions": [
        { "column": "accounts.parent_id", "operator": "not_empty", "value": true }
      ]
    }
  ],
  "orderBy": [
    { "column": "accounts.created_at", "direction": "desc" }
  ],
  "limit": 50,
  "offset": 0
}
```
