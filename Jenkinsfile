pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                echo 'Repository cloned successfully.'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t corporate-website:v1 .'
            }
        }

        stage('Remove Old Container') {
            steps {
                bat 'docker rm -f corporate-container || exit 0'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker run -d -p 8085:80 --name corporate-container corporate-website:v1'
            }
        }

        stage('Deployment Complete') {
            steps {
                echo 'Website deployed successfully.'
            }
        }
    }
}