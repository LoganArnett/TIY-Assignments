## Reading Javascript Assignment

#### 1
```javascript
var values = ['profile', 'filter', 'query', 'page', 'id'],
```

* Variable: `values`
* Value: Strings 'profile', 'filter', 'query', 'page', 'id'

#### 2
```javascript
var score = 0;
```

* Variable: `score`
* Value: Number 0

#### 3
```javascript
var HGraph = function(opts) {
	this.container        = opts.container || null;
	this.context          = null;
	this.width            = opts.width || 0;
	this.height           = opts.height || 0;
	this.rotation         = opts.rotation || 0;
	this.zoomTime         = opts.zoomTime || 500;
	this.healthRange      = {
		lower : -30,
		upper : 30
	};
```

* Variable: HGraph
* Value:
  * this.container: opts.container(user input[string]) or null
  * this.context: null;
  * this.width: opts.width(user input[Number]) or Number 0
  * this.height: opts.height(user input[Number]) or Number 0
  * this.rotation: opts.rotation(user input[Number]) or Number 0
  * this.zoomTime: opts.zoomTime(user input[Number]) or Number 500
  * this.healthrange: lower Number -30 to upper Number 30

#### 4
```javascript
 var enable_detect = false;
```

* Variable: `enable_detect`
* Value: Boolean false

#### 5
```javascript
detect: function detect(eventData) {
        if(!this.current || this.stopped) {
            return;
        };
```

* Function: `detect`
* Value: Function detect(eventData)

#### 6
```javascript
createdDate: function() {
                    return new Date(this.created).toLocaleDateString();
```

* Function: `createdDate`
* Value: Date this.created

#### 7
```javascript
var factors_array = [];
```

* Variable: `factors_array`
* Value: Array [];

#### 8
```javascript
var cholesterol = {
						label   : 'Total Cholesterol',
						score   : 0,
						value : 0,
						actual: 0,
						weight: 0,
						details : []
					}
```

* Variable: `cholesterol`
* Value:
  * label: String 'Total Cholesterol'
  * score: Number 0
  * value: Number 0
  * actual: Number 0
  * weight: Number 0
  * details: Array []

#### 9
```javascript
$("#zoom_btn").click(function()
```

* Function: `#zoom_btn`
* Value: Function initiated by a click

#### 10
```javascript
var gender = 'male'
```

* Variable: `gender`
* Value: String 'male'

#### 11
```javascript
var isArray = Array.isArray || function (obj) {
    return _toString.call(obj) === '[object Array]';
  };
```

* Variable: `isArray`
* Value: Array(Array.isArray) or Function(Object)

#### 12
```javascript
var d3_nsPrefix = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: "http://www.w3.org/1999/xhtml",
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
```

* Variable: `d3_nsPrefix`
* Value:
  * svg: String "http://www.w3.org/2000/svg"
  * xhtml: String "http://www.w3.org/1999/xhtml"
  * xlink: String "http://www.w3.org/1999/xlink"
  * xml: String "http://www.w3.org/XML/1998/namespace"
  * xmlns: String "http://www.w3.org/2000/xmlns/"

#### 13
```javascript
this.zoomable = opts.zoomable || false;
```

* Variable: `this.zoomable`
* Value: Conditional opts.zoomable ||(or) false

#### 14
```javascript
HGraph.prototype.calculateScoreFromValue = function (features, myValue){
	var maxHealthyValue = features.healthyrange[1];
	var minHealthyValue = features.healthyrange[0];
	var maxAcceptableValue = features.totalrange[1];
	var minAcceptableValue = features.totalrange[0];
```

* Variable: `HGraph.prototype.calculateScoreFromValue`
* Value: Array
  *  var maxHealthyValue = features.healthyrange[1];
  *  var minHealthyValue = features.healthyrange[0];
  *  var maxAcceptableValue = features.totalrange[1];
  *  var minAcceptableValue = features.totalrange[0];

#### 15
```javascript
for ( key in this.layers ) {
		if (this.layers.hasOwnProperty(key)) {
			layer = this.layers[key];

			// Zoom the ring in.
			if ( key === 'ring' ) {
				layer.select('path')
					.transition().ease('elastic')
						.duration(this.zoomTime)
						.attr('d', getZoomedRingPath());
			// Do the datapoints
			} else if ( key === 'datapoints') {
				layer.selectAll('circle')
					.transition().ease('elastic')
						.duration(this.zoomTime)
						.attr('cx', getZoomedX)
						.attr('cy', getZoomedY);

				// And the labels
				if (this.showLabels) {
					labels = layer.selectAll('text');
					labels
						.transition().ease('elastic')
							.duration(this.zoomTime)
							.attr('x', getZoomedX)
							.attr('y', getZoomedY);


					window.setTimeout(function(){
						labels.text(setDetailText);
					}, this.zoomTime);
				}
			} else if ( key === 'web') {
				this.updateWeb(true, true);
			}

			// Move it to the new origin point.
			layer
				.transition().ease('quad-out')
				.duration(this.zoomTime * 0.8)
				.each("end", function() { that.transitioning = false})
				.attr('transform', translateToPoint(this.halfWidth - (this.x*zoomFactor), this.halfHeight - (this.y*zoomFactor)));

		}
	}
```

* Variable: `this.layers`
* Value: For Loop `For this, If this return this, else if, else if, else if, ...`

#### 16
```javascript
HGraph.prototype.zeroGraph = function() {

	for(key in this.userdata.factors){
		this.userdata.factors[key].score = 0;
		this.userdata.factors[key].weight = 1;
	}
	this.redraw();
}
```

