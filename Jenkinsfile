pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/YOUR-USERNAME/YOUR-REPO.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('my-html-app')
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Remove any existing container first (optional)
                    sh 'docker rm -f html-app || true'

                    // Run the container with a fixed name
                    sh 'docker run -d --name html-app -p 8080:80 my-html-app'
                }
            }
        }
    }
}
