pipeline {
  agent any
  stages {
    stage('Welcome 1') {
      steps {
        echo 'Before git clone'
      }
    }
    stage('Check code') {
      steps {
        git(url: 'https://github.com/LukaszLebioda/MyProject.git', branch: 'master')
      }
    }
    stage('Welcome 2') {
      steps {
        echo 'After git cloneee'
      }
    }

  }
}