# sample-angular-project — My sample app in AngularJS 1

This application is sample of my skills and style of coding.


## Important information!

I've started this project on 7th of November 2016 and it is not completed.

First checkpoint would be app with these features:

* 2 and more modules (ctrl + view)
* bower and npm
* sample service, factory and directive
* unit tests with coverage (karma/jasmine/istanbul)
* simple design (bootstrap + less + font awesome)
* grunt or gulp


## Getting Started

To get you started you can simply clone the angular-seed repository and install the dependencies:


### Prerequisites

You need git to clone the sample-angular-project repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

I also use node.js to initialize and test sample-angular-project. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).


### Clone sample-angular-project

Clone the sample-angular-project repository using [git][git]:

```
git clone https://github.com/nusix/sample-angular-project.git
cd sample-angular-project
```


### Install Dependencies

`Npm` is automatically preconfigured to run `bower` so you can simply do:

```
npm install
```


### Run the Application

The project is preconfigured with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/index.html`.


## Testing

There are unit tests in this project.

### Running Unit Tests

Unit tests are written in
[Jasmine][jasmine], which you run with the [Karma Test Runner][karma].

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._test.js`.
* run `npm install -g karma-cli` to install karma locally and then start tests in app folder

To run the unit tests run :

```
karma start
```

## Directory Layout

```
app/                    --> all of the source files for the application
  coverage/             --> source of unit tests coverage
  index/                --> the index view template and logic
    index.html            --> the partial template
    index.js              --> the controller logic
    index_test.js         --> tests of the controller
  page2/                --> the view2 view template and logic
    page2.html            --> the partial template
    page2.js              --> the controller logic
  shared/               --> common components (directives, jsons, services)
  style/                --> style files
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
```