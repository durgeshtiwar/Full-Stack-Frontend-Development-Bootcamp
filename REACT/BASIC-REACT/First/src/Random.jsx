function Random() {
  let random = Math.random()*100;
  let fullName = "Durgesh Pratap Tiawri";
  return<p>
    I am Your Student {fullName}<br/>
    This is the Random No:{Math.round(random)}
  </p>
}
export default Random;