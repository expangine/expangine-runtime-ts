# expangine-runtime-ts
A TypeScript/JS library for processing data based on variables and conditions

This runtime has the following concepts
- Entity: The definition of an object
- Property: The definition of a value on an Entity
- Type: The type of a property. A type can validate values, have comparisons with other values & types, etc. See [[Types]]
- Reference: The reference to a value on an Entity, a constant value, a computable expression, etc. See [[References]]
- Condition: Evaluates 

The runtime needs the following interface implementation to allow an interface to construct values
- getProperties\<S>( source: S, onProperties?: (props: Property[]) ): Promise?

### Design
- Type { operators, comparisons, formatters }
- Function\<I, O> { compute( input: I, args: {} ): O, parameters: {} }
- Reference\<S, T> { get( source: S ): T, set( source: S, value: T ), type( source: S ) }
- Condition { evaluate( source ): boolean }

### References
- Constant: A constant value. Ex: `3.1415`
- Variable: A reference to an entity's property. Ex: `name`
- Templated: A string which contains references to resolve and build a string. Ex: `{last}, {first}`
- Formatted: A reference value formatted given a formatter for the value's type. Ex: `date formatted as 'MM/dd/yyyy'`
- Equation: An equation with variables, and the references to get the variables from. Ex: `x * 100 / y`
- Conditional: A set of conditions and related values determine the value. Ex: `if x; then y; else w`
- Computed: A function executed on a value optionally passing parameters

### Types 
A type has a name, has a collection of formatters, comparisons, and operations.

### Conditions
- Comparison: One reference, a comparison from it's type, and the 
- Group: Multiple conditions and one of: AND, OR, XOR
- Negate: Negates a single condition

### Functions
A function has a name, has an input Type, an output Type, and optionally arguments with a name, type, and default value.

*Examples:*
- floor( input: number ): number
- clamp( input: number, min: number, max: number ): number
- substring( input: string, offset: number, length: number ): string
- length( input: string ): number
