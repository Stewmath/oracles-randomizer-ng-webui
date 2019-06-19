# OOS/A Randomizer Web Interface

## Big thanks to Jangler and Drenn for their work.
### Without their work none of this project would not be possible. This project just merely wraps around and controls the randomizer Jangler has made.

## Installing locally
You will need [Nodejs](https://nodejs.org/en/) for the back and front end dependencies:

```
$ npm run install-both
```

## Set up Base entries in DB
You will need [Python](https://www.python.org/) for the db setup script, it is CPU intensive and takes roughly 10 minutes to run at this time. You will also need the module Naked installed.

```
$ pip install Naked
```

You will need to have mongoDB installed and running:

```
# mongod
```

Then in the utility directory

```
On Linux/MacOSX
$ mkdir ages seasons
$ python3 dbBuild.py
  -- or --
On Windows Command Prompt
$ mkdir ages seasons
$ python dbBuild.py
```

## Running the Web Interface

After all the npm modules are installed, front end compiled, and db entries created, go to the project root directory:
```
$ npm run dev
```

## Future Goals
* Title screen/File Screen edits
