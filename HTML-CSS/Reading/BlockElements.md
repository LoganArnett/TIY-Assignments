/** HTML Block Level Elements
 */

### < header >
   Allows us to create a header on our page which will typically be used for
    a company logo or some information that you want people to see immediately

```html
<!-- Header -->
  <header id="main-header"><!-- This is the opening header tag with an id of "main-header" assigned -->
  </header><!-- This is the closing header tag -->


  <header id="topban" class="ban"><!-- This is the opening header tag with an id of "topban" and the class of "ban" assigned -->
  </header><!-- This is the closing header tag -->


  <header class='nav-locale-us nav-lang-en'><!-- This is the opening header tag with a class of "nav-locale-us nav-lang-en" assigned -->
 </header><!-- This is the closing header tag -->
```

### < footer >
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

<!-- This footer contains an unordered list which provides some navigation -->


  <footer id="globalfooter" class="footer footer-global"><!-- This is the opening footer tag with id "globalfooter" and class "footer footer-global" -->
  </footer><!-- This is the closing footer tag -->


  <!-- Footer -->
  <footer><!-- This is the opening footer tag -->
    <div class="column-container">
      <div class="column-main">
                <p>
          <bdi>&copy; 2005-2014 Mozilla Developer Network and individual contributors</p>
              </div>
                 </div>  
  </footer><!-- This is the closing footer tag -->

  <!-- This footer contains a <div> nested within another <div> to create multiple levels for styling. Contained within thaat is the copyright info for the MDN project. -->

```

### < ul >
   This tag allows us to create an unordered list usually with bulleted items.

```html
<ul><!--  This is the opening unordered list tag -->
    <li><a href="/locations">Locations</a></li><!--  This is an item in the list, which is also a link, using opening and closing list item tags -->
    <li><a href="/academy">Academy</a></li><!--  This is an item in the list, which is also a link, using opening and closing list item tags -->
    <li><a href="/accelerator">Accelerator</a></li><!--  This is an item in the list, which is also a link, using opening and closing list item tags -->
    <li><a href="/events">Events</a></li><!--  This is an item in the list, which is also a link, using opening and closing list item tags -->
</ul><!--  This is the closing unordered list tag -->

<!-- Creates an unordered list with the various list items. Each item is also a link to another page within the site -->

<ul><!--  This is the opening unordered list tag -->
    <li><a href="/about">About</a></li><!--  This is an item in the list, which is also a link, using opening and closing list item tags -->
    <li><a href="/jobs">Jobs</a></li><!--  This is an item in the list, which is also a link, using opening and closing list item tags -->
    <li><a href="/press">Press</a></li><!--  This is an item in the list, which is also a link, using opening and closing list item tags -->
    <li><a href="http://blog.theironyard.com">Blog</a></li><!--  This is an item in the list, which is also a link, using opening and closing list item tags -->
</ul><!--  This is the closing unordered list tag -->

<!-- Creates an unordered list with the various list items. Each item is also a link to another page within the site -->

 <ul class="no-style-type"><!--  This is the opening unordered list tag -->
    <li>• Houston:<br> <a href="tel:+7134253797">(713) 425-3797</a></li><!--  This is an item in the list, which is also a link, using opening and closing list item tags. This line also contains a <br> tag to create a line break -->
    <li>• Tampa Bay:<br> <a href="tel:+8137752275">(813) 775-2275</a> </li><!--  This is an item in the list, which is also a link, using opening and closing list item tags. This line also contains a <br> tag to create a line break -->
    <li>• Orlando:<br> <a href="tel:+3212098655">(407) 358-6683</a> </li><!--  This is an item in the list, which is also a link, using opening and closing list item tags. This line also contains a <br> tag to create a line break -->
 </ul><!--  This is the closing unordered list tag -->

 <!-- Creates an unordered list with the various list items. Each item is also a link to another page within the site. The <br> tag also helps to create a vertical list with line breaks -->
```

### < ol >
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

<!-- Creates an ordered list where Chrome is number 1. all the way
to Opera being number 5. -->

The three basic steps to creating a web page are:
<ol><!--  This is the opening ordered list tag -->
   <li> Decide on a subject.</li><!--  This is the first item in the list using opening and closing list item tags -->
   <li> Acquire the necessary tools and materials.</li><!--  This is the second item in the list using opening and closing list item tags -->
   <li> Write the HTML source code.</li><!--  This is the third item in the list using opening and closing list item tags -->
</ol><!--  This is the closing ordered list tag -->

<!-- Creates an ordered list so you can follow the instructions from 1-3
properly -->

<ol><!--  This is the opening ordered list tag -->
   <li>Turn left out of the car park onto Maple avenue ;</li><!--  This is the first item in the list using opening and closing list item tags -->
   <li>Take the second right onto Beech lane ;</li><!--  This is the second item in the list using opening and closing list item tags -->
   <li>Honk your Horn</li><!--  This is the third item in the list using opening and closing list item tags -->
</ol><!--  This is the closing ordered list tag -->

<!-- Creates an ordered list of directions. This makes you follow them in a
specific order -->
```


### < form >
   This tag allows us to create an input form for a user to interact with and
    send information back to a server.

### < div >
   This tag allows us to create new smaller containers within the master
    container of the page. We can then group elements within these tags and
    style them all together and move them around within the div container.

```html
<div class="primary-nav"><!-- This is the opening div tag with a class of "primary-nav" -->
</div><!-- This is the closing div tag -->


<div class="image-box"><!-- This is the opening div tag with a class of "image-box" -->
<img src="/images/academy/web-design-logo.png"><!-- This is an image that is inserted and is stored within a file not an Image URL -->
</div><!-- This is the closing div tag with a class -->



 <div class="social-nav"><!-- This is the opening div tag with a class of "social-nav" -->
    <ul>
      <li><a href="http://twitter.com/theironyard" class="ss-icon">twitter</a></li>
      <li><a href="http://facebook.com/theironyard" class="ss-icon">facebook</a></li>
      <li><a href="http://vimeo.com/theironyard" class="ss-icon">vimeo	</a></li>
    </ul>
 </div><!-- This is the closing div tag -->

```

### < address >
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


<address><!-- This is the opening address tag -->
  You can contact us at:<br>
  TechOnTheNet.com<br>
  123 Somewhere St.<br>
  City, State
</address><!-- This is the closing address tag -->


<address><!-- This is the opening address tag -->
  Author: Jhon Rocket
  512 E Riverside Dr # 134
  Austin, TX
  (512) 411-7433
</address><!-- This is the closing address tag -->

```

### < table >
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

```

### < section >
   This is a generic section of a document in relation to the overall layout of
    the page. It should not be used like a <div> especially if you are just
    creating a section for styling. The sections should relate to the outline of your page.

### < figure >
   This tag allows us to create some sort of content that is self contained
    from the main flow of the page. Usually an image. This tag also takes the
    <figcaption> tag to provide a caption to the content within figure.
