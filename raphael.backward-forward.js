/*
 * raphael.backward-forward 0.0.2
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
Raphael.fn.arrange = function(shape, steps, scope) {
  if (!parseInt(steps)) return;
  var elements  = scope || this.elements(),
      pos       = elements.indexOf(shape),
      last_pos  = elements.length - 1,
      new_pos   = pos + steps;
  if (new_pos > last_pos)
    new_pos = last_pos;
  if (new_pos <= 0)
    new_pos = 0;
  if (steps > 0)
    shape.insertAfter(elements[new_pos]);
  else if (steps < 0)
    shape.insertBefore(elements[new_pos]);
  if (scope) {
    scope.splice(pos, 1);
    scope.splice(new_pos, 0, shape);
  }
}

// move an element one step backward in the stack
Raphael.el.backward = function(steps, scope) {
  steps = parseInt(steps) || 1;
  this.paper.arrange(this, -steps, scope);
  return this;
}

// move an element one step forward in the stack
Raphael.el.forward = function(steps, scope) {
  steps = parseInt(steps) || 1;
  this.paper.arrange(this, steps, scope);
  return this;
}