pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.62.1-jammy' 
            args '-u root --entrypoint='
        }
    }
    parameters {
        string(name: 'PERSON', defaultValue: 'Mr Jenkins', description: 'Who should I say hello to?')

        text(name: 'BIOGRAPHY', defaultValue: '', description: 'Enter some information about the person')

        booleanParam(name: 'TOGGLE', defaultValue: true, description: 'Toggle this value')

        choice(name: 'CHOICE', choices: ['One', 'Two', 'Three'], description: 'Pick something')

        password(name: 'PASSWORD', defaultValue: 'SECRET', description: 'Enter a password')
    }
    stages {
        stage("verifier version playwright")
        {
            steps{
                sh 'npx playwright --version'
            }
        }
        stage('install module') {
            steps {
                sh 'npm install'
            }
        }
        stage('lance test avec chromium') {
            steps {
                sh 'npx playwright test --project chromium'
                
            }
        }
    }
} 