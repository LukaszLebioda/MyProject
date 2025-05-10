pipeline {
  agent any
  stages {
    stage('Welcome') {
      sh '''
        echo "Welcome to Jenkins"
        echo "This is a simple pipeline"
        echo "We will build and test the code"
      '''
    }
    stage('Check code') {
      steps {
        git(url: 'https://github.com/LukaszLebioda/MyProject', branch: 'master')
      }
    }

  }
}