import day1 from "./days/day1"
import day2 from "./days/day2"

const days = [day1, day2]

days[parseInt(process.argv[2])-1]()
