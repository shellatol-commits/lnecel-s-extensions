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
                "id": "projectCounters",
                "name": "Project Counters",
                "color1": "#402065",
                "blocks": [{
                    "opcode": "block_9617127088aa88e3",
                    "text": "project counter",
                    "blockType": "reporter",
                    "arguments": {}
                }, {
                    "opcode": "block_31bd87c7c701e6da",
                    "text": "project counter > [0ef8f90fcff62f41]",
                    "blockType": "Boolean",
                    "arguments": {
                        "0ef8f90fcff62f41": {
                            "type": "number"
                        }
                    }
                }]
            }
        }
        async block_9617127088aa88e3(args) {
            return (ExtForge.Variables.get("Counter"))
        }
        async block_31bd87c7c701e6da(args) {
            return ((ExtForge.Variables.get("Counter") >
                (1)))
        }
    }

    let extension = new Extension();
    // code compiled from extforge
    Scratch.vm.on('PROJECT_RUN_START', (async () => {
        ExtForge.Variables.set("Counter", Scratch.Cast.toNumber((0)))
        while ((Scratch.vm.runtime.threads.length > 0)) {
            await new Promise(resolve => setTimeout(() => resolve(), (0) * 1000));
            ExtForge.Variables.set("Counter", (ExtForge.Variables.get("Counter") +
                (1)))
        };
    }));
    (async () => {
        ExtForge.Variables.set("Counter", Scratch.Cast.toNumber((0)))
    })();

    Scratch.extensions.register(extension);
})(Scratch);
