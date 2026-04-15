### Architecture Overview

```mermaid
graph LR
    subgraph "Client Side"
        A[React + Tailwind UI]
    end

    subgraph "Azure Subscription"
        SWA[Azure Static Web Apps]
        
        subgraph "App Logic"
            SB[Spring Boot - App Service]
            Func[AI Agent - Functions]
        end

        subgraph "Storage"
            SQL[(Azure SQL Serverless)]
            Cosmos[(Cosmos DB)]
        end
    end

    A --> SWA
    SWA --> SB
    SWA --> Func
    SB --> SQL
    SB --> Cosmos
