# HTML Block Level

### `<header>`
   Allows us to create a header on our page which will typically be used for
    a company logo or some information that you want people to see immediately

```html
<!-- Header -->
  <header><!-- This is the opening header tag -->
		<div class="right-panel">
                	 <a href="/download/" class="cta click_tracking" data-label="Download header">Download</a>
                        <!-- Clickable Download link for the Evernote App -->
            			 <a href="#" id="header-menu" class="menu click_tracking" data-label="Menu open header"><span class="text">Menu</span><span class="header-sprite"></span></a>
	 </div>               <!-- Main menu button for a dropdown -->
  </header><!-- This is the closing header tag -->
  <a href="https://evernote.com/"></a>


  <header id="topban" class="ban"><!-- This is the opening header tag with an id of "topban" and the class of "ban" assigned -->
  </header><!-- This is the closing header tag -->
  <a href="view-source:http://orlando.craigslist.org/"></a>


  <header class='nav-locale-us nav-lang-en'><!-- This is the opening header tag with a class of "nav-locale-us nav-lang-en" assigned -->
 </header><!-- This is the closing header tag -->
 <a href="view-source:http://www.amazon.com/"></a>
```

### `<footer>`
   Allows us to have a footer for any parent element that allows "Flow Content."
    Typically used for contact info, addresses, copyright, etc.

```html
<footer><!-- This is the opening footer tag -->
  <ul class="clfooter">
    <li>&copy; 2014 <span class="desktop">craigslist</span><span class="mobile">CL</span></li>
    <li><a href="//www.craigslist.org/about/help/">help</a></li>
    <li><a href="//www.craigslist.org/about/scams">safety</a></li>
    <li class="desktop"><a href="//www.craigslist.org/about/privacy.policy">privacy</a></li>
    <li class="desktop"><a href="https://forums.craigslist.org/?forumID=8">feedback</a></li>
    <li class="desktop"><a href="//www.craigslist.org/about/craigslist_is_hiring">cl jobs</a></li>
    <li><a href="//www.craigslist.org/about/terms.of.use">terms</a></li>
    <li><a href="//www.craigslist.org/about/">about</a></li>
    <li class="fsel desktop linklike" data-mode="mobile">mobile</li>
    <li class="fsel mobile linklike" data-mode="desktop">desktop</li>
  </ul>
</footer><!-- This is the closing footer tag -->
<a href="craigslist.com"></a>
<!-- This footer contains an unordered list which provides some navigation -->


  <footer id="globalfooter" class="footer footer-global"><!-- This is the opening footer tag with id "globalfooter" and class "footer footer-global" -->
  </footer><!-- This is the closing footer tag -->
<a href="apple.com"></a>

  <!-- Footer -->
  <footer><!-- This is the opening footer tag -->
    <div class="column-container">
      <div class="column-main">
                <p>
          <bdi>&copy; 2005-2014 Mozilla Developer Network and individual contributors</p>
              </div>
                 </div>  
  </footer><!-- This is the closing footer tag -->
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol"></a>
  <!-- This footer contains a <div> nested within another <div> to create multiple levels for styling. Contained within thaat is the copyright info for the MDN project. -->

```

### `<ul>`
   This tag allows us to create an unordered list usually with bulleted items.

