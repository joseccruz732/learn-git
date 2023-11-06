console.time('count');

for (let i = 0; i < 100000; ++i) {
    // console.log(i);
    process.stdout.write(`${i}\n`);
}

console.timeEnd('count');