# Build your own radar poc
Forked from [thoughtworks/build-your-own-radar](thoughtworks/build-your-own-radar) please see the origin repo readme for more info inc. csv format. This fork is hardcoded to render the radar from a locally hosted radar.csv file that is served from [webroot]/data/radar.csv. Edit the csv file as required.

## Demo
You can see this in action [here](https://tech-radar-poc.s3-ap-southeast-2.amazonaws.com/index.html) which renders the radar from a copy of [this public dataset](https://docs.google.com/spreadsheets/d/1vmXx5CFxek3UUgJ-2WnYJC8tpLBvcBuz9ylFjyN0qQA/edit#gid=1375641181)

## How To Run

#### Local dev server
To run locally in dev mode, first make sure you have nodejs installed then run the following commands;

- `git clone https://github.com/barney-spencer/build-your-own-radar.git`
- `cd build-your-own-radar`
- `npm install` - to install dependencies
- `npm test` - to run your tests
- `npm run dev` - to run application in localhost:8080.

#### Docker
Running as a docker container. This repo containers a Docker file from which an image cna be created amd run.

- `docker build --tag=tech-radar-poc .` - to create the docker image.
- `docker run --rm -p 8080:80 -e SERVER_NAMES="localhost 127.0.0.1" tech-radar-poc `
- `$ open http://localhost:8080`

***Note:*** You can also mount a volume  (-v) so that edits can be made to the .csv from the host at run time. Otherwise, the dataset is static once the image is created. The following example mounts the web apps data directory to a directory on the host in which the radar.csv can then be managed.
 `docker run --rm -p 8080:80 -e SERVER_NAMES="localhost 127.0.0.1" -v $(pwd)/src/data/custom:/opt/build-your-own-radar/data/  rea-tech-radar`


#### Static site.
Build a deploy a static site
- `git clone https://github.com/barney-spencer/build-your-own-radar.git`
- `cd build-your-own-radar`
- `npm install` - to install dependencies
- `npm test` - to run your tests
- `npm run build` - to build the app in production mode and export artifacts to the dist folder.
- Publish the dist folder to a web server.


