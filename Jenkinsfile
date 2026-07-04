pipeline {
    agent any

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
                bat 'kubectl version --client'
                bat 'kubectl config view'
                bat 'kubectl config current-context'
                bat 'kubectl cluster-info'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                bat '''
                kubectl apply -f deployment.yaml --validate=false
                kubectl apply -f service.yaml --validate=false
                '''
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