import { Vec2, Vec3 } from "@leodeslf/vec.js";

class Worley {
	#metricName;
	#class;
	#function;

	/**
	 * @param {Vec2[]|Vec3[]} spots
	 * @param {'2d'|'3d'} [dimentionName]
	 * @param {'euclidean'|'manhattan'|'chebyshev'|'minkowski'} [metricName]
	 */
	constructor(spots, dimentionName, metricName) {
		this.#metricName = metricName;
		this.dimention = dimentionName;
		this.spots = spots;
	}

	/**
	 * @param {'2d'|'3d'} dimentionName
	 */
	set dimention(dimentionName) {
		switch (dimentionName) {
			case '2d': this.#class = Vec2; break;
			case '3d': this.#class = Vec3; break;
			default: this.#class = Vec2; break;
		}
		this.metric = this.#metricName;
	}

	/**
	 * @param {'euclidean'|'manhattan'|'chebyshev'|'minkowski'} metricName
	 */
	set metric(metricName) {
		this.#metricName = metricName;
		switch (metricName) {
			case 'euclidean': this.#function = this.#class.distance; break;
			case 'chebyshev': this.#function = this.#class.distanceChebyshev; break;
			case 'manhattan': this.#function = this.#class.distanceManhattan; break;
			case 'minkowski': this.#function = this.#class.distanceMinkowski; break;
			default: this.#function = this.#class.distance; break;
		}
	}

	/**
	 * Returns the distance from the first & second closest spot to the position.
	 * @param {Vec2} position Current position.
	 * @param {number} [e = 3] Minkowski exponent.
	 * @returns {number[]}
	 */
	nd(position, e = 3) {
		let stDistance = Infinity;
		let ndDistance = Infinity;
		for (let i = 0; i < this.spots.length; i++) {
			let distance = this.#function(position, this.spots[i], e);
			if (distance < stDistance) {
				[ndDistance, stDistance] = [stDistance, distance];
			} else if (distance < ndDistance) {
				ndDistance = distance;
			}
		}
		return [stDistance, ndDistance];
	}

	/**
	 * Returns the distance from the first closest spot to the position.
	 * @param {Vec2} position Current position.
	 * @param {number} [e = 3] Minkowski exponent.
	 * @returns {number}
	 */
	st(position, e = 3) {
		let stDistance = Infinity;
		for (let i = 0; i < this.spots.length; i++) {
			let distance = this.#function(position, this.spots[i], e);
			if (distance < stDistance) stDistance = distance;
		}
		return stDistance;
	}
}

export default Worley;
