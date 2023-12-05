import fs from "fs";
export default function main () {
    const input = fs.readFileSync("./inputs/input2.txt", {encoding: "utf-8"});
    let lines = input.split("\n");
    const regex = /(\d+) ([a-z]+)/gm;
    const maxCounts: any = {
        green: 13,
        red: 12,
        blue: 14
    }
    let games: boolean[] = [false]
    lines.forEach((val, ind) => {
        let matches = [...val.matchAll(regex)]
        matches.forEach(a => {
            if (parseInt(a[1]) > maxCounts[a[2]]) games[ind + 1] = true;
        });
        if (games[ind + 1] != true) games[ind + 1] = false;
    })
    console.log(games)
    console.log(games.reduce((acc, cur, ind) => acc + (cur == true ? 0 : ind), 0));
    console.log("PART TWO")
    let sum = 0;
    lines.forEach((val, ind) => {
        let matches = [...val.matchAll(regex)]
        let counts: any = {red: 0, green: 0, blue: 0}
        matches.forEach(a => {
            counts[a[2]] = Math.max(counts[a[2]], parseInt(a[1]))
        });
        sum += (counts.green * counts.red * counts.blue);
    })
    console.log(sum)
}