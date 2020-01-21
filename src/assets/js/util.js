export function csvToObject(csvString) {
  let csletry = csvString.split('\n')
  let datas = []
  let headers = csletry[0].split(',')
  for (let i = 1; i < csletry.length; i++) {
    let data = {}
    let temp = csletry[i].split(',')
    for (let j = 0; j < temp.length; j++) {
      data[headers[j]] = temp[j]
    }
    datas.push(data)
  }
  return datas
}
