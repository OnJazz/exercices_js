var changerImage = () => {
    let image1= document.getElementById("1")
    let image2= document.getElementById("2")
    let image3= document.getElementById("3")
    let image4= document.getElementById("4")
    let src1 = image1.src;
    let src2 = image2.src;
    let src3 = image3.src;
    let src4 = image4.src;
    image1.src = src4;
    image2.src = src1;
    image3.src = src2;
    image4.src = src3;
}