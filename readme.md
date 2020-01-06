Test App with NodeJS, Express, AngularJS, Jasmine, Karma, Travis-CI, CodeMate
==============================================================================

[![codebeat badge](https://codebeat.co/badges/8529163a-631f-4159-a5ff-27741d76adc8)](https://codebeat.co/projects/github-com-shabin-slr-hotel-searcher-master)
[![Build Status](https://travis-ci.org/shabin-slr/hotel-searcher.svg?branch=master)](https://travis-ci.org/shabin-slr/hotel-searcher)
#### An app that allows search in the given inventory by any of the following:

- Hotel Name
- Destination [City]
- Price range [ex: $100:$200]
- Date range [ex: 10-10-2020:15-10-2020]

and allow sorting by:

- Hotel Name
- Price

### Directory layout

    .
    ├── app                     # Backend Code
    ├── specs                   # Backend Specs
    ├── public                  # Frontend Code
    |   L specs                 # Frontend Specs
    ├── travis.yml              # Config for Travis CI
    ├── bower.json              # Front end dependencies
    ├── karma.conf.js           # Config for Karma Test Runner
    ├── package.json            # Project dependencies
    ├── README.md               
    └── server.js               # entry point

####  Stack
- Angular : v1.7.3
- NodeJS : v9.11.2
- Continuous Integration : Travis CI  [![Build Status](https://travis-ci.org/shabin-slr/hotel-searcher.svg?branch=master)](https://travis-ci.org/shabin-slr/hotel-searcher)
- Code Quality : Codebeat  [![codebeat badge](https://codebeat.co/badges/8529163a-631f-4159-a5ff-27741d76adc8)](https://codebeat.co/projects/github-com-shabin-slr-hotel-searcher-master) 

#### Getting Started
## Install dependencies
```
npm install
```

## Start Application
```
npm start
```
Server will start on port 3000 in localhost
Got to <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a> to see the app running


## Run Backend unit tests
```
npm test
```

## Run front-end unit tests
```
npm run test-frontend
```

## Get Coverage Report
```
npm run coverage
```

## Use Rest endpoint directly
After running the server, ping the URL  <a href="http://localhost:3000/search" target="_blank">http://localhost:3000/search</a> from a tool like Postman or even directly from browser.

Allowed query parameters are
- name
- city
- startPrice
- endPrice
- startDate (yyyy-MM-dd, eg: 2020-10-11)
- endDate (yyyy-MM-dd, eg: 2020-10-11)
- sortBy : "price"/"name"
- sortOrder : "ascending"/"descending"

TestCommit
