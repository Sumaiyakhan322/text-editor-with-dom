document.getElementById('bold').addEventListener('click',function(){
    // const value=getTheValue('given-text');
    const value=document.getElementById('given-text');
    
    value.style.fontWeight='bold';
    
})
document.getElementById('italic').addEventListener('click',function(){
    // const value=getTheValue('given-text');
    const value=document.getElementById('given-text');
    value.style.fontStyle='italic';
})
document.getElementById('underline').addEventListener('click',function(){
    // const value=getTheValue('given-text');
    const value=document.getElementById('given-text');
    value.style.textDecoration='underline';
})
document.getElementById('left').addEventListener('click',function()
{
    const value=document.getElementById('given-text');
    value.style.textAlign='left';
})
document.getElementById('center').addEventListener('click',function()
{
    const value=document.getElementById('given-text');
    value.style.textAlign='center';
})
document.getElementById('right').addEventListener('click',function()
{
    const value=document.getElementById('given-text');
    value.style.textAlign='right';
})
document.getElementById('font-size').addEventListener('mousemove',function()
{
    const givenText=document.getElementById('given-text');
    const fieldOfTheFont=document.getElementById('font-size');
    const valueofTheFontString=fieldOfTheFont.value;
    const valueOfTheFont=parseFloat(valueofTheFontString);
    givenText.style.fontSize=valueOfTheFont +'px';
    
})




document.getElementById('font-color').addEventListener('mousemove',function()
{
    const value=document.getElementById('given-text');
    const fieldOfTheFont=document.getElementById('font-color');
    const valueofTheFontString=fieldOfTheFont.value;
    value.style.color=valueofTheFontString;
})


