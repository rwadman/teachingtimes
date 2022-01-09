const colors = [
    [ // gray
        "#f6f6f6",
        "#efefef",
        "#d9d9d9",
        "#bfbfbf",
        "#a6a6a6",
        "#8c8c8c",
        "#737373",
        //"#595959",
        "#404040",
        "#262626",
        "#0d0d0d"
    ],
    [ // blue
        "#e7eefe",
        "#bbcdf6",
        "#95ace9",
        "#7c90cf",
        "#5f71b9",
        "#4658a0",
        "#303e83",
        "#16216a",
        "#090f44",
        "#010318"
    ],
    [ // green
        "#e8fdeb",
        "#bef3c6",
        "#9be4a2",
        "#84c789",
        "#69af6c",
        "#509652",
        "#387b39",
        "#1b641d",
        "#0c410d",
        "#021703"
    ],
    [ // yellow
        "#ffffe5",
        "#ffffb3",
        "#feff80",
        "#f2f358",
        "#e6e731",
        "#ccce18",
        "#a0a70c",
        "#768000",
        "#444d00",
        "#161a00"
    ],
    [ // orange

        "#fff8e5",
        "#ffe8b3",
        "#ffd480",
        "#f4ba58",
        "#e99f30",
        "#cf8516",
        "#a7640b",
        "#804400",
        "#4d2600",
        "#1a0c00"
    ],
    [ // red
        "#ffede5",
        "#ffc6b3",
        "#fe9c81",
        "#ec795f",
        "#df533a",
        "#c53920",
        "#a02413",
        "#7e0c01",
        "#4d0500",
        "#1a0100"
    ],
    [ // violet
        "#fbe9fc",
        "#efc1f0",
        "#dda0df",
        "#bf8bc1",
        "#a472a7",
        "#8b588d",
        "#703e74",
        "#58205f",
        "#370f3e",
        "#130316"
    ],
    [ // cyan
        "#e5feff",
        "#b3faff",
        "#80f2ff",
        "#5ddcef",
        "#37c6e2",
        "#1dacc8",
        "#1085a2",
        "#006280",
        "#00384d",
        "#00121a"
    ],
    [ // snot
        "#f3fde7",
        "#d8f5bd",
        "#bbe698",
        "#9fcb80",
        "#83b465",
        "#699a4b",
        "#4e7f34",
        "#316719",
        "#1a420a",
        "#071802"
    ],
    [//lightning
        "#fffce5",
        "#fff3b3",
        "#ffe780",
        "#f7d354",
        "#edbb2c",
        "#d3a112",
        "#ab7b08",
        "#805600",
        "#4d3100",
        "#190f00"
    ]
]
const backgroundLight = (idx: number): string => colors[idx % colors.length][1]
const borderColorLight = (idx: number): string => colors[idx % colors.length][2]

const background = (idx: number): string => colors[idx % colors.length][2]
const borderColor = (idx: number): string => colors[idx % colors.length][3]

export { colors, background, borderColor, backgroundLight, borderColorLight }