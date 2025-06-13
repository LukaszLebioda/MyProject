# installation on MacOS

- install the latest LTS version: `brew install jenkins-lts`,
- start the Jenkins service: `brew services start jenkins-lts`,
- restart the Jenkins service: `brew services restart jenkins-lts`,
- stop the Jenkins service: `brew services stop jenkins-lts`,
- update the Jenkins version: `brew upgrade jenkins-lts`,
  Jenkins is now available on: `http://localhost:8080`

- to unlock Jenkins (unlocking needed only 1 time after installation), provide an initial password from the path suggested on the unlocking screen (e.g. /Users/llebioda/.jenkins/secrets/initialAdminPassword),
- install suggested plugins,
- create first admin user (username & password needed),

# Jenkins plugins

- Pipeline Stage View (to see overview of pipeline run),
- Blue Ocean (updated UI and pipeline creator),
<!-- - GitHub (pre-installed by default) & GitHub Integration, -->
- Docker & Docker Compose Build Step (to integrate with Docker),

# GitHub integration with Blue Ocean plugin

We can integrate Jenkins with Github with SSH keys or Personal Access Token.

Personal Access Token:

- Jenikns: generate GitHub token: GitHub settings -> Developer Settings -> Personal access tokens -> Tokens (classic) (note: name for the token, expiration: eg. no expiration, select scopes: recommended), generate token & copy it,

- GitHub: install Jenkins Blue Ocean plugin, open Blue Ocean, create new pipeline, select GitHub as code repository, provide GitHub access token (the best way is from the link here, as access token configuration will be set by default), select organization (e.g. LukaszLebioda) and repository name (e.g. MyProject), create pipeline,

- Jenkins: in project / branch configuration set triggers, e.g.

# vocabulary

- Jenkins is a CI/CD server to test, build and deploy applications;
- Jenkins CONTROLLER -> a server instance with GUI we work with,
- Jenkins AGENT -> a node that manages the executions of pipelines,
- Jenkins JOB is an automated process, a task we want to automate,
- Jenkins FREESTYLE is a simple job configured only with Jenkins GUI, so the the configuration is stored within Jenkins only and not as a code than can be exported, shared and keep-tracked, example: -> New item -> Select item: Freestyle project -> Configure -> Build steps -> Execute shell => echo "Hello world",
- Jenkins PIPELINE is a more complicated job defined as a series of stages (stages have steps) and the main advantage is that it is kept as a code, that can be exported, shared and keep-tracked, example: -> New item -> Select item: Pipeline -> Pipeline -> Script,

# Pipeline example (Laptop assembly)

pipeline {
agent any

    stages {
        stage('Build') {
            steps {
                cleanWs() // clean the workspace (clean artifacts, like .txt files etc.)
                sh 'echo "Building a new laptop..."' // print info to the console
                sh 'mkdir -p build' // create directory if it doesn't exist
                sh 'touch build/computer.txt' // create .txt file (or update its timestamp)
                sh 'echo "Mainboard" >> build/computer.txt' // print to .txt file
                sh 'cat build/computer.txt' // read .txt file
                sh 'echo "Display" >> build/computer.txt' // print to .txt file
                sh 'cat build/computer.txt' // read .txt file
                sh 'echo "Keyboard" >> build/computer.txt' // print to .txt file
                sh 'cat build/computer.txt' // read .txt file
            }
        }
    }
    post { // run this after all the stages
        success { // run this if success only (or: always)
            archiveArtifacts artifacts: 'build/**' // archive whatever is inside build dir
        }
    }

}
