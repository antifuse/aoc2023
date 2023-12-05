import fs from "fs";
export default function main () {
    const input = fs.readFileSync("./inputs/input1.txt", {encoding: "utf-8"})
    let lines = input.split("\n")
    console.log(lines.reduce((acc, cur) => {
        let val = [...cur].map(a => parseInt(a)).filter(a=>!isNaN(a));
        return acc += val[0] * 10 + val[val.length-1];
    },0));


    let sum = 0;
    for (let line of lines) {
        const digits = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
        let numbers = [];
        let word = "";
        for (let i of [...line]) {
            if (!isNaN(parseInt(i))) {
                numbers.push(parseInt(i));
                word = "";
            } else {
                word += i;
                digits.forEach((val, ind) => {
                    if (word.includes(val)) {
                        numbers.push(ind + 1);
                        word = word.substring(word.length-2, word.length);
                    }
                });
            }
        }
        let toadd = (numbers[0] * 10 + numbers[numbers.length-1]);
        console.log(toadd);
        sum += toadd;
    }
    console.log(sum);
}