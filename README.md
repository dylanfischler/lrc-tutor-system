# LRC Tutoring Hack

A Node.js app for the LRC Tutoring Center. 
The application is built using [Express 4](http://expressjs.com/).

## Uploading SSH keys to Github

```
$ cd ~/.ssh # if this is not a directory, mkdir ~/.ssh
$ ssh-keygen -t rsa # leave all default options (press enter)
$ cat id_rsa.pub # add this key to Github
```

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and [mongodb](https://www.mongodb.org) installed.

```sh
$ git clone git@github.com:dylanfischler/lrc-tutor-system.git # or clone your own fork
$ cd lrc-tutor-system
$ npm install
$ npm install -g grunt # if you haven't installed grunt
$ sudo gem install sass # if you haven't installed SASS
$ mongod --fork --logpath /var/log/mongodb.log # start mongodb as a daemon
$ grunt
```

Your app should now be running on [localhost:9000](http://localhost:9000/).

## Personal Workflow (During Development)

After cloning the repository (shown above in Running Locally), checkout a branch to work on. 

```
$ git checkout -b branchName
```

When work is complete, push to your branch. 

```
$ git add --all
$ git commit -m "commit message"
$ git push origin branchName
```

## Deploying to Production

** MAKE SURE YOUR BUILD IS PASSING **

```
$ git add .
$ git commit -m "commit message"
$ git push origin master
```
