# Welcome to Angular JS!

## Functions

### **angular.module**

`angular.module(name, [requires], [configFn]);`
  * The `angular.module` is a global place for creating,
    registering, and retrieving Angular modules.

  * Arguments:
    * Name:
      * Type - String
      * Details:
        * The name of the module to create or retrieve
    * Requires(optional):
      * Type - Array or String
      * Details:
        * If specified then new module is being created.
        If unspecified then the module is being retrieved
        for further configuration.
    * ConfigFn(optional):
      * Type - Function
      * Details:
        * Optional configuration function for the module.

  * Returns:
    * Module:
      * A new module with the `angular.Module` api.

  * Example:
  ```
  // Creates a new module bookStore, with an empty array of
  // "requires" or dependencies.
  var books = angular.module('bookStore', []);
  ```

### **angular.extend**

`angular.extend(dst, src);`
  * Extends the destination object dst by copying own
    enumerable properties from the src object(s) to dst.
    Creates a "shallow" copy.

  * Arguments:
    * dst:
      * Type - Object
      * Details:
        * Destination Object
    * src:
      * Type - Object
      * Details:
        * Source Object(s)

  * Returns:
    * Object:
      * Reference to dst

  * Example:
  ```
  // The myDest object is the source and has both Source1
  // and Source2 copied into it
  var mySource1 = {'name' : 'neha', 'age' : '26', obj2 : {}}
  var mySource2 = {'course' : 'MCA'}
  var myDest = {}
  angular.extend(myDest, mySource1,mySource2)
  ```

### **angular.copy**

`angular.copy(source, [destination]);`
  * Creates a deep copy of `source`, which should be an
    object or an array.

  * Arguments:
    * Source:
      * Type - *
      * Details:
        * The source that will be used to make a copy.
          Can be any type, including primitives, null,
          and undefined.
    * Destination(optional):
      * Type - Object or Array
      * Details:
        * Destination into which the source is copied.
          If provided, must be of the same type as `source`

    * Returns:
      * The copy or updated destination, if destination
          was specified.

    * Example:
    ```
    // With 1 argument, will create a copy of the object
    // or array passed in as a parameter
    $books.update = function(pages) {
      $books.all = angular.copy(pages);
    };
    ```

### **angular.element**

`angular.element(element)`
`$element === angular.element() === jQuery() === $()`
  * Wraps a raw DOM element or HTML string as a jQuery element

  * Arguments:
    * Element:
      * Type - String or DOM Element
      * Details:
        * HTML string or DOMElement to be wrapped into jQuery

  * Returns:
    * Object:
      * jQuery Object

  * Example:
  ```
  var validElement = angular.element('<div>{{ model.input }}</div>');
  ```

## Directives

### **ngApp**

`<div ng-app="ngAppStrictDemo">`
  * Use this directive to auto-bootstrap an AngularJS application.
    The ngApp directive designates the root element of the
    application and is typically placed near the root element of
    the page(<body> or <html>)

  * Arguments:
    * ngApp:
      * Type - angular.module
      * Details:
        * An optional application module name to load
    * ngStrictDi(optional):
      * Type - boolean
      * Details:
        * If this attribute is present on the app element, the
          injector will be created in the "strict-di" mode. This
          means that the application will fail to invoke functions
          which do not use explicit function annotation(and are thus
          unsuitable for minification), as described in the Dependency
          injection guide, and useful debugging info will assist in
          tracking down the root of these bugs.

    * Example:
    ```
    <body ng-app="BookStoreApp">
    ```

### **ngBind**

`ng-bind=""`
  * The ngBind attribute tells Angular to replace the text content of
    the specified HTML element with the value of a given expression, and
    to update the test content when the value of the expression changes.
  * Typically you don't use ngBind directly, but instead you use the double
    curly markup like {{expression}} which is similar but less verbose.

  * Arguments:
    * ngBind:
      * Type - Expression
      * Details:
        * Expression to evaluate

  * Example:
  ```
  Hello <span ng-bind="name"></span>!
  ```

### **ngClass**

`ng-class=""`
  * The ngClass directive allows you to dynamically set CSS class on an HTML
    element by databinding an expression that represents all classes to be
    added.

  * Arguments:
    * ngClass:
      * Type - Expression
      * Details:
        * Expression to eval. The result of the evaluation can be a string
          representing space delimited class names, an array, or a map of class
          names to boolean values. In the case of a map, the names of the
          properties whose values are truthy will be added as css classes to the
          element.

  * Example:
  ```
  <p ng-class="{strike: deleted, bold: important, red: error}">Map Syntax Example</p>
  ```

### **ngClick**

`ng-click=""`
  * A more powerful replacement for the default ngClick designed to be used on
    touchscreen devices. Most mobile browsers wait about 300ms after a tap-and-release
    before sending the click event. This version handles them immediately, and then
    prevents the following click event from propagating.

  * Arguments:
    * ngClick:
      * Type- Expression
      * Details:
        * Expression to evaluate upon tap.(Event object is available as $event)

  * Example:
  ```
  <button ng-click="count = count + 1" ng-init="count=0">
  Increment
  </button>
  count: {{ count }}
  ```

