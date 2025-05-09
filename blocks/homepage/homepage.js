const homepage=document.querySelector(".homepage");
const paragraphs = homepage.querySelectorAll("div>div>p");
if(paragraphs.length>=2){
    paragraphs[0].id='title';
    paragraphs[1].id='description';
}
//Image left

const imageLeft=document.querySelector('.image-left');
const picture=imageLeft.querySelector('div>div>picture');
const imagePara=imageLeft.querySelectorAll('div>div>p')[0];
if(picture){
    picture.id='left-image';
}
if(imagePara){
    imagePara.id='right-text';
}

//Image right

const imageRight=document.querySelector('.image-right');
const pictureRight=imageRight.querySelector('div>div>picture');
const imageParaRight=imageRight.querySelectorAll('div>div>p')[0];
if(pictureRight){
    pictureRight.id='right-image';
}
if(imageParaRight){
    imageParaRight.id='left-text';
}
//Text Middle

const centeredSection=document.querySelector('.centered-section');
const cfmTitle=centeredSection.querySelector('div>div>h2');
const cfmDesc=centeredSection.querySelector('div>div>p');
if(cfmTitle){
    cfmTitle.id='center-title';
}
if(cfmDesc){
    cfmDesc.id='center-description';
}


//footer

const siteFooter=document.querySelector(".site-footer");
const footerContent=document.querySelector(".footer-Content");
const footerHeading=siteFooter.querySelector('div>div>h3');
if(footerHeading){
    footerHeading.id="footer-heading"
}
const pTag = siteFooter?.querySelector('div div p');
if (pTag) {
pTag.id = 'footer-links-text';
 const links = pTag.querySelectorAll('a');
 links.forEach((link, index) => {
link.id = `site-content-link-${index + 1}`;
 });
}
const wrapperDiv = siteFooter?.querySelector('div');
const blocks=wrapperDiv?.querySelectorAll(":scope>div");
const thirdBlockP=blocks?.[2]?.querySelector('p');
if(thirdBlockP){
    thirdBlockP.id='footer-third-block-text';
}


//caros//




