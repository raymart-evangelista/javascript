- Describe the pros and cons of using classes in JavaScript
  - pros:
    - in modern JS, class has great new features that help with OOP
    - classes use the constructor to create a function named User as a result of the class declaration--the methods in the class are taken from the prototype
    - to call the class, `new` keyword must be used
    - class methods are non-enumerable which is good because when using `for..in` over an object, we don't want its class methods
    - classes always `use strict`
    - named class expressions and dynamically "on demand"
    - computed method names
    - class fields are set on individual objects, not on the prototype
    - class field `methodName = () => {...}` is created on a per-objet basis which is useful in browser environments for event listeners

    - the syntax looks better and similar to other OO languages, while keeping the prototype inheritance
  - cons:
    - syntactic sugar--makes things easier to read, but doesn't introduce any new behaviors (however not entirely the same if declared without class keyword)
    - Class favors inheritance over composition
    - prototypes are better and very flexible
    - guides people away from the power of functional programming

- How does JavaScript's object creation differ from a language like Java or Ruby?
  - in Java and Ruby, objects need a blueprint or DNA to exist called Class (like how living things need DNA to exist)
  - in JS, objects can show up without needing a Class (no blueprint or DNA, so these objects are nonliving things)--they come with a plug/socket mechanism called Prototype that can be used to wire up different objects
    - chain based inheritance that may not be related in a IS A relationship

- Explain the differences between object constructors and classes
  - classes can define a constructor together with prototype methods, classes have to be called with `new`, class methods are non-numerable, classes always `use strict`

- What are "getters" & "setters"?
  - accessor properties
  - getter works when obj.propName is read
  - setter works when obj.propName is assigned

- Describe computed names and class fields
  - computed names can be created using [...] such that the name of the method will be whatever is computer inside [...]
  - class fields are set on individual objects using `=` such as `name = "John";`.. so that individual object will have a `name` var of "John"

- Describe function binding
  - function binding functions in JS have a dynamic `this` which will depend on the context of the call

- Describe static properties
  - `static` keyword defines a static method or property for a class, and are called without instantiating their class and cannot be called through a class instance
  - static methods often are used to create utility functions for applications
  - static properties are useful for caches, fixed configuration, or data you don't need to be replicated across instances

- How is inheritance used with classes?
  - in JS, inheritance is used by using the `super` keyword

- Why is favoring Composition over Inheritance suggested?
  - With composition over inheritance, we don't have to forsee the future in order to create models, and there is higher design flexibility
    - easier to build classes out of various components than trying to find commonality between classes and creating a family tree