nchart
======

Nchart was inspired by an xkcd comic, http://xkcd.com/657/, and is implemented in JavaScript. You feed it a representation of a story - basically what characters in the story are together at each point - and nchart constructs a graph from it. Then, using a series of graph layout techniques (mostly variations on Sugiyama-style layered graph drawing), it plots the graph in a hopefully pleasing way, by attempting to minimize the number of edge crossings and maximizing straight lines. The graph is then actually drawn in the browser using SVG, though I have made the drawing portion pluggable, and I plan on implementing a Canvas drawer soon. The project layout still betrays its roots as an exploratory exercise, and is thus kind of messy, so I'll try to explain the most important parts here. Almost all the meat of the project is in nchart.js; I think it would be fair to say that this file is the whole project, and everything else is just support files, like Google's Closure library, or examples. If you'd like to see it in action, all that is needed is to drop the Mercurial repository in a web-accessible location and navigate to one of the example HTML files in the top level, using a browser that supports SVG (However, there is a bug that occurs in recent versions of WebKit, so Firefox is probably the most pleasant experience, currently). I have taken the examples from the first three books of my favorite fantasy series - A Song of Ice and Fire by George RR Martin. The most interesting graphs are A Game of Thrones (agot.html), and the combination of all three books (asoiaf.html).