```html
<ul><!--  This is the opening unordered list tag -->
    <li><a href="/locations">Locations</a></li><!--  This is an item in the list, which is also a link, using opening and closing list item tags -->
    <li><a href="/academy">Academy</a></li><!--  This is an item in the list, which is also a link, using opening and closing list item tags -->
    <li><a href="/accelerator">Accelerator</a></li><!--  This is an item in the list, which is also a link, using opening and closing list item tags -->
    <li><a href="/events">Events</a></li><!--  This is an item in the list, which is also a link, using opening and closing list item tags -->
</ul><!--  This is the closing unordered list tag -->
<a ref="theironyard.com"></a>
<!-- Creates an unordered list with the various list items. Each item is also a link to another page within the site -->

<ul><!--  This is the opening unordered list tag -->
    <li><a href="/about">About</a></li><!--  This is an item in the list, which is also a link, using opening and closing list item tags -->
    <li><a href="/jobs">Jobs</a></li><!--  This is an item in the list, which is also a link, using opening and closing list item tags -->
    <li><a href="/press">Press</a></li><!--  This is an item in the list, which is also a link, using opening and closing list item tags -->
    <li><a href="http://blog.theironyard.com">Blog</a></li><!--  This is an item in the list, which is also a link, using opening and closing list item tags -->
</ul><!--  This is the closing unordered list tag -->
<a ref="theironyard.com"></a>
<!-- Creates an unordered list with the various list items. Each item is also a link to another page within the site -->

 <ul class="no-style-type"><!--  This is the opening unordered list tag -->
    <li>• Houston:<br> <a href="tel:+7134253797">(713) 425-3797</a></li><!--  This is an item in the list, which is also a link, using opening and closing list item tags. This line also contains a <br> tag to create a line break -->
    <li>• Tampa Bay:<br> <a href="tel:+8137752275">(813) 775-2275</a> </li><!--  This is an item in the list, which is also a link, using opening and closing list item tags. This line also contains a <br> tag to create a line break -->
    <li>• Orlando:<br> <a href="tel:+3212098655">(407) 358-6683</a> </li><!--  This is an item in the list, which is also a link, using opening and closing list item tags. This line also contains a <br> tag to create a line break -->
 </ul><!--  This is the closing unordered list tag -->
<a ref="theironyard.com"></a>
 <!-- Creates an unordered list with the various list items. Each item is also a link to another page within the site. The <br> tag also helps to create a vertical list with line breaks -->
```

### `<ol>`
   This tage allows us to create an ordered list where the order of items matters
    and is usually numbered.

```html
  <ol><!--  This is the opening ordered list tag -->
    <li>Google Chrome</li><!--  This is the first item in the list using opening and closing list item tags -->
    <li>Internet Explorer</li><!--  This is the second item in the list using opening and closing list item tags -->
    <li>Firefox</li><!--  This is the third item in the list using opening and closing list item tags -->
    <li>Safari</li><!--  This is the fourth item in the list using opening and closing list item tags -->
    <li>Opera</li><!--  This is the fifth item in the list using opening and closing list item tags -->
 </ol><!--  This is the closing ordered list tag -->
<a ref="http://blog.teamtreehouse.com/use-html-list-elements"></a>
<!-- Creates an ordered list where Chrome is number 1. all the way
to Opera being number 5. -->

The three basic steps to creating a web page are:
<ol><!--  This is the opening ordered list tag -->
   <li> Decide on a subject.</li><!--  This is the first item in the list using opening and closing list item tags -->
   <li> Acquire the necessary tools and materials.</li><!--  This is the second item in the list using opening and closing list item tags -->
   <li> Write the HTML source code.</li><!--  This is the third item in the list using opening and closing list item tags -->
</ol><!--  This is the closing ordered list tag -->
<a ref="http://www.ironspider.ca/lists/olists.htm"></a>
<!-- Creates an ordered list so you can follow the instructions from 1-3
properly -->

<ol><!--  This is the opening ordered list tag -->
   <li>Turn left out of the car park onto Maple avenue ;</li><!--  This is the first item in the list using opening and closing list item tags -->
   <li>Take the second right onto Beech lane ;</li><!--  This is the second item in the list using opening and closing list item tags -->
   <li>Honk your Horn</li><!--  This is the third item in the list using opening and closing list item tags -->
</ol><!--  This is the closing ordered list tag -->
<a ref="http://www.nomensa.com/blog/2011/using-html-lists"></a>
<!-- Creates an ordered list of directions. This makes you follow them in a
specific order -->

```


### `<form>`
   This tag allows us to create an input form for a user to interact with and
    send information back to a server.

