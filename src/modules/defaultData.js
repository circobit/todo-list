// defaultData.js

export const infraTodos = [
    {
        title: "Migrate legacy database to AWS RDS",
        description: "Ensure zero downtime during the switch and verify all automated backups are functioning properly before execution.",
        dueDate: "2026-07-28",
        priority: "High"
    },
    {
        title: "Update CI/CD pipelines",
        description: "Refactor the current Jenkinsfiles to use declarative syntax and integrate the new SonarQube security scanning tools.",
        dueDate: "2026-08-05",
        priority: "Medium"
    },
    {
        title: "Audit IAM roles and permissions",
        description: "Review current AWS IAM roles, remove orphaned policies, and enforce the principle of least privilege across all developer accounts.",
        priority: "Low"
    },
    {
        title: "Apply critical Kubernetes patch",
        description: "Roll out the latest security patch to the production EKS cluster to resolve the newly disclosed CVE vulnerability.",
        dueDate: "2026-07-26",
        priority: "High"
    }
];

export const houseTodos = [
    {
        title: "Fix the leaking bathroom faucet",
        description: "Replace the worn O-ring in the guest bathroom sink to stop the continuous dripping. Buy a replacement cartridge if the leak persists.",
        dueDate: "2026-07-27",
        priority: "High"
    },
    {
        title: "Deep clean kitchen appliances",
        description: "Descale the coffee maker, degrease the oven interior, and empty the refrigerator to wipe down all shelves and drawers with antibacterial spray.",
        dueDate: "2026-07-29",
        priority: "Medium"
    },
    {
        title: "Organize the garage storage",
        description: "Sort through winter gear and old tools. Donate unused items to charity and label the remaining storage bins clearly for easy retrieval.",
        priority: "Low"
    },
    {
        title: "Pay monthly utility bills",
        description: "Review and pay the electricity, water, and internet bills for July. Update the auto-pay credit card information for the internet provider.",
        dueDate: "2026-07-30",
        priority: "High"
    },
    {
        title: "Landscaping and lawn maintenance",
        description: "Mow the front and back lawns, trim the overgrown hedges near the driveway, and inspect the sprinkler system for any broken heads.",
        dueDate: "2026-08-02",
        priority: "Medium"
    }
];