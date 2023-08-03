BUILD PHASE
*********************************
STEP 1: Install necessary packages and create 2 react apps using app1 and app2 folders inside the exclude folder

	=> npm install
	=> cd exclude/app1
	=> npm install
	=> cd ../app2
	=> npm install

note: change the name of the folders if necessary and update the following file 
	
	exclude/new_app1_name/webpack.config
	exclude/new_app2_name/webpack.config
	dist/new_app1_name.html	//change the html name
	dist/new_app2_name.html //change the html name
	server/index.js //modify the directory path and the file name on the path.join

STEP 2: go to root folder then open terminal and run 

	=> npx webpack --config webpack.config.js

note: this will create/modify the bundle.js files in the dist folder

STEP 3: Push to your git repository

**********************************

	git init //if not yet connected to the repo and no .git folder yet
	git add .
	git config user.name '<your name in github>'
	git config user.email '<your email in github>'
	git commit -m 'first commit'
	git remote add origin '<your repo link>'
	git push -u origin master //main if main branch

*********************************


DEPLOYMENT PHASE
*********************************
STEP 1: Login | Register to https://render.com/
STEP 2: Select New Web Services
STEP 3: Connect GitHub
STEP 4: Connect the repo of your project
STEP 5: Enter a unique name for your web service
STEP 6: Select region (optional)
STEP 7: Select repository branch used for your web service (master/main)
STEP 8: Select root directory (optional)
STEP 9: Change Build Command to => npm install
STEP 10: Enter Start Command => npm start
STEP 11: Click Advance settings then enter all environmental variables in your app


CONGRATULATIONS! YOU HAVE CREATED YOUR NEW WEBSITE WITH 2 FRONTEND AND A SINGLE SERVER
