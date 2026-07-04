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
                echo 'Corporate Website deployed successfully to Kubernetes'
            }
        }

    }

}