function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}

StretchCell.prototype.minWidth = function() {
  return Math.max(this.width, this.inner.minWidth());
};

StretchCell.prototype.minHeight = function() {
  return Math.max(this.height, this.inner.minHeight());
};

StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
};

const stretchCell = new StretchCell(new TextCell("abc"), 1, 2);
console.log(stretchCell.minWidth());
console.log(stretchCell.minHeight());
console.log(stretchCell.draw(3, 2));