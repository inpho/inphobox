window.template = '<div class="jumbotron"> \
<h1>{{label}}</h1> \
<p class="lead"> \
<h4 style="color: blue;">{{#professions}}{{.}}, {{/professions}}</h4><br /> \
{{#birth}}<strong>Birth: </strong> {{month}} {{day}}, {{year}}{{/birth}}<br /> \
{{#death}}<strong>Death: </strong> {{month}} {{day}}, {{year}}{{/death}}<br /> \
</p> \
</div> \
<hr /> \
<div class="row-fluid"> \
<div class="span4"> \
<h3>Influenced By:</h3> \
<p style="color: blue;">{{#influenced_by}}{{.}}, {{/influenced_by}}</p> \
<h3>Influenced:</h3> \
<p style="color: blue;">{{#influenced}}{{.}}, {{/influenced}}</p> \
<h3>Related Thinkers:</h3> \
<p style="color: blue;">{{#related_thinkers}}{{.}}, {{/related_thinkers}}</p> \
</div> \
<div class="span4"> \
<h3>Teachers:</h3> \
<p style="color: blue;">{{#teachers}}{{.}}, {{/teachers}}</p> \
<h3>Students:</h3> \
<p style="color: blue;">{{#students}}{{.}}, {{/students}}</p> \
</div> \
<div class="span4"> \
<h3>Related Ideas:</h3> \
<p style="color: blue;">{{#related_ideas}}{{.}}, {{/related_ideas}}</p> \
</div> \
</div> \
<hr />'