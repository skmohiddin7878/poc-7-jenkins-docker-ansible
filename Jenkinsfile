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
                sh 'docker build -t poc7-app .'
            }
        }

        stage('Deploy using Ansible') {
            steps {
                sh 'ansible-playbook ansible/deploy.yml'
            }
        }
    }
}