```html
<form><!-- This is the opening form tag -->
  First name: <input type="text" name="FirstName" value="Mickey"><br><!-- This is an text input box with label First Name -->
  Last name: <input type="text" name="LastName" value="Mouse"><br><!-- This is an text input box with label Last Name -->
  <input type="submit" value="Submit"><!-- this is a Submit button that is clickable -->
</form><!-- This is the closing form tag -->
<a href="http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_form_submit"></a>

<form action="" method="post"><!-- This is the opening form tag with an empty action and a method of post -->
  <fieldset><!-- this is the opening fieldset tag which is used to group controls -->
    <legend>Title</legend><!-- the legend tag is used as a caption or title for its parent tag of fieldset -->
    <input type="radio" name="radio" id="radio"> <label for="radio">Click me</label><!-- this is a radio button
    which is just a dot button that can be selected by clicking -->
  </fieldset><!-- this is the closing fieldset tag -->
</form><!-- This is the closing form tag -->
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"></a>

<form action="" method="post"><!-- This is the opening form tag with an empty action and a method of post -->
  <fieldset><!-- this is the opening fieldset tag which is used to group controls -->
    <legend>Title</legend><!-- the legend tag is used as a caption or title for its parent tag of fieldset -->
    <input type="checkbox" name="check" id="check"> <label for="check">Check me</label><!-- this is a checkbox
     that can be selected by clicking -->
  </fieldset><!-- this is the closing fieldset tag -->
</form><!-- This is the closing form tag -->
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"></a>
```

### `<div>`
   This tag allows us to create new smaller containers within the master
    container of the page. We can then group elements within these tags and
    style them all together and move them around within the div container.

```html
<div class="primary-nav"><!-- This is the opening div tag with a class of "primary-nav" -->
</div><!-- This is the closing div tag -->
<a href="theironyard.com"></a>

<div class="image-box"><!-- This is the opening div tag with a class of "image-box" -->
<img src="/images/academy/web-design-logo.png"><!-- This is an image that is inserted and is stored within a file not an Image URL -->
</div><!-- This is the closing div tag with a class -->
<a href="theironyard.com"></a>


 <div class="social-nav"><!-- This is the opening div tag with a class of "social-nav" -->
    <ul>
      <li><a href="http://twitter.com/theironyard" class="ss-icon">twitter</a></li>
      <li><a href="http://facebook.com/theironyard" class="ss-icon">facebook</a></li>
      <li><a href="http://vimeo.com/theironyard" class="ss-icon">vimeo	</a></li>
    </ul>
 </div><!-- This is the closing div tag -->
<a href="theironyard.com"></a>

```

### `<address>`
   This tag is typically used to provide contact information for the company,
    author, or person of interest within a page or article to the end user.

```html
<address><!-- This is the opening address tag -->
  Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br>
  Visit us at:<br>
  Example.com<br>
  Box 564, Disneyland<br>
  USA
</address><!-- This is the closing address tag -->
<a href="http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_address"></a>


<address><!-- This is the opening address tag -->
  You can contact us at:<br>
  TechOnTheNet.com<br>
  123 Somewhere St.<br>
  City, State
</address><!-- This is the closing address tag -->
<a href="http://www.techonthenet.com/html/elements/address_tag.php"></a>


<address><!-- This is the opening address tag -->
  Author: Jhon Rocket
  512 E Riverside Dr # 134
  Austin, TX
  (512) 411-7433
</address><!-- This is the closing address tag -->
<a href="http://www.htmlquick.com/reference/tags/address.html"></a>

```

### `<table>`
   This tag allows to create a table of information and can take in other tags
    to add more columns and rows

```html
<table><!-- This is the opening table tag -->
			<tbody>
			<tr class="row-border-btm">
				<th colspan="2" class="billing-table-head">
					<span id="order_summary">Order Summary</span>
				</th>
			</tr>
			</tr>
			</tbody>
</table><!-- This is the closing table tag -->
<a href="view-source:http://www.amazon.com/"></a>


<table><!-- This is the opening table tag -->
  <tr><!-- table row tag -->
    <th>Month</th><!-- table header tag -->
    <th>Savings</th><!-- table header tag -->
  </tr><!-- closing table row tag -->
  <tr><!-- table row tag -->
    <td>January</td><!-- table data(cell) tag -->
    <td>$100</td><!-- table data(cell) tag -->
  </tr><!-- closing table row tag -->
  <tr><!-- table row tag -->
    <td>February</td><!-- table data(cell) tag -->
    <td>$80</td><!-- table data(cell) tag -->
  </tr><!-- closing table row tag -->
</table><!-- This is the closing table tag -->
<a href="http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_table_test"></a>


<table style="width:100%"><!-- This is the opening table tag with styling added for the width -->
  <tr><!-- table row tag -->
    <td>Jill</td><!-- table data(cell) tag -->
    <td>Smith</td><!-- table data(cell) tag -->
    <td>50</td><!-- table data(cell) tag -->
  </tr><!-- closing table row tag -->
  <tr><!-- table row tag -->
    <td>Eve</td><!-- table data(cell) tag -->
    <td>Jackson</td><!-- table data(cell) tag -->
    <td>94</td><!-- table data(cell) tag -->
  </tr><!-- closing table row tag -->
</table><!-- This is the closing table tag -->
<a href="http://www.w3schools.com/html/html_tables.asp"></a>
```

