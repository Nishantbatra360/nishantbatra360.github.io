# Portfolio - Data Engineering Expertise

Personal portfolio built with React + TypeScript + Vite, focused on visualizing Data Engineering capability:

- **Data Analysis**
- **Data Profiling**
- **ETL Scripting**
- **STTM Design**
- **Data Modeling and Data Quality**

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

This repository includes GitHub Actions workflow at `.github/workflows/deploy.yml`.

### One-time GitHub setup

1. Push this project to your GitHub repository.
2. In GitHub, open `Settings -> Pages`.
3. Under `Build and deployment`, select **Source: GitHub Actions**.

### Publish flow

1. Push changes to the `main` branch.
2. Workflow builds the site and deploys `dist` to `gh-pages`.
3. Your site is served from GitHub Pages automatically.

## Notes

- Router is configured with `HashRouter` to avoid refresh/404 issues on GitHub Pages.
- Vite `base` is set to `./` for repository-safe static asset paths.
