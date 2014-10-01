## Reading Javascript Assignment

```javascript
var values = ['profile', 'filter', 'query', 'page', 'id'],
```

* Variable: `values`
* Value: Strings 'profile', 'filter', 'query', 'page', 'id'

```javascript
var score = 0;
```

* Variable: `score`
* Value: Number 0

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
  
```javascript
 var enable_detect = false;
```

* Variable: `enable_detect`
* Value: Boolean false

```javascript
detect: function detect(eventData) {
        if(!this.current || this.stopped) {
            return;
        };
```

* Function: `detect`
* Value: Function detect(eventData)

```javascript
createdDate: function() {
                    return new Date(this.created).toLocaleDateString();
```

* Function: `createdDate`
* Value: Date this.created


```javascript
var factors_array = [];
```

* Variable: `factors_array`
* Value: Array [];


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

```javascript
$("#zoom_btn").click(function()
```

* Function: `#zoom_btn`
* Value: Function initiated by a click

```javascript
var gender = 'male'
```

* Variable: `gender`
* Value: String 'male'

```javascript
var isArray = Array.isArray || function (obj) {
    return _toString.call(obj) === '[object Array]';
  };
```

* Variable: `isArray`
* Value: Array(Array.isArray) or Function(Object)

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
  
```javascript
this.zoomable = opts.zoomable || false;
```

* Variable: `this.zoomable`
* Value: Conditional opts.zoomable ||(or) false

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
* Value: Conditional `If this return this, else if, else if, else if, ...`



