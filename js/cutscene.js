addLayer("c", { //DEPRECATED
    name: "Cutscene", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    startData() {
        return {
            unlocked: true,
            currentscene: new Decimal(0),
        }
    },
    color: "blue",
    tooltip: "Cutscene", // Row the layer is in on the tree (0 is the first row)
    // Optional, lets you format the tab yourself by listing components. You can create your own components in v.js.
    // This is also non minimal, a Clickable!
    hotkeys: [
    ],
    clickables: {
        11: {
            title() { return "<h2> Next </h2>" },
            canClick() { return player.cutscene.neq(0) },
            onClick() {
                player.c.currentscene = player.c.currentscene.add(1)
            },
        },
        12: {
            title() { return "<h2> Previous </h2>" },
            canClick() { return player.c.currentscene.neq(0) },
            onClick() {
                player.c.currentscene = player.c.currentscene.sub(1)
            },
        },
    },
    update(delta) {
        if (player.c.currentscene.eq(47) && player.cutscene.eq(1)) {
            player.cutscene = new Decimal(0)
        }
        if (player.cutscene.neq(0) && player.c.currentscene.gte(0)) {
            document.onkeydown = function (e) {
                switch (e.keyCode) {
                    case 37:
                        player.c.currentscene = player.c.currentscene.sub(1)
                        break;
                    case 39:
                        player.c.currentscene = player.c.currentscene.add(1)
                        break;
                }
            };
        }
        if (hasUpgrade("i", 17) && player.c.currentscene.eq(47)) {
            player.cutscene = new Decimal(2)
        }
        if (hasUpgrade("i", 36) && player.c.currentscene.eq(57)) {
            player.cutscene = new Decimal(3)
        }
    },

    tabFormat: {
        "Cutscenes": {
            buttonStyle() { return { 'color': 'blue' } },
            content:
                [
                    ["raw-html", function () { return player.c.currentscene.gte(1) && player.c.currentscene.lt(6) ? "<h2> Since the beginning of time, </h2>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(2) && player.c.currentscene.lt(6) ? "<h2> The multiverse has lived in peace, without conflict or war. </h2>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(3) && player.c.currentscene.lt(6) ? "<h2> All entities lived in harmony. </h2>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(4) && player.c.currentscene.lt(6) ? "<h2> But one day, an unknown entity split the multiverse into 6 realms: </h2>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(4) && player.c.currentscene.lt(6) ? "<img src='resources/cutscene1.png'</img>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(5) && player.c.currentscene.lt(6) ? "<h2> The creator realm, the higher plane of existence, the death realm, </h2>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(5) && player.c.currentscene.lt(6) ? "<h2> the dimensional realm, the backrooms, and the void. </h2>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(6) && player.c.currentscene.lt(9) ? "<h2> The split caused confusion among the multiverse.</h2>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(7) && player.c.currentscene.lt(9) ? "<h2> Many people lost their lives. </h2>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(8) && player.c.currentscene.lt(9) ? "<img src='resources/cutscene2.png'</img>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(9) && player.c.currentscene.lt(11) ? "<h2>Over time, many new life evolved in these realms.</h2>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(10) && player.c.currentscene.lt(11) ? "<img src='resources/cutscene3.png'</img>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(11) && player.c.currentscene.lt(15) ? "<h2>However, the creator realm was the most interesting realm.</h2>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(12) && player.c.currentscene.lt(15) ? "<h2>No supernatural entities live there, only humans.</h2>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(13) && player.c.currentscene.lt(15) ? "<h2>Most humans in the creator realm aren't aware of other realms' existence</h2>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(13) && player.c.currentscene.lt(15) ? "<img src='resources/cutscene4.png'</img>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(14) && player.c.currentscene.lt(15) ? "<h2>But humans can affect the other realms using their imagination.</h2>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(15) && player.c.currentscene.lt(18) ? "<h2>The other 5 realms started to form different beliefs.</h2>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(16) && player.c.currentscene.lt(18) ? "<h2>Eventually, a very long 5 way multiversal war begun.</h2>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(17) && player.c.currentscene.lt(18) ? "<img src='resources/cutscene5.png'</img>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(18) && player.c.currentscene.lt(22) ? "<h2>The higher plane of existence had won this war.</h2>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(19) && player.c.currentscene.lt(22) ? "<h2>They took control of the other 4 realms.</h2>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(20) && player.c.currentscene.lt(22) ? "<h2>They became the highest class of the multiverse." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(21) && player.c.currentscene.lt(22) ? "<img src='resources/cutscene6.png'</img>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(22) && player.c.currentscene.lt(24) ? "<h2>You live in the dimensional realm, which consists of many dimensions." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(23) && player.c.currentscene.lt(24) ? "<h2>You live here specifically." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(23) && player.c.currentscene.lt(24) ? "<img src='resources/cutscene7.png'</img>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(24) && player.c.currentscene.lt(27) ? "<h2>You are a high school dropout that does nothing but watch tv and play games all day." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(25) && player.c.currentscene.lt(27) ? "<img src='resources/cutscene8.png'</img>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(26) && player.c.currentscene.lt(27) ? "<h2>You were playing games until someone came knocking on your door." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(27) && player.c.currentscene.lt(35) ? "<img src='resources/cutscene9.png'</img>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(28) && player.c.currentscene.lt(35) ? "<h2>Nah. Bro looked like he came staight out of BFDI." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(29) && player.c.currentscene.lt(35) ? "<h2>The quadrilateral introduced himself." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(30) && player.c.currentscene.lt(35) ? "<h2>Red Diamond: Hi. I am red diamond." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(31) && player.c.currentscene.lt(35) ? "<h2>Red Diamond: I come from the higher plane of existence." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(32) && player.c.currentscene.lt(35) ? "<h2>You: Very nice costume." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(33) && player.c.currentscene.lt(35) ? "<h2>You take another look and realize it's actually some diamond dude." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(33) && player.c.currentscene.lt(35) ? "<h2>You thought you took shrooms but you actually didn't." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(34) && player.c.currentscene.lt(35) ? "<h2>Red Diamond: I believe you are THE CHOSEN ONE for the ANCIENT PROPHECY." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(35) && player.c.currentscene.lt(40) ? "<h2>You: What prophecy?" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(36) && player.c.currentscene.lt(40) ? "<h2>Red Diamond: A loyal hero will REUNITE THE REALMS." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(36) && player.c.currentscene.lt(40) ? "<img src='resources/cutscene10.png'</img>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(37) && player.c.currentscene.lt(40) ? "<h2>Red Diamond: I believe it will be you." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(38) && player.c.currentscene.lt(40) ? "<h2>Red Diamond proceeded bend the reality around you." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(39) && player.c.currentscene.lt(40) ? "<h2>You: What the hell are you doing?!" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(40) && player.c.currentscene.lt(45) ? "<img src='resources/cutscene11.png'</img>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(41) && player.c.currentscene.lt(45) ? "<h2>He explained everything about the realms, the war, and the split." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(42) && player.c.currentscene.lt(45) ? "<h2>You eventually gain undestanding about what he's saying." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(43) && player.c.currentscene.lt(45) ? "<h2>Red Diamond: Before you become a god, you must start small. Start with the TREES." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(44) && player.c.currentscene.lt(45) ? "<h2>Everything goes away and you wake up on your floor. You check your phone." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(45) && player.c.currentscene.lt(47) ? "<img src='resources/cutscene12.png'</img>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(46) && player.c.currentscene.lt(47) ? "<h1>YOU KNOW WHAT TO DO NOW" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(47) && player.c.currentscene.lt(51) && player.cutscene.gte(2) ? "<h2>When you woke up, your reality got shifted." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(48) && player.c.currentscene.lt(51) && player.cutscene.gte(2) ? "<h2>You were confused until you remember Red Diamond can do that." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(49) && player.c.currentscene.lt(51) && player.cutscene.gte(2) ? "<h2>You saw him floating in the distance." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(50) && player.c.currentscene.lt(51) && player.cutscene.gte(2) ? "<img src='resources/cutscene13.png'</img>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(51) && player.c.currentscene.lt(57) && player.cutscene.gte(2) ? "<h2>Red Diamond: You are doing well with your trees. I want to award you." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(52) && player.c.currentscene.lt(57) && player.cutscene.gte(2) ? "<h2>Red Diamond: You will get your very own laptop." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(53) && player.c.currentscene.lt(57) && player.cutscene.gte(2) ? "<img src='resources/cutscene14.png'</img>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(54) && player.c.currentscene.lt(57) && player.cutscene.gte(2) ? "<h2>Red Diamond: It is made in the higher plane of existence." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(55) && player.c.currentscene.lt(57) && player.cutscene.gte(2) ? "<h2>You: Uh, thanks?" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(56) && player.c.currentscene.lt(57) && player.cutscene.gte(2) ? "<h2>You took the laptop and reality converted back." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(58) && player.c.currentscene.lt(64) && player.cutscene.gte(3) ? "<h2>Someone knocked on your door." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(59) && player.c.currentscene.lt(64) && player.cutscene.gte(3) ? "<img src='resources/cutscene15.png'</img>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(60) && player.c.currentscene.lt(64) && player.cutscene.gte(3) ? "<h2>You weren't suprised at the being's presence. You have seen a lot." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(61) && player.c.currentscene.lt(64) && player.cutscene.gte(3) ? "<h2>Acamaeda: Hello. My name is Acamaeda. Red Diamond sent me here." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(62) && player.c.currentscene.lt(64) && player.cutscene.gte(3) ? "<h2>You: You look like those modding tree games I've been playing." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(63) && player.c.currentscene.lt(64) && player.cutscene.gte(3) ? "<h2>Acamaeda: Well, I made the engine used to create those games!" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(64) && player.c.currentscene.lt(69) && player.cutscene.gte(3) ? "<h2>Acamaeda handed you a USB hard drive." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(65) && player.c.currentscene.lt(69) && player.cutscene.gte(3) ? "<img src='resources/cutscene16.png'</img>" : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(66) && player.c.currentscene.lt(69) && player.cutscene.gte(3) ? "<h2>Acamaeda: Take this. You can make your own mods if you learn to code." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(67) && player.c.currentscene.lt(69) && player.cutscene.gte(3) ? "<h2>The hard drive was glowing with JACORBIAN ENERGY." : "" }],
                    ["raw-html", function () { return player.c.currentscene.gte(68) && player.c.currentscene.lt(69) && player.cutscene.gte(3) ? "<h2>Acamaeda left the room. There's still a lot left to do." : "" }],
                    ["row", [["clickable", 12], ["clickable", 11]]],
                ]               
    },
    },
    layerShown() { return player.cutscene.eq(1) }
})
