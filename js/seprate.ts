const seprate = (Number : any)=>{
    let x;
    let y;
    let z;
    Number+= '';
    Number= Number.replace(',', '');
    x = Number.split('.');
    y = x[0];
    z= x.length > 1 ? '.' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(y))
      y= y.replace(rgx, '$1' + ',' + '$2');
    return y+ z;
}
export default seprate
