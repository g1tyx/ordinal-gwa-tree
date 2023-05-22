/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Base Shift": "基础转移",
    "gwarkup": "gwarkup",
    "gwarkup points": "gwarkup 点数",
    "Markup for": "标记为",
    "Autoclicker": "自动点击器",
    "Automatically buy factors.": "自动购买因子。",
    "Automatically increase the ordinal once per second.": "每秒自动增加序数一次。",
    "Automatically max all autobuyers and unlock the quadrupler.": "自动最大化所有自动购买者并解锁四倍。",
    "boosters": "助推器",
    "Boosters": "助推器",
    "boosters.": "助推器。",
    "C1's base is 9 -> 8": "C1 的基数是 9 -> 8",
    "Challenges": "挑战",
    "Completed": "已完成",
    "Dynamic Factor": "动态因子",
    "Dynamic factor divides instead of multiplies. The 5 booster upgrade is always active.": "动态因子除法而不是乘法。 5 助推器升级始终处于活动状态。",
    "Dynamic factor increases 10x faster and caps 10x later.": "动态因子增加速度快 10 倍，上限增加 10 倍。",
    "Dynamic gain and cap x10": "动态增益和上限 x10",
    "Each challenge can be completed up to 3 times, at which point a star will appear. Trying to enter a challenge a 4th time will kick you out of the challenge.": "每个挑战最多可以完成 3 次，此时会出现一颗星星。 尝试第 4 次进入挑战会将您踢出挑战。",
    "Factor costs ^10 and the 3 booster upgrade is disabled. The base in this challenge is the base outside of the challenge.": "因子成本 ^10 并且 3 助推器升级被禁用。 这个挑战中的基地是挑战之外的基地。",
    "Factor gwa": "因子gwa",
    "factors": "因子",
    "Factors 1-6 don't increase based on GP.": "因子 1-6 不会根据 GP 增加。",
    "gwadrupler": "gwadrupler",
    "Incrementy gain x2": "增量增益 x2",
    "Max autobuyers": "最大自动购买器",
    "Multiply factor effects by factor number+1": "将因子效应乘以因子数+1",
    "Multiply GP and autoclicker speed by 2^(total challenge completions) per completion": "每次完成将 GP 和自动点击器速度乘以 2^（总挑战完成数）",
    "Multiply gwarkup point gain by 1e10.": "将 gwarkup 点数增益乘以 1e10。",
    "Perform a factor boost for": "执行因子提升",
    "Quadruple autobuyer speed.": "四倍的自动购买速度。",
    "Respec upgrades": "重洗升级",
    "Reward:": "奖励：",
    "Shift-Click to Toggle Tooltips: ON": "Shift-单击以切换工具提示：开",
    "The base is 4 and the only factors that work are 1-4.": "基数是 4，唯一起作用的因子是 1-4。",
    "The base is 8 and divide EVERY factor by 888, including the gwadrupler.": "基数是 8，将每个因子除以 888，包括 gwadrupler。",
    "The gwa grows in power over time. Currently: /100.00": "随着时间的推移，gwa 的力量会增长。 当前：/100.00",
    "The ordinal base in challenges is 5 unless otherwise specified. Entering a challenge will perform a booster reset. You cannot gain boosters or base shift inside a challenge.": "除非另有说明，否则挑战中的序数基数为 5。 进入挑战将执行助推器重置。 您无法在挑战中获得助推器或基础转变。",
    "The ordinal base is 9.": "序数基数为 9。",
    "The ordinal value boosts autoclickers": "序数值提升了自动点击器",
    "There is exponentially rising decrementy that slows down your autobuyers. You can only manually increment up to an ordinal of gwa^2+1. GP is square rooted and you are stuck in C6": "递减量呈指数级增长，这会减慢您的 自动购买器 的速度。 您只能手动递增到 gwa^2+1 的序数。 GP 是平方根的，你被困在 C6",
    "Toggle Music: Mute": "切换音乐：静音",
    "Total boosters multiply autoclicker speed": "助推器总数乘以自动点击器的速度",
    "You can only buy 1 autoclicker and its speed is square rooted.": "您只能购买 1 个自动点击器，它的速度是平方根的。",
    "Hepteract factor 7's effect": "7倍 因子 7 的效果",
    "Hierarchies": "阶层",
    "Sluggish Milestones": "缓慢的里程碑",
    "Square": "平方",
    "The Least Creative Upgrade Name Ever": "有史以来最没有创意的升级名称",
    "Total Charge boosts Psi ordinal gain": "总充能提升 Psi 序数增益",
    "Unlock Overcharge (next update)": "解锁超载（下次更新）",
    "Upgrades": "升级",
    "cardinals": "基数",
    "cardinals.": "基数。",
    "Collapse for": "坍缩",
    "Collapse once": "坍缩一次",
    "Distribute Cardinals": "分发红雀",
    "Gain 0.1% of cardinals on reset per second": "每秒获得 0.1% 的基数重置",
    "Keep all features unlocked and the first 5 gwarkup milestones": "保留所有功能解锁和前 5 个 gwarkup 里程碑",
    "Keep milestone 6, and factor boosts don't reset gwarkup": "保留里程碑 6，因子提升不会重置 gwarkup",
    "Requires: BHOx3.39e29 psi ordinal": "要求：BHOx3.39e29 psi 序数",
    "'s base,": "的基数，",
    "ALL 11 ALBANIAS": "所有 11 个阿尔巴尼亚",
    "AutoBooster": "自动助推器",
    "Autobuy hierarchy buyables, unlock a new booster power effect, divide charge cost by e14, and multiply autobuyer speed by e100": "自动购买 阶层 可购买，解锁一个新的助推器 力量效果，除以充能成本 e14，并且乘以自动购买器速度 e100",
    "Boost FGH and SGH gain based on challenge completions.": "根据挑战完成情况提升 FGH 和 SGH 收益。",
    "Boost FGH and SGH gain based on factor boosts.": "基于因子提升提升 FGH 和 SGH 增益。",
    "Boost FGH effect based on SGH ordinal.": "基于 SGH 序数提升 FGH 效果。",
    "Boost SGH effect based on FGH ordinal.": "基于 FGH 序数提升 SGH 效果。",
    "boosted boosters boosts boost boosts": "助推器 助推器 助推器 助推器",
    "Booster power gain is multiplied by charge": "助推器力量增益乘以充能的平方",
    "Both Hierarchies are Maximized instantly. Their Successor gains are based on Incrementy Amount and Psi Ordinal respectively.": "两个阶层都立即最大化。 他们的继任者收益分别基于增量和 Psi 序数。",
    "C1's base is 7 and gain 10x incrementy": "C1 的基数为 7，增量为 10 倍",
    "C5-8 completions multiply incrementy gain": "C5-8 完成乘增量增益",
    "Charge": "充能",
    "Double dynamic cap.": "双动态上限。",
    "Double dynamic gain.": "双动态增益。",
    "Double incrementy gain.": "双增量增益。",
    "Double psi ordinal gain.": "双倍 psi 序数增益。",
    "Dynamic Doubler": "动态倍增器",
    "Dynamic gain and cap x1000": "动态增益和上限 x1000",
    "Dynamic Raising": "动态提升",
    "Factor 7 ^8": "因子 7 ^8",
    "Factor 8?": "因子 8？",
    "Factors 1-6 ^4": "因子 1-6 ^4",
    "Factors 1-7 are multiplied by the ordinal base-4": "因子 1-7 乘以序数 base-4",
    "FGH ordinal": "FGH序数",
    "Gain 1 charge.": "获得 1 充能。",
    "Gain 1e10x more FGH and SGH": "FGH 和 SGH 增加 1e10 倍",
    "Gain 2 free Psi Doublers": "获得 2 个免费 Psi 加倍器",
    "Gain a free dynamic doubler.": "获得免费的动态倍增器。",
    "Gain free dynamic doublers based on SGH and SGH multiplies factor 5": "基于 SGH 和 SGH 乘以因子 5 的无增益动态倍频器",
    "Gain free incrementy doublers based on FGH and FGH multiplies factor 6": "基于 FGH 和 FGH 乘以因子 6 的增益自由增量倍增器",
    "Hierarchies grow faster based on factor boosts": "基于因素的提升，阶层增长得更快",
    "Incrementy": "增量",
    "Incrementy Doubler": "增量倍增器",
    "is improved": "得到改善",
    "Multiply factor effects by (factor number+1)!": "将因子效应乘以（因子数+1）！",
    "Overflow": "溢出",
    "Perform a (scaled) factor boost for": "执行（缩放的）因子提升",
    "Psi Doubler": "压力倍增器",
    "Psi upgrade": "Psi升级",
    "raising": "提高",
    "Respec Charged upgrades": "重洗 充能 升级",
    "SGH effect is better": "SGH效果更好",
    "SGH ordinal": "SGH序数",
    "SM70": "SM70",
    "The ordinal base boosts incrementy": "序数基增加增量",
    "those 12 bees:": "那12只蜜蜂：",
    "Unlock 3 more charge upgrades": "解锁另外 3 个充电升级",
    "Unlock charge (subtab of Hierarchies)": "解锁费用（阶层的子选项卡）",
    "Unlock Hierarchies, and start with 1 autoclicker": "解锁阶层，并从 1 个自动点击器开始",
    "Unlock overflow, gain 100% of GP gain on reset per second, and base shifts no longer reset any upgrades": "解锁溢出，每秒重置时获得 100% 的 GP 增益，并且基本转移不再重置任何升级",
    "Your FGH ordinal is ω": "您的 FGH 序数是 ω",
    "Your SGH ordinal is ω": "您的 SGH 序数是 ω",
    "The Lightening": "闪电",
    "Unlock Light Mode, and square": "解锁闪电模式，和平方",
    "Square dynamic effect, and dynamic factor increases 10x faster and caps 10x later, but Incrementy upgrade 6 ^0.6.": "平方动态效果，动态因子增加速度 x10，上限增加10x，但增量升级6 ^0.6。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "i": "i",
    "Alephs": "Alephs",
    "B": "B",
    "C": "C",
    "G": "G",
    "H": "H",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Increase the ordinal base by ": "提高 序数 基数 ",
    "Increase the ordinal by 1, then maximize it": "将序数增加 1，然后最大化它",
    "Toggle Music: ": "切换音乐：",
    "Shift-Click to Toggle Tooltips: ": "Shift+点击 切换工具提示: ",
    "Boost your autoclickers based on unspent GP. Currently: *": "提升你的 自动点击器 基于 未使用的 GP。当前：*",
    "Currently: ": "目前：",
    "gwarkup point gain base ": "gwarkup 点增益基数 ",
    "Dynamic factor multiplies incrementy gain. Currently: *": "动态因子乘以增量增益。 当前： *",
    "Incrementy boosts factor 3 after exponents. Currently: *": "增量在指数之后提升因子 3。 当前： *",
    "Incrementy multiplies autoclicker speed. Currently: *": "增量乘以自动点击器的速度。 现在： *",
    "Incrementy Gain ^": "增量增益 ^",
    "Unspent cardinals boost cardinal gain. Currently: *": "未花费的基数提升基数增益。 现在： *",
    "Base Cardinal gain: ": "基本基数增益：",
    "'s cost to the ^": "的成本到 ^",
    "Factor 2 boosts psi ordinal gain at a reduced rate. Currently: *": "因子 2 以较低的速率提高 psi 序数增益。 现在： *",
    "Incrementy gain x": "增量增益 x",
    "Psi Doubler's base is ": "Psi 加倍器 的基数是",
    "The ordinal base is ": "序数 基数是 ",
    "Multiply autobuyer speed by 12. Currently: *": "将自动购买速度乘以 12。目前：*",
    "Multiply factor 2 by 11. Currently: *": "将因子 2 乘以 11。目前：*",
    "incrementy gain booster #": "增量增益助推器 #",
    "to the ^": "到 ^",
    "The gwa grows in power over time. Currently: *": "随着时间的推移，gwa 的力量会增长。 现在： *",
    "The ordinal base is lowered by ": "序数基数降低了 ",
    "Boost your autoclickers based on autoclickers bought. Currently: *": "根据购买的自动点击器提升您的自动点击器。 当前：*",
    "Autobuyer speed is multiplied by ": "自动购买器 速度乘以 ",
    "Automatically buy factors and autobuyer scaling is ": "自动购买因素和自动购买者缩放比例为 ",
    "Automatically max all autobuyers and quadrupler effect ^": "自动最大化所有自动购买者和四倍效应 ^",
    "Challenge completions boost psi ordinal gain. Currently: *": "完成挑战会提升 psi 序数增益。 现在： *",
    "lowered by ": "降低了 ",
    "Unlock Overcharge and GP raises FGH gain to a power. Currently: ": "解锁 过载 和 GP 将 FGH 增益提高到一个幂。 现在：",
    "Per factor boost multiply dynamic cap by 1.5. Currently: *": "每个因子提升将动态上限乘以 1.5。 目前：*",
    "Total boosters multiplies Factor 1 before exponents. Currently: *": "总助推器在指数之前乘以因子 1。 目前：*",
    "Boost your autoclickers based on autoclickers bought. Currently: *": "根据购买的自动点击器提升您的自动点击器。 目前：*",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    " is required to Markup...": " 达到后才能进行标记...",
    "[ON]": "[开]",
    "[OFF]": "[关]",
    " [POWER]": " [力量]",
    " [POWER] TWO": " [力量] 2",
    " TWO TWO": " 2 2",
    " TWO": " 2",
    "/sec)": "/秒)",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)\=([\d\.]+)$/,
    /^\(([\d\.]+)\)\=([\d\.,]+)$/,
    /^\(([\d\.]+)\)\=([\d\.]+)e([\d\.,]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^奖励(.+)$/,
    /^目标(.+)$/,
    /^挑战(.+)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^CUP([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^([\d\.,]+)\+ω$/,
    /^\+ω([\d\.,]+)\+([\d\.,]+)$/,
    /^x([\d\.,]+)$/,
    /^ω([\d\.,]+)\+([\d\.,]+)$/,
    /^([\d\.,]+)\+([\d\.,]+)$/,
    /^([\d\.,]+)\+ω([\d\.,]+)$/,
    /^([\d\.,]+)\+ω([\d\.,]+)\+([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^\(([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^You have a total of (.+) charges.$/, '你总共有 $1 充能。'],
    [/^You have (.+) charge remaining.$/, '您还剩 $1 充能。'],
    [/^You have (.+) excess boosters, producing (.+) booster power\/s$/, '你有 $1 多余的助推器，每秒产生 $2 助推器力量'],
    [/^You have (.+) booster power,$/, '你有 $1 助推器力量，'],
    [/^Booster Upgrade (.+) boosts Hierarchies while Supercharged$/, '助推器升级 $1 在超级充能时提升层次体系'],
    [/^You have (.+) Excess Boosters, producing$/, '你有 $1 过剩的助推器，正在生产'],
    [/^You have (.+) Excess Charge, producing$/, '你有 $1 过剩的充能，正在生产'],
    [/^Incrementy Upgrade (.+) is Improved$/, '增量升级 $1 已改进'],
    [/^Your Dynamic Factor is (.+). It caps at (.+)$/, '您的动态因子是 $1。 上限为 $2'],
    [/^Your (.+) Successor Autoclickers click the Successor button (.+) times\/second$/, '您的 $1 个继任者自动点击器每秒点击继任者按钮 $2 次数'],
    [/^You have (.+) Ordinal Powers$/, '你有 $1 序数力量'],
    [/^You have (.+) Incrementy (.+), multiplying AutoBuyer speed by (.+)$/, '您有 $1 增量 $2，将 自动购买者 速度乘以 $3'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Booster power's 3rd effect softcap starts (.+) later$/, '助推器力量 的 第3效果软上限 在 $1 后开始'],
    [/^Your psi ordinal is (.+). \(\+(.+)\/s\)$/, '你的 psi 序数 是 $1。（\+$2\/秒）'],
    [/^You have (.+) incrementy. \(\+(.+)\/s\)$/, '你有 $1 增量。（\+$2\/秒）'],
    [/^Your (.+) Maximize Autoclickers click the Maximize button (.+) times\/second$/, '您的 $1 个最大化自动点击器每秒点击最大化按钮 $2 次'],
    [/^Markup and gain (.+) Ordinal Powers (.+)$/, '标记并获得 $1 序数力量 $2'],
    [/^Costs (.+) Ordinal Powers$/, '费用 $1 序数力量'],
    [/^Your (.+) Maximize Autoclickers click the Maximize button 0 times\/second$/, '您的 0 个最大化自动点击器每秒点击最大化按钮 $2 次'],
    [/^It increases by (.+)\/s, and caps at (.+)$/, '它以 $1/秒 的速度增加，上限为 $2'],
    [/^Sacrifice (.+) Incrementy for (.+) Charge$/, '牺牲 $1 增量换取 $2 次充能'],
    [/^Reward: Dynamic Factor boosts Tier (.+) Automation at (.+) power$/, '奖励：动态因子以 $2 的效率提升 层级 $1 自动化'],
    [/^You have (.+) Boosters \((.+) total\)$/, '您有 $1 助推器（共 $2 次）'],
    [/^You have (.+) Charge \((.+) total\)$/, '您有 $1 充能（共 $2 次）'],
    [/^Your Max All AutoBuyer is clicking the Max All button (.+) times\/second, but only if you can\'t Factor Shift$/, '你的 最大全部自动购买器 每秒点击 最大全部 按钮 $1 次，但前提是你不能 因子转移'],
    [/^Your Markup AutoBuyer is clicking the Markup button (.+) times\/second, but only if you\'re past Ψ\(Ω\)$/, '您的标记自动购买器点击标记按钮 $1 次/秒，但前提是您超过了 Ψ(Ω)'],
    [/^Reward: Factor (.+) boosts Tier (.+) Automation at (.+) power$/, '奖励：因子 $1 以 $3 的力量提升 层级 $2 自动化'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.]+) Booster Power\/s$/, '$1 助推器力量\/秒'],
	[/^([\d\.]+) Overcharge\/s$/, '$1 过载\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
	[/^\(([\d\.]+)e([\d\.,]+)\/sec\)$/, '（$1e$2\/秒）'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^Ordinals ([\d\.]+)$/, '序数 $1'],
    [/^adding  ([\d\.]+) to$/, '增加 $1 到'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^: ([\d\.]+), multiplying autoclicker speed by ([\d\.]+)$/, '：$1，将 自动点击器速度 乘以 $2'],
    [/^: ([\d\.]+), multiplying booster power gain by ([\d\.]+)$/, '：$1，将 助推器力量 增益乘以 $2'],
    [/^: ([\d\.]+), multiplying incrementy gain by ([\d\.]+)$/, '：$1，将 增量 增益乘以 $2'],
    [/^: ([\d\.]+), multiplying psi ordinal gain by ([\d\.]+)$/, '：$1，将 psi 序数 增益乘以 $2'],
    [/^: ([\d\.]+), multiplying SGH gain by ([\d\.]+)$/, '：$1，将 SGH 增益乘以 $2'],
    [/^: ([\d\.]+), multiplying GP gain by ([\d\.]+)$/, '：$1，将 GP 增益乘以 $2'],
    [/^: ([\d\.]+), multiplying FGH gain by ([\d\.]+)$/, '：$1，将 FGH 增益乘以 $2'],
    [/^: ([\d\.]+), multiplying dynamic gain and cap by ([\d\.]+)$/, '：$1，将动态增益和上限乘以 $2'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.]+)e([\d\.,]+) Incrementy$/, '$1e$2 增量'],
    [/^([\d\.,]+)... \(([\d\.,]+)\), multiplying incrementy gain by (.+)$/, '$1... \($2\)，乘以增量增益 $3'],
    [/^([\d\.,]+)... \(([\d\.,]+)\), multiplying Factor ([\d\.,]+) \(pre-exponent\) by (.+)$/, '$1... ($2)，将因子 $3（前指数）乘以 $4'],
    [/^... \(([\d\.,]+)\), multiplying incrementy gain by (.+)$/, '... \($1\)，乘以增量增益 $2'],
    [/^... \(([\d\.,]+)\), multiplying Factor ([\d\.,]+) \(pre-exponent\) by (.+)$/, '... ($1)，将因子 $2（前指数）乘以 $3'],
    [/^([\d\.,]+) Boosters$/, '$1 助推器'],
    [/^([\d\.,]+) Incrementy$/, '$1 增量'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) boosters$/, '$1 助推器'],
    [/^([\d\.,]+) cardinals$/, '$1 基数'],
    [/^([\d\.,]+) factor boosts$/, '$1 因子提升'],
    [/^([\d\.,]+) googol incrementy$/, '$1 古戈尔 增量'],
    [/^Factor ([\d\.,]+) \^([\d\.,]+) \-\> \^([\d\.,]+)$/, '因子 $1 \^$2 \-\> \^$3'],
    [/^Factors ([\d\.,]+)\-([\d\.,]+) \^([\d\.,]+) \-\> \^([\d\.,]+)$/, '因子 $1\-$2 \^$3 \-\> \^$4'],
    [/^C([\d\.,]+)$/, 'C$1'],
    [/^Purchase Factor ([\d\.,]+)$/, '购买因子 $1'],
    [/^Purchase Incrementy Upgrade ([\d\.,]+)$/, '购买 增量 升级 $1'],
    [/^Reach a Dynamic Factor of ([\d\.,]+)$/, '达到动态因子 $1'],
    [/^Reach Base ([\d\.,]+)$/, '达到基数 $1'],
    [/^Factor ([\d\.,]+) \[([\d\.,]+)\] ([\d\.,]+)x$/, '因子 $1 \[$2\] $3'],
    [/^Factor ([\d\.,]+)$/, '因子 $1'],
    [/^Supercharge Booster Upgrade ([\d\.,]+)$/, '超级充能助推器升级 $1'],
    [/^Base ([\d\.,]+)$/, '基数 $1'],
    [/^Challenge ([\d\.,]+)$/, '挑战 $1'],
    [/^is ([\d\.,]+)$/, '是 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Goal: (.+) OP$/, '目标：$1 OP'],
    [/^Goal: ([\d\.]+)e([\d\.,]+)$/, '成本：$1e$2'],
    [/^Cost: (.+) gwarkup points$/, '成本：$1 gwarkup 点数'],
    [/^Cost: (.+) Charge$/, '成本：$1 充能'],
    [/^Cost: (.+) cardinals$/, '成本：$1 基数'],
    [/^Cost: (.+) incrementy$/, '成本：$1 增量'],
    [/^Cost: (.+) boosters$/, '成本：$1 助推器'],
    [/^Cost: (.+) FGH$/, '成本：$1 FGH'],
    [/^Cost: (.+) SGH$/, '成本：$1 SGH'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Cap: (.+)$/, '上限：$1'],
    [/^Cost: ω$/, '成本：ω'],
    [/^Cost: Infinity Ordinal Powers$/, '成本：无限 序数力量'],
    [/^Cost: (.+) Ordinal Powers$/, '成本：$1 序数力量'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Reward: Factor (.+) slightly boosts Tier (.+) Automation$/, '奖励：因子 $1 略微提升了 阶层 $2 自动化'],
    [/^Currently: (.+)x$/, '当前：$1x'],
    [/^Requires: (.+) Boosters$/, '要求：$1 助推器'],
    [/^Requires: (.+) gwarkup points$/, '要求：$1 gwarkup 点数'],
    [/^Requires: (.+) Ordinal Powers$/, '要求：$1 序数力量'],
    [/^Requires: (.+) psi ordinal$/, '要求：$1 psi 序数'],
    [/^Reach (.+) gwarkup points$/, '达到 $1 gwarkup 点数'],
    [/^(.+) gwarkup points$/, '$1 gwarkup 点数'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);