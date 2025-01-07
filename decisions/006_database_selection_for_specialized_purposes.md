# Decision 006: Database Architecture Selection for Financial Ledger Framework

## Decision Record

**Author:** Alejandro Barrera Aponte (abarreraaponte@icloud.com)  
**Date:** 2024-01-05  
**Title:** Multi-Database Architecture with Clear Domain Separation

### Summary:

* Selected a multi-database architecture using Redis, OpenSearch, and DuckDB
* Each database serves a specific, well-defined domain
* Solving the need for a system that handles operational data, search, observability, and client-facing analytics while minimizing complexity

### Description:

Selected architecture consists of three main components with clear responsibilities:

1. Redis (AWS MemoryDB/ElastiCache):
   * Primary transactional database
   * Message broker for service communication
   * Job queue management for asynchronous tasks
   * Caching layer for performance
   * Using managed AWS service for reduced operational overhead
   * Note: No RedisJSON due to AWS managed service compatibility

2. OpenSearch:
   * Full-text search engine
   * Complete observability solution
   * Log aggregation and analysis
   * System metrics and monitoring
   * Real-time operational dashboards
   * Alerting and system health monitoring
   * Can be self-hosted or used as AWS managed service

3. DuckDB:
   * Client-facing analytical database
   * Direct SQL access for customers
   * Read-only access to their own data
   * Efficient analytical query processing
   * Ability to query Parquet/CSV files directly
   * Business intelligence and reporting

### Alternatives Considered:

1. MongoDB + Redis + DuckDB:
   * Rejected due to operational complexity
   * Search and observability capabilities not as robust
   * Would still need Redis for queues/caching

2. PostgreSQL + Redis + DuckDB:
   * Solid ACID compliance
   * Search capabilities not as sophisticated as OpenSearch
   * Observability would require additional tooling
   * Would still need three services

3. Using OpenSearch for Analytics (no DuckDB):
   * Would provide unified search and observability
   * Rejected due to lack of direct SQL access for clients
   * More expensive for large analytical workloads
   * Less efficient for pure analytical queries

### Impact:

Technical Implications:
* Clear separation of concerns between operational data, observability, and analytics
* Each system optimized for its specific domain
* Need to manage data synchronization between services
* Can leverage existing tools and clients for each system
* Strong observability from day one with OpenSearch

Performance Considerations:
* High performance for transactional operations (Redis)
* Efficient full-text search and log processing (OpenSearch)
* Fast analytical queries for client data (DuckDB)
* Each system can be scaled independently
* Potential latency in data synchronization between services

Maintainability:
* Clear boundaries between system responsibilities
* AWS managed services reduce operational overhead
* OpenSearch provides comprehensive system visibility
* DuckDB simplifies client data access
* Strong ecosystem and community support for all components

### Revision History:

* 2024-01-05 - Alejandro Barrera Aponte - Initial decision record detailing clear domain separation between databases and specifying OpenSearch as the observability solution