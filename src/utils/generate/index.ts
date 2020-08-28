import genImage from './img'
import { ImgasOptions } from './gen.d'

class Gen {
    constructor() { }

    run(id: number, options: ImgasOptions) {
        return new Node(id, options).gen()
    }
}

class Node {
    _id: number
    _options: ImgasOptions

    constructor(id: number, options: ImgasOptions) {
        this._id = id
        this._options = options
    }

    gen() {
        if (this._id === 1) {
            return genImage(this._options)
        }
    }
}

export default Gen