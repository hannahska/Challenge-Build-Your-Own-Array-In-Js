function MyArray(initialCapacity) {
    if (initialCapacity === undefined) {
        initialCapacity = 3;
    }

    this.elements = new PlainArray(initialCapacity);
    this.size = 0;
}

MyArray.prototype.length = function () {
	return this.size;
};

MyArray.prototype.push = function (value) {
	this.elements[this.size] = value;
	this.size += 1;
};

MyArray.prototype.get = function (index) {
	return this.elements[index];
};

MyArray.prototype.set = function (index, value) {
	if (index < 0) {
		throw new Error("Index is out of bounds.");
	} else {
		this.elements[index] = value;

		if (index > this.size) {
			this.size = index + 1;
		}
	}
};

MyArray.of = function () {
	var newArray = new MyArray(arguments.length);

	if (arguments !== undefined) {
		for (var i=0;i<arguments.length;i++) {
			newArray.push(arguments[i]);
		};
	}
	
	return newArray;
};

MyArray.prototype.pop = function () {
	var lastElem;
	
	if (this.size > 0) {
		lastElem = this.elements[this.size - 1];
		this.elements[this.size - 1] = undefined;
		this.size -= 1;
	}
	
	return lastElem;
};

MyArray.prototype.concat = function (other) {

};

MyArray.prototype.indexOf = function (element) {

};

MyArray.prototype.lastIndexOf = function (element) {

};

MyArray.prototype.includes = function (element) {

};

MyArray.prototype.find = function (fn) {

};

MyArray.prototype.findIndex = function (fn) {

};

MyArray.prototype.equals = function (other) {

};

MyArray.prototype.forEach = function (fn) {

};

MyArray.prototype.join = function (separator) {

};

MyArray.prototype.toString = function () {

};

MyArray.prototype.map = function (fn) {

};

MyArray.prototype.filter = function (fn) {

};

MyArray.prototype.some = function (fn) {

};

MyArray.prototype.every = function (fn) {

};

MyArray.prototype.fill = function (value, start, end) {

};

MyArray.prototype.reverse = function () {

};

MyArray.prototype.shift = function () {

};

MyArray.prototype.unshift = function (element) {

};

MyArray.prototype.slice = function (start, end) {

};

MyArray.prototype.splice = function (start, deleteCount) {

};