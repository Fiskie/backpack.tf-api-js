# backpack.tf JavaScript API bindings

This package contains bindings for the backpack.tf web APIs.
In this release, only certain web APIs used by the Automatic client are supported.

## Usage

Check `src/examples` for a small primer.

### Writing your own commands

You can use this library to call endpoints by writing your own command --- have
 a look at the Command interface to see what methods you will need to implement.

## Development

Install typescript, obviously.

`tsc` in root to generate a commonjs package.