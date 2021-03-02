This package is an extended version of Akveo doc-prsr, for Typescript. It contains interface, type, and other declarations for objects and methods.

### Usage: prsr [options]

### Options:

- -h, --help               output usage information
- -V, --version            output the version number
- -g, --generator <value>  Generator:
- -f, --framework <value>  Framework:
- -i, --input <value>      Path to input file:
- -o, --output <value>     Path to output file: 

### You have to specify:
- generator (can be 2 types: typedoc, docjs)
- framework (can be 2 types: angular, react)
- pathes to input and output file (output file will be created)
### For example: 

```
prsr -g typedoc -f angular -i input.json -o output.json
```

