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

   // getting item-datalist items from the pre loaded array from the db
   let itemList = getItemList();

   template_field = `<form id="dFrom">
   <label class="label${fieldCount}">Item#${fieldCount}:</label>
   <input list="item-datalist-${fieldCount}" name="items"><datalist id="item-datalist-${fieldCount}">
   ${itemList}
   </datalist>
   <input id="item-amount-${fieldCount}" class="field-no-amount-${fieldCount}" type="text">
   </form>`;

   document.getElementById("bill-list").innerHTML += template_field;
}


function getItemList()
{
    const itemArray = ["item_1","item_2","item_3","item_4","item_5","item_6","item_7","item_8","item_9","item_10","item_11","item_12","item_13","item_14",
    "item_15","item_16","item_17","item_18","item_19","item_20","item_21","item_22","item_23","item_24","item_25","item_26","item_27","item_28","item_29",
    "item_30","item_31","item_32","item_33","item_34","item_35","item_36","item_37","item_38","item_39","item_40","item_41","item_42","item_43","item_44",
    "item_45","item_46","item_47","item_48","item_49","item_50","item_51","item_52","item_53","item_54","item_55","item_56","item_57","item_58","item_59",
    "item_60","item_61","item_62","item_63","item_64","item_65","item_66","item_67","item_68","item_69","item_70","item_71","item_72","item_73","item_74",
    "item_75","item_76","item_77","item_78","item_79","item_80","item_81","item_82","item_83","item_84","item_85","item_86","item_87","item_88","item_89",
    "item_90","item_91","item_92","item_93","item_94","item_95",
    "item_96","item_97","item_98","item_99","item_100"];

    let itemList = "";
    for(let x of itemArray)
    {
        itemList += `<option value="${x}">`;
    }
    console.log(itemList)
    return itemList;
}

function getBillList()
{
    console.log(fieldCount);
    let tempFieldNoId = "";
    let tempFieldNoId_Amount = "";
    let temp = "";

    for(let i = 0; i< fieldCount; i++)
    {
        tempFieldNoId_Item = "item-datalist-" + i;
        tempFieldNoId_Amount = "field-no-amount-" + i;
        console.log(tempFieldNoId_Item);
        console.log(tempFieldNoId_Amount);
        // temp = document.getElementById(tempFieldNoId_Item).value;
        // temp += " - " + document.getElementById(tempFieldNoId_Amount).value;
        // console.log(temp);
    }
}

// function addNewTextField()
// {
//     let itemList = getItemList();

//     $fieldCount++;
//     // var $node = '<p><label for="text'+$fieldCount+'">Text '+$fieldCount+': </label><input type="text" name="text'+$fieldCount+'" id="text'+$fieldCount+'"/><span class="removeField">Remove</span></p>';
//     let $template_field = `<form id="dFrom">
//     <label class="label${fieldCount}">Item#${fieldCount}:</label>
//     <input list="item-datalist-${fieldCount}" name="items"><datalist id="item-datalist-${fieldCount}">
//     ${itemList}
//     </datalist>
//     <input id="item-amount-${fieldCount}" class="field-no-amount-${fieldCount}" type="text">
//     </form>`;
//     ('#bill-list').last().after($template_field);
// }