# Santex Challenge
Installing and setting up, to execute the performance tests using K6.

## Open the terminal and following the steps below:

* Pre requirement
    Install NodeJS: https://nodejs.org/en/download

* Install K6 in your local machine:

        $ brew install k6

* Clone the project

        $ git clone https://github.com/vtrmartinez/santex_challenge

* Initialize NodeJS

        $ npm init -y

* Install K6 in your project

        $ npm install k6

# Run the tests

* Open the project's folder:

	 	$ cd ~/<project_folder>


* To run all the scenarios, use the command:

		$ k6 run index.js --vus 20 --duration 30s


 # Run the tests - CI Pipeline

- The CI pipeline on Github (named Github Actions) will be executed after every commit to the branch main.

<br>   
		
## Generate Report

- After running k6, you'll see in the terminal the results.
