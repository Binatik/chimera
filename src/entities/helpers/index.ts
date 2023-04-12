export function exhaustivenessCheck<T>(_unused: T): never {
	throw new Error('Exhaustiveness failure! This should never happen')
}
