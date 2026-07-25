// defaultData.js

export const defaultTodos = [
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