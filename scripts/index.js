// function addNewTextField()
// {
//     var $fieldCount = 0;
//     $(".error").remove();
//     $(".values").remove();
//     $fieldCount++;
//     var $node = '<p><label for="text'+$fieldCount+'">Text '+$fieldCount+': </label><input type="text" name="text'+$fieldCount+'" id="text'+$fieldCount+'"/><span class="removeField">Remove</span></p>';
//     $('p').last().after($node);
// }

function addNewTextField() 
{
    // document.getElementById("demo").innerHTML = "Paragraph changed.";
    var $fieldCount = 0;
    $fieldCount++;
    var $node = '<p><label for="text'+$fieldCount+'">Text '+$fieldCount+': </label><input type="text" name="text'+$fieldCount+'" id="text'+$fieldCount+'"/><span class="removeField">Remove</span></p>';
    document.getElementById("demo").innerHTML = $node;
    $('p').last().after($node);
}