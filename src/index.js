let units = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
let dozens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");


module.exports = function toReadable(n) {
if (n < 20) return units[n];
let num = n % 10;
if (n < 100) return dozens[~~(n / 10) - 2] + (num ? " " + units[num] : "");
if (n < 1000) return units[~~(n / 100)] + " hundred" + (n % 100 == 0 ? "" : " " + toReadable(n % 100));
return toReadable(~~(n / 1000)) + " thousand" + (n % 1000 != 0 ? " " + toReadable(n % 1000) : "");
}
