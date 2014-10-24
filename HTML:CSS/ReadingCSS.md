##Reading CSS



### 1. `Background-color`
 * This style allows you to edit the backgrounds
  color of a specific area of the page or the entire body.

```css
body {
background-color: rgb(255, 255, 255);
}
```
[Taken from The Iron Yard](http://theironyard.com/academy/)

### 2. `Color`
 * This style will edit the coloring of the text within the specified area

```css
body {
  color: #39474e;
}
```
[Taken from The Iron Yard](http://theironyard.com/academy/)

### 3. `Border-color`
 * This style sets the color for the 4 sides of the elements border

```css
.dotnav .dotnav-item.current {<!-- This is setting the border color of elements in the classes dotnav or dotnav-item.current -->
  border-color:#08c;
}
```
[Apple](http://images.apple.com/v/home/bg/styles/home.built.css)

### 4. `Outline-color`
 * This style establishes the color of the outline of element like text or an image. The outline is a line that is drawn around elements, outside the border edge.

```css
p {<!-- This is setting the outline color for any values that fall within a p tag on the page -->
    outline-color: #00ff00;
}
```
[W3C](http://www.w3schools.com/cssref/tryit.asp?filename=trycss_outline-color)

### 5. `Column-rule-color`
 * This style sets the color of the rule drawn between columns.

```css
#header {<!-- Sets the column rule color for any column that is within the id of header -->
  column-rule-color: blue;
  }
```
[MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-color)

### 6. `Text-decoration-color`
 * This style sets the color for a text decoration like an underline

```css
p {<!-- This is setting the text decoration to underline and the color of that underline for any values that fall within a p tag on the page -->
    text-decoration: underline;
    text-decoration-color: red;
}
```
[W3C](http://www.w3schools.com/cssref/css3_pr_text-decoration-color.asp)

### 7. `Border-right-color`
 * This style sets the border color specifically for just the right side of the element

```css
.content-inner{<!-- This will set the right border of anything with the class .content-inner to the established color, with a thickness of 1 pixel and it will be solid all the way around. -->
  border-right:1px solid #e1e8ed
  }
```
[Twitter](https://abs.twimg.com/a/1413573160/css/t1/twitter_core.bundle.css)
<<<<<<< HEAD

=======
>>>>>>> d459afedb7c4ac590e40386a89d00d39686ef062
### 8. `Border-left-color`
 * This style sets the border color specifically for just the left side of the element

```css
.content-inner{<!-- This will set the left border of anything with the class .content-inner to the established color, with a thickness of 1 pixel and it will be solid all the way around. -->
  border-left:1px solid #e1e8ed;
  }
```
[Twitter](https://abs.twimg.com/a/1413573160/css/t1/twitter_core.bundle.css)
<<<<<<< HEAD

=======
>>>>>>> d459afedb7c4ac590e40386a89d00d39686ef062
### 9. `Border-top-color`
 * This style sets the border color specifically for just the top border of the element

```css
.open.dropdown .btn .caret{<!-- This will set the top border of anything with the class .open.dropdown, .btn, or .caret, to the established color, with a thickness of 1 pixel and it will be solid all the way around. -->
  border-top-color:#292f33
  }
```
[Twitter](https://abs.twimg.com/a/1413573160/css/t1/twitter_core.bundle.css)
<<<<<<< HEAD

=======
>>>>>>> d459afedb7c4ac590e40386a89d00d39686ef062
### 10. `Border-bottom-color`
 * This style sets the border color specifically for just the bottom border of the element

 ```css
.section{<!-- This will set the bottom border of anything with the class .section to the established color, with a thickness of 1 pixel and it will be solid all the way around. -->
  border-bottom:1px solid #e1e8ed
  }
 ```
 [Twitter](https://abs.twimg.com/a/1413573160/css/t1/twitter_core.bundle.css)
<<<<<<< HEAD

=======
>>>>>>> d459afedb7c4ac590e40386a89d00d39686ef062
### 11. `Text-decoration`
 * This allows you to add an underline, overline, line-through, blink, or none.

```css
a:hover,a:focus{<!-- This allows us to add a text-decoration of underline to any <a> link while the mouse is "hovering" or "focusing" -->
  text-decoration:underline;
  }

a {<!-- This tells the original links to not inherit the underline decoration from the hover/focus link properties -->
  text-decoration:none;
  }

h3 {<!-- This allows us to add an overline to any h3 tag -->
  text-decoration: overline;
}
```
[Best Buy](http://www.bestbuy.com/)
<<<<<<< HEAD

=======
>>>>>>> d459afedb7c4ac590e40386a89d00d39686ef062
### 12. `Text-align`
 * Allows us to align inline content not the actual block element

```css
.badge {<!-- This allows us to align all text to the center within the class of badge -->
  text-align:center;
}

.modal-footer {<!-- This allows us to align all text to the right within the .modal-footer class -->
  text-align:right;
}

.popover {<!-- This allows us to align all text to the left within the .popover class -->
  text-align:left;
}
```
[Best Buy](http://www.bestbuy.com/)
<<<<<<< HEAD

=======
>>>>>>> d459afedb7c4ac590e40386a89d00d39686ef062
### 13. `Font-size`
 * This allows us to control the size of the font in different areas of the document

```css
.popover-title{<!-- This allows us to define the font size for content with the class popover title to 13 pixels -->
  font-size:13px;
}

.close {<!-- This allows us to define the font size for content with the class close to 19.5 pixels -->
  font-size:19.5px;
}

h2,.h2{<!-- This allows us to redefine the font size for the h2 tags and anything with the class h2 -->
  font-size:26px
  }
```
[Best Buy](http://www.bestbuy.com/)

### 14. `Font-weight`
 * This specifies the weight or boldness of the text

```css
.popover-title{<!-- This allows us to ensure that the font weight remains unchanged for anything in the class popover title -->
  font-weight:normal;
}

.lead {<!-- This allows us to ensure that the font weight is increased to 200 for anything in the class lead -->
  font-weight:200;
}

dt {<!-- This allows us to ensure that the font weight to be BOLD for anything in a <dt> tag -->
  font-weight:bold;
  }
```
[Best Buy](http://www.bestbuy.com/)
<<<<<<< HEAD

### 15. `Font-family`
 *
=======
### 15. `Font-family`
 * This establishes which font family/families you would your text to pull from
>>>>>>> d459afedb7c4ac590e40386a89d00d39686ef062

```css
 body{<!-- This allows us to set the font-family within a target area -->
   font-family:Arial,Helvetica,"Nimbus Sans L","Liberation Sans",FreeSans,sans-serif;
 }

 textarea {<!-- This allows us to "inherit" the font-family within a target area from the closest font family -->
   font-family:inherit;
 }

 .next {<!-- This allows us to set the font-family within a target area -->
   font-family:serif;
   }
 }
```
[Best Buy](http://www.bestbuy.com/)

### 16. `Font-style`
 * This allows us to add italic or oblique styling to the textual content in the target area. It also allows us to give it a normal value to ensure the text is not inheriting another style from somewhere else.

```css
 .check {<!-- This allows us to set the font-style to italic within a target area for items in the class check -->
  font-style:italic
  }

  cite{<!-- This allows us to set the font-style to normal within a the cite tag -->
    font-style:normal
    }

  address{<!-- This allows us to set the font-style to oblique within any address tag -->
    font-style:oblique;
  }
```
[Best Buy](http://www.bestbuy.com/)

### 17. `Text-shadow`
 * This allows us to add a shadow around text and can be maniupulated vertically, horizontally, to add a blur, and color.

```css
.close:hover{<!-- This allows us to set a White text-shadow to our content that will drop from the text vertically with 1 pixel of seperation  -->
  text-shadow:0 1px 0 #fff;
}

.carousel-control{<!-- This allows us to set a text-shadow to our content that will move drop from the text horizontally by 1 pixel and drop vertically by 2 pixel of seperation  -->
  text-shadow:0 1px 2px rgba(0,0,0,0.6);
}

.carousel-caption .btn{<!-- This allows us to set the text-shadow of our content to none to ensure that the textual content remains unchanged -->
  text-shadow:none
  }
```
[Best Buy](http://www.bestbuy.com/)

### 18. `Text-transform`
 * This defines how to capitalize or not capitalize textual content

```css
 button{<!-- This allows us to set the text-transform of our content to none within any `button` tag -->
  text-transform:none;
  }

 .initialism{<!-- This allows us to set the text-transform of our content to uppercase within the class `initialism` -->
   text-transform:uppercase;
   }

 .select{<!-- This allows us to set the text-transform of our content to lowercase within the class `select` -->
   text-transform:lowercase;
   }
```
[Best Buy](http://www.bestbuy.com/)

### 19. `Font-stretch`
 * This allows us to manipulate the appearance of text within a font by condensing or expanding each letter

```css
h1 {<!-- Sets the font-stretch for text in h1 tags to extra expanded -->
  font-stretch: extra-expanded;
  }

p  {<!-- Sets the font-stretch for text in the <p> tags to condensed -->
  font-stretch: condensed;
  }

h2 {<!-- Sets the font-stretch for text in the h2 tags to normal -->
  font-stretch: normal;
}
```
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch)

### 20. `Font`
 * This gives us a shorthand way to set all of the font values like font-style, variant, weight, stretch, size, height, and family in that order.  

```css

 p {<!-- Sets the font size to 12px and the line height to 14px and then sets the font family to sans-serif -->
   font: 12px/14px sans-serif;
   }


p {<!-- This sets the font size to 80% of the value of the text from the previous element and sets the font family to sans-serif -->
  font: 80% sans-serif
  }

h1 { <!-- Use the same font as the status bar of the window -->
  font: status-bar
  }
```
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch)

### 21. `Float`
 * This takes the target element from the normal flow and "floats" it along the left or right side of the container, and text and inline elements will wrap around it.

```css
header nav {<!-- This will float anything in a nav tag within a header tag to the right -->
  float: right;
}

h4  {<!-- This will float anything within an h4 tag to the left -->
  float: left;  
  margin: 0;
  }

#social {<!-- This will ensure that anything with the id of social does not float -->
  float: none
}
```

### 22. `Position`
 * This allows us to create alternate positioning rules for the target elements. Takes fixed, sticky, absolute, relative, and static

```css
#social  {<!-- This will fix anything with the id of social to the top right of the screen no matter where you scroll -->
  position: fixed;
  right: .5%;
}

#two {<!-- This will take the element with the id of two and move it by 20 pixels from the top and left of its normal position -->
  position: relative;
  top: 20px; left: 20px;
}

#two {<!-- This will take the element with the id of two and position it by 20 pixels from the top and left of the position of its nearest parent element  -->
   position: absolute;
   top: 20px;
   left: 20px;
   }

```
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

### 23. `Clear`
 * Says whether an element can be next to floating elements that precede it or must be moved down (cleared) below them.

```css
h1 { <!-- Ensures that the h1 tags do not receive the clear property -->
  clear: none
  }

h2 {<!-- Allows the element to be moved down to clear right floats -->
   clear: right
   }

h3 {<!-- Allows the element to be moved down to clear left floats -->
   clear: left
   }
```
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)

### 24. `Word Spacing`
   Creates new spacing behavior between tags and text

```css
   #mozdiv1 {<!-- This adds spacing in between each and every word -->
  word-spacing: 15px;
}

  #mozdiv2 {<!-- This adds spacing in between each and every word -->
  word-spacing: 5em;
}

#mozdiv3::first-letter {<!-- Allows us to target the first letter of each elemenet -->
  word-spacing: 5em;
}
```

### 25. `White-Space`
   Allows us to define how white space within the document is suppose to work

```css
code {<!-- This will treat white space as it appears and preserve its form -->
  white-space: pre;
}

p {<!-- This will treat white space as it is normally treated and collapse it -->
  white-space: normal
}

p {<!-- This will treat white space as it is normally treated and collapse it and create line breaks at newline characters -->
  white-space: pre-line;
}

```
