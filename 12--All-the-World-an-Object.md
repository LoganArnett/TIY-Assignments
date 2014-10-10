```javascript

var ledger {
      filename: "path/to/file.ext",

        open: function(){
          this._file = (this.filename)
        }//End Open


//ledger.open(ledger.filename)

        close: function(){
           this._file = undefined
        }//End Close
    };
```

```javascript
function aLedger(name){
return {
    filename: 'path/to/file-' + name + '.ext',
    open: function(){
      this.file = this.filename;  
    },
    close: function(){
      this.file = undefined;
    }
}
}

var checkWriting = {
  toEnglish: function(value){  
    return 'one';
  }
}

describe('one through ten', function(){
  it ('should convert "one" to 1', function(){
    assert.equal(checkWriting.toEnglish(1), 'one');
  })
})
