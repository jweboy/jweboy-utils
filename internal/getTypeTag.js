function getTypeTag(value) {
	const toString = Object.prototype.toString;

	if(value == null) {
		return value === null ? '[object Null]' : '[object Undefined]';
	}

	return toString.call(value);

}

export default getTypeTag;