/*
   Created with ExtForge
   https://jwklong.github.io/extforge
*/
(async function(Scratch) {
    const variables = {};


    if (!Scratch.extensions.unsandboxed) {
        alert("This extension needs to be unsandboxed to run!")
        return
    }

    const ExtForge = {
        Broadcasts: new function() {
            this.raw_ = {};
            this.register = (name, blocks) => {
                this.raw_[name] = blocks;
            };
            this.execute = async (name) => {
                if (this.raw_[name]) {
                    await this.raw_[name]();
                };
            };
        },

        Variables: new function() {
            this.raw_ = {};
            this.set = (name, value) => {
                this.raw_[name] = value;
            };
            this.get = (name) => {
                return this.raw_[name] ?? null;
            }
        },

        Vector: class {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }

            static from(v) {
                if (v instanceof ExtForge.Vector) return v
                if (v instanceof Array) return new ExtForge.Vector(Number(v[0]), Number(v[1]))
                if (v instanceof Object) return new ExtForge.Vector(Number(v.x), Number(v.y))
                return new ExtForge.Vector()
            }

            add(v) {
                return new Vector(this.x + v.x, this.y + v.y);
            }

            set(x, y) {
                return new Vector(x ?? this.x, y ?? this.y)
            }
        },

        Utils: {
            setList: (list, index, value) => {
                [...list][index] = value;
                return list;
            },
            lists_foreach: {
                index: [0],
                value: [null],
                depth: 0
            },
            countString: (x, y) => {
                return y.length == 0 ? 0 : x.split(y).length - 1
            }
        }
    }

    class Extension {
        getInfo() {
            return {
                "id": "ideplus",
                "name": "IDE+",
                "color1": "#4a90e2",
                "color2": "#214e85",
                "color3": "#1b3f6d",
                    "blocks": [{
                    "opcode": "block_d96667081543112b",
                    "text": "random",
                    "blockType": "reporter",
                    "arguments": {}
                }, {
                    "opcode": "block_ee73c2114266fe84",
                    "text": "run on console [26657b9eef8e1492]",
                    "blockType": "command",
                    "arguments": {
                        "26657b9eef8e1492": {
                            "type": "string",
                            "defaultValue": "alert(\"Hello!\")"
                        }
                    }
                }, {
                    "opcode": "block_d01628a30aa9b279",
                    "text": "get full date",
                    "blockType": "reporter",
                    "arguments": {}
                }, {
                    "opcode": "block_843faaac2d45c062",
                    "text": "open link on new tab [1d9379e3bbdb3822]",
                    "blockType": "command",
                    "arguments": {
                        "1d9379e3bbdb3822": {
                            "type": "string",
                            "defaultValue": "https://example.com"
                        }
                    }
                }, {
                    "opcode": "block_13b1fe1ca2f9773f",
                    "text": "user details",
                    "blockType": "reporter",
                    "arguments": {}
                }, {
                    "opcode": "block_bde6a2b72dfbdde1",
                    "text": "invert [cc9545a057363304]",
                    "blockType": "reporter",
                    "arguments": {
                        "cc9545a057363304": {
                            "type": "string",
                            "defaultValue": "Hello"
                        }
                    }
                }, {
                    "opcode": "block_e374ae48b2347da4",
                    "text": "pi",
                    "blockType": "reporter",
                    "arguments": {}
                }, {
                    "opcode": "block_ee2c680e46dd9c07",
                    "text": "change current site to url [fc4ac8a5f5933980]",
                    "blockType": "command",
                    "arguments": {
                        "fc4ac8a5f5933980": {
                            "type": "string",
                            "defaultValue": "https://example.com"
                        }
                    }
                }]
            }
        }
        async block_d96667081543112b(args) {
            return (eval(("Math.random()")))
        }
        async block_ee73c2114266fe84(args) {
            eval(args["26657b9eef8e1492"])
        }
        async block_d01628a30aa9b279(args) {
            return (eval(("Date()")))
        }
        async block_843faaac2d45c062(args) {
            eval(String.prototype.concat(String("window.open('"), args["1d9379e3bbdb3822"], String("', '_blank');")))
        }
        async block_13b1fe1ca2f9773f(args) {
            return (eval(("navigator.userAgent")))
        }
        async block_bde6a2b72dfbdde1(args) {
            return (eval(String.prototype.concat(String("\""), args["cc9545a057363304"], String("\".split('').reverse().join('')"))))
        }
        async block_e374ae48b2347da4(args) {
            return (Math.PI)
        }
        async block_ee2c680e46dd9c07(args) {
            eval(String.prototype.concat(String("window.location.href = \""), args["fc4ac8a5f5933980"], String("\"")))
        }
    }

    let extension = new Extension();
    // code compiled from extforge

    Scratch.extensions.register(extension);
})(Scratch);
