# CI/CD Pipeline Project

This project demonstrates setting up a CI/CD (Continuous Integration/Continuous Deployment) pipeline. It automatically runs code tests, builds Docker images, pushes them to a registry, and deploys to Kubernetes using GitHub Actions.


## Project Contents

This project includes the following CI/CD steps:

1. **Continuous Integration (CI)**:
   - Code Quality Control: Running tests automatically
   - Test Reporting: Reporting test results

2. **Continuous Delivery (CD)**:
   - Docker Image Building: Creating a Docker image for the application
   - Container Registry: Pushing the Docker image to Docker Hub

3. **Continuous Deployment**:
   - Kubernetes Deployment: Automatic deployment to Kubernetes
   - Deployment Verification: Verifying successful deployment

## Prerequisites

- GitHub account
- Docker Hub account
- Kubernetes cluster (Minikube, EKS, GKE, AKS, etc.)
- kubectl installed and configured

## Setup Steps

### 1. GitHub Secrets Configuration

Create the following secrets in your GitHub repository:

- `DOCKER_USERNAME`: Your Docker Hub username
- `DOCKER_PASSWORD`: Your Docker Hub password or token
- `KUBE_CONFIG`: Your kubeconfig file base64 encoded for accessing your Kubernetes cluster

### 2. Cloning the Repository and Local Development

```bash
# Clone the repository
git clone https://github.com/<github-username>/cicd-pipeline.git
cd cicd-pipeline

# Test the application locally
cd app
npm install
npm test
npm start
```

### 3. Triggering the CI/CD Pipeline

To trigger the CI/CD pipeline:

1. Commit and push your changes
```bash
git add .
git commit -m "Update: Description of changes"
git push origin main
```

2. You can monitor the pipeline execution in the GitHub Actions tab.

### 4. Pipeline Steps

1. **Test**: Tests your code and reports test coverage.
2. **Build & Push**: Builds your Docker image and pushes it to Docker Hub.
3. **Deploy**: Applies Kubernetes manifests and deploys your application to your Kubernetes cluster.

## Pipeline Configuration

The GitHub Actions workflow configuration is located in `.github/workflows/ci-cd.yaml`:

- Node.js environment for tests
- Docker image building and pushing to Docker Hub
- Kubernetes deployment and verification

## Kubernetes Deployment

Kubernetes manifest files are located in the `k8s/` directory:

- `deployment.yaml`: Kubernetes deployment definition for the application
- `service.yaml`: Kubernetes service definition for the application

## Troubleshooting

### GitHub Actions Errors
- Check error messages in the GitHub Actions tab.
- Ensure required secrets are properly configured.

### Docker Image Issues
- Verify the image was successfully pushed to Docker Hub.
- Pull and test the image locally.

### Kubernetes Deployment Issues
- Check pod status with `kubectl get pods`.
- View deployment details with `kubectl describe pod <pod-name>`.
- Check pod logs with `kubectl logs <pod-name>`.

## Further Steps and Improvements

Suggestions to further enhance this project:

1. Add SonarQube code quality analysis
2. Create different pipelines for staging and production environments
3. Implement Canary or Blue/Green deployment strategies
4. Add Slack or email notifications
5. Implement automatic versioning and release notes

## Contributing

1. Fork this repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push your branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
