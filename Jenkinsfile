pipeline {
    agent any

    environment {
        KUBECONFIG = 'C:\\Users\\kasth\\.kube\\config'
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t corporate-website:v1 .'
            }
        }

        stage('Debug Kubernetes') {
            steps {
                bat 'echo %KUBECONFIG%'
                bat 'kubectl config current-context'
                bat 'kubectl get nodes'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                bat 'kubectl apply -f deployment.yaml'
                bat 'kubectl apply -f service.yaml'
            }
        }

        stage('Verify Deployment') {
            steps {
                bat 'kubectl get pods'
                bat 'kubectl get svc'
            }
        }

        stage('Finished') {
            steps {
                echo 'Corporate Website deployed successfully.'
            }
        }
    }
}