pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Smoke Tests') {
            steps {
                sh 'npx playwright test tests/smoke'
            }
        }

        stage('Regression Tests') {
            steps {
                sh 'npx playwright test tests/regression'
            }
        }
    }
}