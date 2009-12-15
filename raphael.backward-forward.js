/*
 * raphael.backward-forward 0.0.1
 *
 * Copyright (c) 2009 Wout Fierens
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */

// get all elements in the paper
Raphael.fn.elements = function() {
  var b = this.bottom,
      r = []; 
  while (b) { 
    r.push(b); 
    b = b.next; 
  }
  return r;
}

// move an element in the stack
Raphael.fn.arrange = function(shape, steps) {
  if (!parseInt(steps)) return;
  var all = this.elements(),
      pos = all.indexOf(shape),
      l = all.length,
      new_pos = pos + steps;
  if (new_pos > l - 1)
    shape.toFront();
  else if (new_pos <= 0)
    shape.toBack();
  else if (steps > 0)
    shape.insertAfter(all[new_pos]);
  else if (steps < 0)
    shape.insertBefore(all[new_pos]);
}

// move an element one step backward in the stack
Raphael.el.backward = function(steps) {
  steps = parseInt(steps) || 1;
  this.paper.arrange(this, -steps);
}

// move an element one step forward in the stack
Raphael.el.forward = function(steps) {
  steps = parseInt(steps) || 1;
  this.paper.arrange(this, steps);
}