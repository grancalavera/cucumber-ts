# Simple CucumberJS + TypeScript project setup

> The purpose of this project is to provide a small and simple reference implementation for a CucumberJS + TypeScript project with customisable CLI options.

## Features

- All source code written in TypeScript
- Custom CLI arguments for explicit project parameterisation

## Setting up the project

You need node, npm and yarn.

```
$ yarn
```


## Running Tests

```
$ yarn test
```

## Simulating Failures

There is a simulated failure CLI option, which demonstrates an approach to adding custom parameters via CLI arguments:

```
$ yarn test --simulate-failure
```

## Custom Help

There is a custom CLI flag that displays help on custom CLI options:

```
$ yarn --test-help
```
