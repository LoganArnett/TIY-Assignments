##Reading CSS



### 1. Background-color
 * This style allows you to edit the backgrounds
  color of a specific area of the page or the entire body.

```css
body {
background-color: rgb(255, 255, 255);
}
```
[Taken from The Iron Yard](http://theironyard.com/academy/)

### 2. Color
 * This style will edit the coloring of the text within the specified area

```css
body {
  color: #39474e;
}
```
[Taken from The Iron Yard](http://theironyard.com/academy/)

### 3. Border-color
 * This style sets the color for the 4 sides of the elements border

```css
.dotnav .dotnav-item.current {<!-- This is setting the border color of elements in the classes dotnav or dotnav-item.current -->
  border-color:#08c;
}
```
[Apple](http://images.apple.com/v/home/bg/styles/home.built.css)

### 4. Outline-color
 * This style establishes the color of the outline of element like text or an image. The outline is a line that is drawn around elements, outside the border edge.

```css
p {<!-- This is setting the outline color for any values that fall within a p tag on the page -->
    outline-color: #00ff00;
}
```
[W3C](http://www.w3schools.com/cssref/tryit.asp?filename=trycss_outline-color)

### 5. Column-rule-color
 * This style sets the color of the rule drawn between columns.

```css
#header {<!-- Sets the column rule color for any column that is within the id of header -->
  column-rule-color: blue;
  }
```
[MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-color)

### 6. Text-decoration-color
 * This style sets the color for a text decoration like an underline

```css
p {<!-- This is setting the text decoration to underline and the color of that underline for any values that fall within a p tag on the page -->
    text-decoration: underline;
    text-decoration-color: red;
}
```
[W3C](http://www.w3schools.com/cssref/css3_pr_text-decoration-color.asp)

### 7. Border-right-color
 * This style sets the border color specifically for just the right side of the element

```css
.content-inner{<!-- This will set the right border of anything with the class .content-inner to the established color, with a thickness of 1 pixel and it will be solid all the way around. -->
  border-right:1px solid #e1e8ed
  }
```
[Twitter](https://abs.twimg.com/a/1413573160/css/t1/twitter_core.bundle.css)
### 8. Border-left-color
 * This style sets the border color specifically for just the left side of the element

```css
.content-inner{<!-- This will set the left border of anything with the class .content-inner to the established color, with a thickness of 1 pixel and it will be solid all the way around. -->
  border-left:1px solid #e1e8ed;
  }
```
[Twitter](https://abs.twimg.com/a/1413573160/css/t1/twitter_core.bundle.css)
### 9. Border-top-color
 * This style sets the border color specifically for just the top border of the element

```css
.open.dropdown .btn .caret{<!-- This will set the top border of anything with the class .open.dropdown, .btn, or .caret, to the established color, with a thickness of 1 pixel and it will be solid all the way around. -->
  border-top-color:#292f33
  }
```
[Twitter](https://abs.twimg.com/a/1413573160/css/t1/twitter_core.bundle.css)
### 10. Border-bottom-color
 * This style sets the border color specifically for just the bottom border of the element

 ```css
.section{<!-- This will set the bottom border of anything with the class .section to the established color, with a thickness of 1 pixel and it will be solid all the way around. -->
  border-bottom:1px solid #e1e8ed
  }
 ```
 [Twitter](https://abs.twimg.com/a/1413573160/css/t1/twitter_core.bundle.css)
### 11. Text-decoration
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
### 12. Text-align
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
### 13. Font-size
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

### 14. Font-weight
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
### 15. Font-family
 *

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

### 16. Font-style
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

### 17. Text-shadow
 * This allows us to add a shadow around text and can be maniupulated vertically, horizontally, to add a blur, and color.

```css
.close:hover{<!-- This allows us to set a White text-shadow to our content that will drop from the text vertically with 1 pixel of seperation  -->
  text-shadow:0 1px 0 #fff;
}
```