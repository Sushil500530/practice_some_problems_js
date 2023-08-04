// problem solving part 

// --- String --- 
let bngala = "we live in bangladesh, we always talk bangla of other people";
let founding = bngala.includes('lk');
let connect = bngala.match('ys')
console.log(founding)
console.log(connect);

// ---- Array ----
let book =['story', 'poem', 'math', 'history', 'childhood', 'bangla', 'grammer', 'science'];
// console.log(book[5])
let cut = book.slice(2, book.length);
console.log(cut);
cut['1'] = 'mistory';
console.log(cut)
let poping = cut.pop();
console.log(poping);
console.log(cut)
let shif = cut.shift();
// console.log(shif);
console.log(cut)
let uns = cut.unshift('sushil');
// console.log(uns);
console.log(cut)
let pusing = cut.push('dearling');
// console.log(pusing);
console.log(cut);
// important theme 
let splc = book.splice(2, 2, 'sushil','tui amar');
console.log(splc)
console.log(book)