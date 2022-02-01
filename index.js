class Formatter {

  static capitalize(string) {
    return string.charAt( 0 ).toUpperCase() + string.slice( 1 )
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]+/g, '' )
  }
  
  static titleize(string){
    Formatter.capitalize(string)

    let arr = string.split(' ')
    let exludeWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]

    // https://stackoverflow.com/questions/60393691/capitalize-every-first-word-except-some
    let newArray =  arr.map((word, i) => {
      return exludeWords.includes(word) && i!=0 ? [word] : word.charAt(0).toUpperCase() + word.slice(1);
    })
    
    return newArray.join(' ')

  }
}