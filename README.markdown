# Raphaël Backward Forward plugin - 0.0.2

### What is it?
An extension to the Raphael Vector Library.<br/>
It enables Raphael to send elements backward and forward by a given amount of steps.

### Usage

Basic usage:

    // Creates canvas 800 × 500 at 10, 10
    var paper = Raphael(10, 10, 800, 500);
    
    // Add a circle
    var circle = paper.circle(150, 120, 100);
    circle.attr({
      fill:           "#83B100",
      stroke:         "#333",
      "stroke-width": 10
    });
    
    // Add a rect
    var rect = paper.rect(150, 80, 100);
    rect.attr({
      fill:           "#83B100",
      stroke:         "#333",
      "stroke-width": 10
    });
    
    // Move the circle one step forward
    circle.forward();
    
    // or
    
    circle.forward(1);
    
    // or
    
    paper.arrange(circle, 1);
    
    // Move the circle one step backward
    circle.backward();
    
    // or
    
    circle.backward(1);
    
    // or
    
    paper.arrange(circle, -1);

If you want action to be limited to a selection of elements, simply pass an array with those elements as the last attribute:

    // arrange within a selection
    circle.backward(1, array);
    
    // or
    
    paper.arrange(circle, -1, array);


### Dependencies
- [Raphael JS](http://raphaeljs.com/)

### Important
- This plugin is still under development

### To-do
- writing tests
- testing with sets