### `<section>`
   This is a generic section of a document in relation to the overall layout of
    the page. It should not be used like a div especially if you are just
    creating a section for styling. The sections should relate to the outline of your page.

```html
<section><!-- This is the opening section tag -->
  <h1>WWF</h1><!-- This is a header 1 tag making a focal point of the page -->
  <p>The World Wide Fund for Nature (WWF) is an international organization
  working on issues regarding the conservation, research and restoration of
  the environment, formerly named the World Wildlife Fund. WWF was founded
  in 1961.</p><!-- This is a p tag with opening and closing tags
  and it creates a block of text like a paragraph -->
</section><!-- This is the closing section tag -->
<a href="http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_section"></a>

<section>
  <h1>WWF's Panda symbol</h1><!-- This is a header 1 tag making a focal point of the page -->
  <p>The Panda has become the symbol of WWF. The well-known panda logo of
     WWF originated from a panda named Chi Chi that was transferred from
     the Beijing Zoo to the London Zoo in the same year of the establishment
     of WWF.</p><!-- This is a p tag with opening and closing tags
     and it creates a block of text like a paragraph -->
</section><!-- This is the opening section tag -->
<a href="http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_section"></a>

<section><!-- This is the opening section tag -->
  <h1>Heading for Section</h1><!-- This is a very literal example, shows the heading for the section -->
  <p>Text that appears under section</p><!-- the content for the section -->
</section><!-- This is the opening section tag -->
<a href="http://www.techonthenet.com/html/elements/section_tag.php"></a>

```

### `<figure>`
   This tag allows us to create some sort of content that is self contained
    from the main flow of the page. Usually an image. This tag also takes the
    figcaption tag to provide a caption to the content within figure.

```html
<figure><!-- opening figure tag -->
  <img src="img_pulpit.jpg" alt="The Pulpit Rock" width="304" height="228"><!-- this is an image tag contained within the figure tags -->
</figure><!-- closing figure tag -->
<a href="http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_figure"></a>


<figure><!-- opening figure tag -->
	<img src="https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png" alt="An awesome picture"><!-- image with figure -->
	<figcaption>Caption for the awesome picture</figcaption><!-- caption for the image contained within the figure -->
</figure><!-- closing figure tag -->
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure"></a>


<figure id="figure3"><!-- opening figure tag with id figure3 -->
  <figcaption>Figure 1: My Dogs Shasta and McKinley</figcaption><!-- caption used as a header for the image contained within the figure -->
  <img src="shasta.jpg" alt="My Dog Shasta"><!-- image with figure -->
  <img src="mckinley.jpg" alt="My Dog McKinley"><!-- image with figure -->
</figure><!-- closing figure tag -->
<a href="http://webdesign.about.com/od/html5tags/qt/understanding-figure-and-figcaption-html5.htm"></a>
```

# Inline

### 11. `<span>`
   This is an inline element that acts as a container for textual content that does not represent anything in terms of the layout

