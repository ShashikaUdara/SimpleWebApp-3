// function addNewTextField()
// {
//     var $fieldCount = 0;
//     $(".error").remove();
//     $(".values").remove();
//     $fieldCount++;
//     var $node = '<p><label for="text'+$fieldCount+'">Text '+$fieldCount+': </label><input type="text" name="text'+$fieldCount+'" id="text'+$fieldCount+'"/><span class="removeField">Remove</span></p>';
//     $('p').last().after($node);
// }

// function addNewTextField() 
// {
//     // document.getElementById("demo").innerHTML = "Paragraph changed.";
//     var $fieldCount = 0;
//     $fieldCount++;
//     var $node = '<p><label for="text'+$fieldCount+'">Text '+$fieldCount+': </label><input type="text" name="text'+$fieldCount+'" id="text'+$fieldCount+'"/><span class="removeField">Remove</span></p>';
//     document.getElementById("demo").innerHTML = $node;
//     $('p').last().after($node);
// }
let template_field = "";
let fieldCount = 0;

function addNewTextField()
{
    // creating the template
    fieldCount++;
    template_field += `<li id="dynamic-list"><label class="label${fieldCount}">Item#${fieldCount}:<input id="item-text" class="field-no-item-${fieldCount}" type="text"><input id="item-amount" class="field-no-amount-${fieldCount}" type="text"></label></li>`;
    document.getElementById("bill-list").innerHTML = "<ul>" + template_field + "</ul>"
}