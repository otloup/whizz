
# Whizz Education
## Recruitment Task
### Estimated time to complete: 30 minutes

This library provides minimal functionality of a client application that writes objects to an arbitrary remote datastore via an API. It is written in JavaScript and expected to be executed in a NodeJS environment.

The abstract `Model` class exposes a `create()` instance method that asynchronously sends a request to a remote server. It will resolve with the object that invoked the call, or reject with an error.

This is a standalone library and includes a test suite that can be reviewed in the `__tests__` directory.

The library source is incomplete and therefore many of the tests are failing.

Your task is to build out the library - located within the `src` directory - so that all the tests pass.

**Important:** You must not modify the test cases, or any other files located outside of the `src` directory.

## Installation

1. Extract the `.zip` archive to an environment where NodeJS and Yarn are available
2. Run `yarn` to install the dependencies

## Running the tests

Run `yarn run test` to run the test suite through Jest.

Alternatively, run `yarn run test --watchAll` to enable watch mode.

## Submission

Compress your `src` directory into a `.zip` archive and send this to your recruitment contact via email.

Your solution will be reviewed by one or more of the developers at Whizz Education.

You may include any notes or comments if you would like to. These will be forwarded to the development team for review.