### **ngController**

`ng-controller=""`
  * The ngController directive attaches a controller class to the view. This is
    a key aspect of how angular supports the principles behind the MVC design
    pattern

  * Arguments:
    * ngController:
      * Type - Expression
      * Details:
        * Name of a constructor function registered with the current $controllerProvider
          or an expression that on the current scope evaluates to a constructor function.
          The controller instance can be published into a scope property by specifying
          ng-controller="as propertyName". If the current $controllerProvier is configured
          to use globals(via $controllerProvider.allowGlobals()), this may also
          be the name of a globally accessible constructor function.

  * Example:
  ```
  // This is saying that in this div we will utilize the SettingsController 1
  // and we will use it by calling settings.x
  <div id="ctrl-as-exmpl" ng-controller="SettingsController1 as settings">
  ```

### **ngDblclick**

`ng-dblclick=""`
  * The ngDblclick directive allows you to specify custom behavior on a dblclick
    event.

  * Arguments:
    * ngDblclick:
      * Type - Expression
      * Details:
        * Expression to evaluate upon a dblclick.

  * Example:
  ```
  <button ng-dblclick="count = count + 1" ng-init="count=0">
  Increment (on double click)
  </button>
  count: {{count}}
  ```

### **ngForm**

`ng-form="" or <ng-form [name=""]>`
  * Nestable alias of form directive. HTML does not allow nesting of form elements.
    It is useful to nest forms, for example if the validity of a sub-group of
    controls needs to be determined.

  * Arguments:
    * ngForm:
      * Type - String
      * Details:
        * Name of the form. If specified, the form controller will be published
          into related scope, under this name.

  * Example:
  ```
  <ng-form
  [name=""]>
  ...
  </ng-form>
  ```

### **ngKeyup**

`ng-keyup=""`
  * Specify custom behavior on keyup event

  * Arguments:
    * ngKeyup:
      * Type - Expression
      * Details:
        * Expression to evaluate upon keyup.

  * Example:
  ```
  <input ng-keyup="count = count + 1" ng-init="count=0"> key up count: {{count}}
  ```

### **ngModel**

`ng-model="val"`
  * The ngModel directive binds an `input`, `select`, `textarea`, (or custom control)
    to a property on the scope using NgModelController, which is created and
    exposed by this directive.

  * Arguments:
    * Element

  * Example:
  ```
  <form name="testForm" ng-controller="ExampleController">
  <input ng-model="val" ng-pattern="/^\d+$/" name="anim" class="my-input" />
  </form>
  ```

### **ngRepeat**

`ng-repeat=""`
  * The ngRepeat directive instantiates a template once per item from a collection.
    Each template instance gets its own scope, where the given loop variable is set
    to the current collection item, and $index is set to the item index or key.

  * Arguments:
    * ngRepeat:
      * Type - Repeat Expression
      * Details:
        * The expression indicating how to enumerate a collection. These formats
          are currently supported:
          * variable in expression – where variable is the user defined loop
            variable and expression is a scope expression giving the collection
            to enumerate.

            For example: album in artist.albums.

          * (key, value) in expression – where key and value can be any user
            defined identifiers, and expression is the scope expression giving
            the collection to enumerate.

            For example: (name, age) in {'adam':10, 'amalie':12}.

          * variable in expression track by tracking_expression – You can also
            provide an optional tracking function which can be used to associate
            the objects in the collection with the DOM elements. If no tracking
            function is specified the ng-repeat associates elements by identity
            in the collection. It is an error to have more than one tracking
            function to resolve to the same key. (This would mean that two
            distinct objects are mapped to the same DOM element, which is not
            possible.) Filters should be applied to the expression, before
            specifying a tracking expression.

            For example: item in items is equivalent to item in items track by
            $id(item). This implies that the DOM elements will be associated by
            item identity in the array.

            For example: item in items track by $id(item). A built in $id()
            function can be used to assign a unique $$hashKey property to each
            item in the array. This property is then used as a key to associated
            DOM elements with the corresponding item in the array by identity.
            Moving the same object in array would move the DOM element in the
            same way in the DOM.

            For example: item in items track by item.id is a typical pattern
            when the items come from the database. In this case the object
            identity does not matter. Two objects are considered equivalent
            as long as their id property is same.

            For example: item in items | filter:searchText track by item.id is
            a pattern that might be used to apply a filter to items in conjunction
            with a tracking expression.

          * variable in expression as alias_expression – You can also provide an
            optional alias expression which will then store the intermediate
            results of the repeater after the filters have been applied. Typically
            this is used to render a special message when a filter is active on
            the repeater, but the filtered result set is empty.

            For example: item in items | filter:x as results will store the
            fragment of the repeated items as results, but only after the items
            have been processed through the filter.

### **ngSubmit**

`ngSubmit=""`
  * Enables binding angular expression to onsubmit events

  * Arguments:
    * ngSubmit:
      * Type - Expression
      * Details:
        * Expression to eval.

  * Example:
  ```
  <form ng-submit="submit()" ng-controller="ExampleController">
  ```
  
