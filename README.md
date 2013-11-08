InPhOboxes
==============

This repository contains the starter code for creating an InPhObox. This project
is designed to be a creative programming task to see how well you will be able
to integrate with the InPhO Project development given some skeleton code and
documentation. 

You will be working with a HTML file that imports three libraries used
throughout the InPhO Project. These libraries were selected due to very
large userbases and support communities on [Google](http://google.com) and
[StackOverflow](http://stackoverflow.com).
*   **[jQuery](http://jquery.com)** is a
general purpose JavaScript library used primarily for API calls and client-side
behavior. 
*   **[Mustache.js](http://mustache.github.io/)** is a client-side templating engine used to display data
stored in JSON format
*   **[Bootstrap 2](http://getbootstrap.com/2.3.2/)** is a CSS framework used to make websites
pretty. 


Creating a basic InPhObox displaying the name should take fewer than 5 hours,
even with no web development experience. We are largely looking at your ability
for self-instruction, ability to search for examples, and creativity. Additional
tasks for extending the InPhOboxes are listed at the end and are highly
encouraged.

The Task
-----------
Create an InPhObox similar to the infoboxes displayed alongside [Google search
results](https://www.google.com/search?q=plato) or [Wikipedia
entries](http://en.wikipedia.org/wiki/Plato). To do this, you will need to use
the [jQuery library](http://jquery.com/) to query the [InPhO
API](https://inpho.cogs.indiana.edu/docs/) for data to display on a web page
using the [Mustache templating engine](http://mustache.github.io/).  We request
that you do this using the [Plato InPhO
entry](https://inpho.cogs.indiana.edu/thinker/3724).

1.  Download the starter files as a [zip archive](https://github.com/inpho/inphobox/archive/master.zip).
2.  Using the [jQuery.getJSON()](http://api.jquery.com/jQuery.getJSON/)
function, query the InPhO API for the Plato entry at 
https://inpho.cogs.indiana.edu/thinker/3724.json.
3.  Take the data and render it to the page using 
[mustache.js](http://mustache.github.io/mustache.5.html).
4.  To make the data presentable, use [Bootstrap 2.3.2](http://getbootstrap.com/2.3.2/index.html).

All libraries are already imported in the `index.html` starter file. What you
need to work on is code.

Getting the page to display at least the name, a link to the Wiki entry, and a
link to the InPhO page is progress worth writing us about. Attach your modified
`index.html` to the e-mail.

Tips
------
To help with developing your template, you can use the [mustache.js demo
page](http://mustache.github.io/#demo), replacing the template with your
template and the JSON data with the data from the API call.

To help making the information more presentable, the
[Bootstrap 2.3.2 documentation](http://getbootstrap.com/2.3.2/)
has many examples that will help you.

Resources
-----------
*   [How jQuery Works] (http://learn.jquery.com/about-jquery/how-jquery-works/)
*   [CSS Tutorial](http://learn.shayhowe.com/html-css/)
*   A Mustache.js tutorial is not linked.
*   [jQuery Documentation](http://api.jquery.com/)
*   [Mustache.js Documentation](http://mustache.github.io/mustache.5.html)
*   [Bootstrap 2.3.2 Documentation](http://getbootstrap.com/2.3.2/)
*   [Mustache.js JavaScript Implementation](https://github.com/janl/mustache.js)

Advanced Ideas
----------------
These are starting points once you can render the thinker's label on the page.
Other ideas are encouraged!

*   Create function for arbitrary API call and use to 
    get label information for "related_thinkers", "students", 
    "teachers" fields. Link to these entries in InPhO.
*   Read the thinker ID from the query string (e.g., "index.html?id=3724") and
    use the arbitrary API call function to populate the page.
*   Query the API by name using the list interface:
    https://inpho.cogs.indiana.edu/thinker.json?q=Plato
*   Create a way to handle multiple results from the name API. (e.g., [/thinker.json?q=David](https://inpho.cogs.indiana.edu/thinker.json?q=David))
*   Load Mustache template from an external file.
*   Load dbpedia information using "wiki" field of the InPhO JSON data. 
    The URL for the DBpedia JSON export is: http://dbpedia.org/data/Plato.json . 
    The URL for the DBpedia viewer is: http://dbpedia.org/page/Plato
*   Register for [GitHub](http://github.com), fork the
    [inpho/inphobox](http://github.com/inpho/inphobox) repository, and push your
    work to GitHub.

Advanced Tips
---------------
These are for challenges that may be encountered implementing more advanced
topics.

If you are loading external files via AJAX (the `jQuery.get()` 
method), it will not work if you are just loading the file from the filesystem
due to an Access-Control-Allow-Origin error. If you host the page on Mypage
or another hosting service it should work. Contact Jaimie (IU name: jammurdo) 
if you get stuck on this.
