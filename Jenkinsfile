pipeline {
  agent any
  stages {
    stage('Check code') {
      steps {
        git(url: 'https://github.com/LukaszLebioda/MyProject.git', branch: 'master')
      }
    }

    stage('Welcome') {
      steps {
        echo '"Hello from Jenkins"'
      }
    }

  }
}