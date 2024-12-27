# KitLedger

A modern framework for building transactional software systems based on double-entry accounting principles.

![KitLedger](/brand/profile.png)

## Overview

KitLedger provides a robust foundation for building financial systems and workflows that require strict consistency and auditability. It combines an API-first approach with flexible deployment options, making it suitable for both startups and enterprise implementations.

## Key Features

### Core Functionality
- **Double-Entry Accounting Engine**: Built-in safeguards ensure transactional consistency
- **Flexible Schema Design**: Define custom entity types and transaction templates
- **Real-time Event Stream**: Subscribe to ledger changes for immediate processing
- **Rich Query API**: Powerful filtering and aggregation capabilities

### Developer Experience
- **TypeScript/PHP SDK**: First-class support for modern development workflows
- **Auto-generated API Documentation**: OpenAPI specifications that stay in sync with your schema
- **Local Development Environment**: Deno-based CLI for rapid prototyping
- **Extensive Testing Tools**: Helper libraries for writing integration tests

### Enterprise Ready
- **AWS Integration**: 
  - Native support for AWS services (DynamoDB, EventBridge, Lambda)
  - Simple deployment using CloudFormation/CDK
  - Multi-region replication options
- **Security**: 
  - Fine-grained access control
  - Audit logging
  - Encryption at rest and in transit

## Use Cases

- **Loyalty Programs**: Track points earning and redemption
- **Digital Wallet Systems**: Manage multiple currency balances and transfers
- **Inventory Management**: Track stock movements with full audit trail
- **Billing Systems**: Complex pricing and usage-based billing
- **Gaming Economies**: Virtual currency and item trading systems
- **Carbon Credit Trading**: Track environmental offset transactions

## Getting Started

```bash
# Install the CLI
deno install -A -n kitledger https://deno.land/x/kitledger/cli.ts

# Initialize a new project
kitledger init my-project

# Start the local development server
kitledger dev
```

Visit the [documentation](https://kitledger.dev/docs) for detailed setup instructions and tutorials.

## Deployment

### AWS (Recommended)
```bash
# Configure AWS credentials
aws configure

# Deploy to your AWS account
kitledger deploy --aws
```

### Self-hosted
```bash
# Build Docker images
docker compose build

# Start services
docker compose up -d
```

## Documentation

- [Getting Started Guide](https://kitledger.dev/guide/getting-started)
- [Core Concepts](https://kitledger.dev/guide/concepts)
- [API Reference](https://kitledger.dev/api)
- [SDK Documentation](https://kitledger.dev/sdk)
- [Deployment Guide](https://kitledger.dev/guide/deployment)

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT License - see [LICENSE](LICENSE) for details