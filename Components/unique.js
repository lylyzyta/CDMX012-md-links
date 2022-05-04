function unique(Links) {
  let unique = [...new Set(Links.map((item) => item.href))];
  return unique.length;
}
module.exports = unique;