* Variable: `HGraph.prototype.zeroGraph`
* Value: `for` loop with function - key in this.userdata.factors

#### 17
```javascript
missingDeps.forEach(function (key) {
        document.write("<li>" + key + "</li>");
    });
```

 * Variable: `missingDeps`
 * Value: .forEach with an anonymous `function` that contains the parameter `key`

#### 18
```javascript
  // Insert application strings
_.forEach(strings, function (value, key) {
        _.forEach(additionalGlobals, function (item, name) {
            strings[key] = strings[key].replace(new RegExp("{" + name + "}", "g"), additionalGlobals[name]);
        });
    });
```

 * Variable: `_`
 * Value: `.forEach` for inserting 'Strings' and the anonymous `function` with parameters `value` and `key`

#### 19
```javascript
// loop through items
		var iCount = 0;
//		$.each(anObject, function(sKey, vValue) {
		MochiKit.Iter.forEach(MochiKit.Base.keys(anObject), function(sKey) {
```

 * Variable: `MochiKit`
 * Value `.forEach` with an anonymous function with parameter `sKey`

#### 20
```javascript
pb.Board.prototype.doShadows = function() {
    this.getPedals().forEach(function(pedal) {
        pb.shadowMaker(pedal.getElement(), 40, 0.5, 0.7);
        pedal.pots.forEach(function(pot) {
            pb.shadowMaker(pot.$(pot.mappings.KNOB_HOLDER)[0], 10, 0.5, 4);
        });
    });
};
```

 * Varibale: `pedal.pots`
 * Value: `.forEach` with an anonymous `function` with parameter `pot`

#### 21
```javascript
 fx.forEach(function(pedal, i) {
            pedal.disconnect();
            fx[i + 1] && pedal.connect(fx[i + 1]);
        });
```

 * Variable: `fx`
 * Value: `.forEach` with an anonymous `function` with parameters `pedal` and `i`

#### 22
```javascript
 var fullScreenApi = {
        supportsFullScreen: false,
        isFullScreen: function() { return false; },
        getFullScreenElement: function() { return null; },
        requestFullScreen: function() {},
        exitFullScreen: function() {},
        cancelFullScreen: function() {},
        fullScreenEventName: '',
        fullScreenErrorEventName: ''
    };
```

 * Variable: `fullScreenApi` which is a global object
 * Value: Is a `container` that holds multiple functions and methods

#### 23
```javascript
ImageJob.prototype = {

    /**
     * Initiates downloading of associated image.
     * @method
     */
    start: function(){
        var _this = this;

        this.image = new Image();

        if ( this.crossOriginPolicy !== false ) {
            this.image.crossOrigin = this.crossOriginPolicy;
        }

        this.image.onload = function(){
            _this.finish( true );
        };
        this.image.onabort = this.image.onerror = function(){
            _this.finish( false );
        };

        this.jobId = window.setTimeout( function(){
            _this.finish( false );
        }, this.timeout);

        this.image.src = this.src;
    },

    finish: function( successful ) {
        this.image.onload = this.image.onerror = this.image.onabort = null;
        if (!successful) {
            this.image = null;
        }

        if ( this.jobId ) {
            window.clearTimeout( this.jobId );
        }

        this.callback( this );
    }

};
```

 * Variable: `ImageJob` which is a container
 * Value: contains the `start` and `finish` functions for downloading images on a page

#### 24
```javascript
window.OpenSeadragon = window.OpenSeadragon || function( options ){

    return new OpenSeadragon.Viewer( options );

};
```
 * Variable: `window`
 * Value: `window.OpenSeadragon || function(options)` is a conditional assigned to window which returns a new viewing window

#### 25
```javascript
   /**
     * Controller
     */
    API = {
        /**
         * Methods for notebooks
         */
        // Shows list of notebooks and tags
        listNotebooks: function (profile) {
            require(['apps/notebooks/list/controller'], function (List) {
                executeAction(new List().list, {profile: profile});
            });
            App.content.reset();
        },

        // Create notebook
        addNotebook: function (profile, redirect) {
            require(['apps/notebooks/notebooksForm/controller'], function (Form) {
                executeAction(new Form().addForm, {profile: profile, redirect: redirect});
            });
        },

        // Edit notebook
        editNotebook: function (profile, id, redirect) {
            require(['apps/notebooks/notebooksForm/controller'], function (Form) {
                executeAction(new Form().editForm, {id: id, profile: profile, redirect: redirect});
            });
        },

        // Delete notebook
        removeNotebook: function (profile, id) {
            require(['apps/notebooks/remove/notebook'], function (Controller) {
                executeAction(new Controller().start, {id: id, profile: profile});
            });
        },

        /**
         * Methods for tags
         */
        addTag: function (profile) {
            require(['apps/notebooks/tagsForm/controller'], function (Form) {
                executeAction(new Form().addForm, {profile: profile});
            });
        },

        editTag: function (profile, id) {
            require(['apps/notebooks/tagsForm/controller'], function (Form) {
                executeAction(new Form().editForm, {id: id, profile: profile});
            });
        },

        removeTag: function (profile, id) {
            require(['apps/notebooks/remove/tag'], function (Controller) {
                executeAction(new Controller().start, {id: id, profile: profile});
            });
        }
    };
```

  * Controller: `API`
	* Value: contains multiple methods with functions for adding, editing, removing notebooks and tags

#### 26
```javascript
var curves = [];
for( var i = 0; i < 200; i++ ) {
	curves.push({
	});
}
```

 * Variable: `curves` has an empty array assigned to it
 * Value: Array, a new empty array
 * Loop: a for loop with a variable i
 * Method: .push is an array method called to push things into the empty blank curves array

#### 27
```javascript
