# Kitledger

Kitledger is a framework for building transactional software based on double entry accounting.

## Is it an ERP?

No, Kitledger is not an ERP. Instead it is a fantastic tool to use if you are looking to craft a customized ERP system for your business.

However building an ERP system, even with great tooling, is a massive undertaking and as such Kitledger is not limited to *only* building ERP systems but rather any kind of system that benefits for double entry accounting principles.

In fact, the most valuable way to use Kitledger is as a complement to an organization's existing ERP system by providing transactional structure to departments and business processes that might not be, at a given point in time, properly supported by the main ERP platform.

## Use Cases

* Bookeeping
* Inventory Management Systems
* Cost Accruals
* Project Billing Systems
* Budgetting and Financial Planning
* Financing, Loan and Factoring systems
* Resource Allocation
* Time Tracking
* Reward Systems
* Game Currencies
* Grants and Donations
* Performance Measurement
* Consumption/Usage Based Billing
* Energy Consumption, Production and Allocation
* Employee Vacations and Benefits
* Sales Quotas and Commissions

## How can a single system be adapted to so many use cases?

In order to address this question, we first need to understand what makes most business management systems inflexible:

Most transactional systems are designed to solve particular problems in the way in which the system creators intended, meaning, the creator's opinions are embedded in how the system performs it's task. This is fine as long as the opinions of the system creators are aligned with how the user is expecting the problem to be solved or with the business process defined by the organization. 

The examples sound straight forward in theory, for instance, an Order to Cash process from an existing ERP system can be as simple as:

* Enter a Quote
* From the Quote, create a Sales Order
* From the Sales Order, create an Invoice
* Against the Invoice, track Payments

In practice, however, even very similar companies often have very different business processes for the same activity and there's a lot more nuance to the actual chain of transactions involved (B2B vs B2C, existing vs new Customers, Wholesale vs Retail). This puts stress in the relationship between the user and the system and often leads to one of the following scenarios:

1) **The user adapts to the system:** A very common one. The user follows the "best practices" of the system, leaves aside the alternative "company specific" process in favor of the standard system based one. This is often a "lesser of two evils" type of situation given that the user by this point has a significant time and money investment into the existing system and thus the idea of using the most out of it is justified. Results of this scenario are mixed and highly contextual.

2) **The system adapts to the user:** This one is less common mainly due to the fact that many systems simply do not have the ability to adapt at all to a change in process (Even though Sales Reps claim their product can "totally adapt to the organization"). Commonly, only high end business management software has the kind of advanced features that can allow this type of adaptation via customization and even then, certain challenges and limitations often appear. That said, on average, this scenario more often than not leads to the user being able to perform their task following the organization's preferred process and while this can be a double-edged sword, it's certainly more familiar and comfortable to the user. 

3) **The user bridges the gap with extra tools:** The most common scenario by far, brings additional tools into the process (Ahem! "Spreadhseets") as a last resort patch. While common, this often leads to fragile, complex business processes that are not well documented or depend on several disjointed tools without a clear guideline.

Kitledger addresses these problems by falling back to the fundamental building blocks present in any transactional system, improving them, and then providing the user user with solid, tested and documented ways to inject their preferred business processes directly into the solution. For Kitledger, customization and adaptation are not an afterthought or an extra feature, instead they are first class citizens and an integral part of the design.

Essentially, by taking the opposite stance of *not making any decisions for you*, Kitledger provides a robust scaffolding. As a user, you are expected and encouraged to customize Kitledger to your liking, in fact, this is for all intents and purposes the **main value proposition.**

## What are these fundamental building blocks?

1) **The Ledger:** Kitledger brings the [ACID](https://en.wikipedia.org/wiki/ACID) guarantees from database design into a double entry ledger that makes no assumptions about what types of accounts you operate with, what kinds of transactions you use or what data properties lie within these accounts. It is designed to guarantee transactional consistency by debiting and crediting accounts as instructed without risk of unbalanced accounts.

2) **The Data Model:** Kitledger pairs double entry accounting with a "schemaless" data model that revolves around three main concepts: Transactions, Entities and Units. Where Kitledger by default has no understanding of what these transactions actually are (Could be invoices, payments, time entries), what types of entities are involved (Employees, Players, Services, Pilots, Doctors) and what types of Units are exchanged in them (Could be currencies, units, crates, packages, licenses). The user is expected to define what each of these represent in their instance by setting up Transaction Models, Entity Models and Unit Models.

3) **The Computing Platform:** Simply customizing the data model and entering rows into a ledger is not enough to achieve true flexibility as a platform. The system needs a way to execute user defined code that acts as the glue between all the core concepts provided by the platform and provides the capability to determine the system response to every event, as required by the user's business process. 


These systems are accompanied by a secondary set of core features, such as:
* The Authentication and Authorization (Permissions) system
* The CLI for managing Kitledger Instances
* The Querying and Reporting engine
* The Console UI that provides a first party interface for operating a Kitledger instance