```html
<span class="cart-icon">Cart</span><!-- This is a span container with the class cart-icon and the text Cart -->

<span class="spl-links"><!-- This is a span container with the class spl-links some anchor(<a>) tags with links surrounding short snippets of text -->
<a href="https://www-ssl.bestbuy.com/site/olspage.jsp?id=pcat17000&type=page" class="heavy">Sign In</a><!-- This is the text Sign In wrapped in an <a> tag which turns it into a link -->
 or <a href="http://www.bestbuy.com/site/olstemplatemapper.jsp?id=pcmcat274800050019&type=page&i=4" class="heavy">Create an Account</a><!-- This is the text Sign In wrapped in an <a> tag which turns it into a link -->
</span><!-- This is the closing span tag -->

<span>Appliance Services</span><!-- This is a span that was used in between anchor tags(<a>) and after an img as a caption -->
```
[Best Buy](http://www.bestbuy.com/)

### 12. `<strong>`
   This allows you to put STRONG importance and is typically represented as bold text

```html
<strong>Free Shipping</strong><!-- The text selection between the strong tags will be bolded -->

<strong>Low Price Guarantee</strong>><!-- The text selection between the strong tags will be bolded -->

<strong>HUGE SAVINGS</strong><!-- The text selection between the strong tags will be bolded -->
```
[Best Buy](http://www.bestbuy.com/)

### 13. `<br>`
   This allows you to create a line break in the text to format it in the way that you want
   with more white space.

```html
It's free and it takes just a minute.<br>Download the latest version of<!-- Adds a line break in between the two lines of text -->

Introducing My Best Buy &ndash;<br /> Reinventing Reward Zone<!-- Adds a line break in between the two lines of text -->

California Supply Chain<br/>Transparency<!-- Adds a line break in between the two lines of text -->
```
[Best Buy](http://www.bestbuy.com/)

### 14. `<strike>`
   This adds a strike through text as an inline element but has become obsolete as you can accomplish this with text-decoration in css as well

```html
<strike>Today's Special: Salmon</strike><!-- This would appear in the output of the page with a line through the middle of the text all the way down horizontally -->

<strike>This has a line through it</strike><!-- This would appear in the output of the page with a line through the middle of the text all the way down horizontally -->


<strike>Strike THREE!!!</strike><!-- This would appear in the output of the page with a line through the middle of the text all the way down horizontally -->

```


### 15. `<code>`
   This shows that you are about to add a piece of computer code into the page

```html
<code>This is code.</code><!-- This will allow whatever falls in between the tags to appear in the desired computer programming format -->

<code>HTMLElement</code><!-- This will allow whatever falls in between the tags to appear in the desired computer programming format -->

<code>&lt;command&gt;</code><!-- This will allow whatever falls in between the tags to appear in the desired computer programming format -->
```
[MDN](view-source:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code)

### 16. `<a>`
   This is an anchor tag and allows us to create hyperlinks that are directed to a specific destination

```html
<a href="#" class="nav-my">My Best Buy</a><!-- This tag has a placeholder # for the link which will not take it anywhere -->

<a href="https://www.google.com/intl/en/chrome/browser/" target="_blank">Chrome</a><!-- This tag has a link back to the Google Chrome Browser page -->

<a href="http://windows.microsoft.com/en-US/internet-explorer/download-ie" target="_blank">Internet Explorer</a><!-- This tag has a link back to the Internet Explorer Browser page(Who Uses IE?! NOTHING WORKS!!!) -->
```
[Best Buy](http://www.bestbuy.com/)

### 17. `<abbr>`
   This abbreviation tag allows you to create a title or definition for an abbreviation that you type out incase you want to be able to provide the full meaning as well when the user hovers over the abbreviation

```html

<abbr title="United Kingdom">UK</abbr><!-- This tag allows you to hover over the text UK and see a window pop up displaying United Kingdom as the meaning -->

<abbr title="Nike">NKE Stock Ticker</abbr><!-- This tag allows you to hover over the text NKE and see a window pop up displaying Nike as the meaning -->


<abbr title="'Merica">US</abbr><!-- This tag allows you to hover over the text US and see a window pop up displaying 'Merica as the meaning -->

```
[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr)

### 18. `<em>`
   This marks the selected text with a stress emphasis. It results by converting the text to italics. The major difference between this and the <i> tag is that a screen reader would read anything in between the <em> tag with an emphasis while <i> simply italicizes a selection in appearance.

```html
<em>block-level</em><!-- This will change the text into an italic appearance and add emphasis to the word if it were to be read by a screen reader -->

<em>phrasing content</em><!-- This will change the text into an italic appearance and add emphasis to the word if it were to be read by a screen reader -->

<em>flow</em><!-- This will change the text into an italic appearance and add emphasis to the word if it were to be read by a screen reader -->
```
[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr)

### 19. `<b>`
   This will change the text stylistically to bold but add no emphasis to the words meaning itself

```html
<b>text-level</b><!-- This will turn all of the text in between the tags to bold -->

<b>HTML</b><!-- This will turn all of the text in between the tags to bold -->

<b> element, likely in bold.</b><!-- This will turn all of the text in between the tags to bold -->
```
[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr)


### 20. `<i>`
   This will change the text stylistically to italic but add no emphasis to the words meaning itself

```html
<i>Veni, vidi, vici</i><!-- This will turn all of the text in between the tags to italic -->

<i>Hello Everyone</i><!-- This will turn all of the text in between the tags to italic -->

<i>Is this Italic?</i><!-- This will turn all of the text in between the tags to italic -->
```
[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr)
<<<<<<< HEAD

### 21. `<input>`
   Allows us to create different ways to take in information from the user in forms

```html
<input type="text" name="input" value="Type here"><!-- This will create a basic text box for text input from the user -->

<input type="submit" value="Submit" /><!-- Allows us to create a submit button -->

E-mail: <input type="email" name="user_email" /><br /><!-- Allows us to take in email and provide error messages if it is not a valid email -->
```
[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input)

### 22. `<fieldset>`
   This is used to group several controls as well as labels (<label>) within a form.

```html
<fieldset><!-- This creates a fieldset within a form, the the legend of Title and a radio button -->
    <legend>Title</legend>
    <input type="radio" name="radio" id="radio"> <label for="radio">Click me</label>
</fieldset>

<fieldset><!-- This creates a fieldset within a form, the the legend of Personalia and text boxes -->
    <legend>Personalia:</legend>
    Name: <input type="text"><br>
    Email: <input type="text"><br>
    Date of birth: <input type="text">
</fieldset>

<fieldset name="userinfo"><!-- This creates a fieldset within a form, the the legend of User Info and text boxes -->
  <legend>User information</legend>
  <label for="name">Name</label>
  <input type="text" name="name" id="name" size="40">
  <label for="address">Address</label>
  <input type="text" name="address" id="address" size="40">
  <label for="phone">Phone</label>
  <input type="text" name="phone" id="phone" size="40">
</fieldset>
```

### 23. `<legend>`
   This allows us to create a caption for a Fieldset tag

```html
<fieldset><!-- This creates a fieldset within a form, the the legend of Title and a radio button -->
    <legend>Title</legend>
    <input type="radio" name="radio" id="radio"> <label for="radio">Click me</label>
</fieldset>

<fieldset><!-- This creates a fieldset within a form, the the legend of Personalia and text boxes -->
    <legend>Personalia:</legend>
    Name: <input type="text"><br>
    Email: <input type="text"><br>
    Date of birth: <input type="text">
</fieldset>

<fieldset name="userinfo"><!-- This creates a fieldset within a form, the the legend of User Info and text boxes -->
  <legend>User information</legend>
  <label for="name">Name</label>
  <input type="text" name="name" id="name" size="40">
  <label for="address">Address</label>
  <input type="text" name="address" id="address" size="40">
  <label for="phone">Phone</label>
  <input type="text" name="phone" id="phone" size="40">
</fieldset>
```

### 24. `<button>`
   Represents a clickable button

```html
<button name="button">Click me</button><!-- Creates a basic clickable button -->

<form action="/" method="post"><!-- Creates an alternative submit button -->
  <button>Submit</button>
</form>

<form action="/" method="post"><!-- Creates a basic clickable reset button -->
  <button type="reset">Reset</button>
</form>
```

### 25. `<select>`
   Allows us to present a menu of options to the user

```html
<select name="select"><!-- Creates a drop down menu that will default to the 2 value being selected -->
  <option value="value1">Value 1</option>
  <option value="value2" selected>Value 2</option>
  <option value="value3">Value 3</option>
</select>

<select><!-- Creates a drop down menu -->
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>

<select name="dropdown"><!-- Creates a drop down menu -->
<option value="Data Structures" selected>Data Structures</option>
<option value="Data Mining">Data Mining</option>
</select>
```
=======
>>>>>>> d459afedb7c4ac590e40386a89d00d39686ef062
